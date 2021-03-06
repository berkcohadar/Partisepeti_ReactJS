import React, { useEffect, useRef, useState, useCallback  } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Spin } from 'antd';
import ProductRepository from '~/repositories/ProductRepository';
import CollectionRepository from '~/repositories/CollectionRepository';

import ProductSearchResult from '~/components/elements/products/ProductSearchResult';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [isSearch, setIsSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [resultItems, setResultItems] = useState(null);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState(null);


    const debouncedSearchTerm = useDebounce(keyword, 300);


    function handleClearKeyword() {
        setKeyword('');
        setIsSearch(false);
        setLoading(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push(`/alisveris?&search=${keyword}&categories=${category}&categoryName=${categoryName}`);
    }

    function handleOptionChange(e) {
        var index = e.target.selectedIndex;
        setCategoryName(e.target[index].text);
        setCategory(e.target.value)
    }

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            handleClearKeyword();
          //Do whatever when esc is pressed
        }
      }, []);
      
    function handleClickOutside(event) {
        if (inputEl.current && !inputEl.current.contains(event.target)) {
            handleClearKeyword();
        }
    }
    async function getCategories() {
        setLoading(true);
        const data = await CollectionRepository.getCollections();
        if (data) {
            data.unshift({
                id: '',
                name: "T??m Kategoriler",
                slug: "",
                thumbnail: null,
                description: "",
                meta_description: "",
                date_created: "2021-10-16T01:10:42.096670+03:00",
            });
            setCategories(data);
        }
    }

    useEffect(() => {
        getCategories();
        if (debouncedSearchTerm) {
            if (keyword) {
                var queries = {
                    search: keyword,
                };

                if (category){
                    var queries = {
                        search: keyword,
                        categories:category,
                    };
                }

                const products = ProductRepository.getProducts(queries);
                products.then((result) => {
                    setLoading(false);
                    setResultItems(result);
                    setIsSearch(true);
                });
            } else {
                setIsSearch(false);
                setKeyword('');
                setLoading(false)
            }
            if (loading) {
                setIsSearch(false);
            }
        } else {
            setLoading(false);
            setIsSearch(false);
        }
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("keydown", escFunction, false);
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [debouncedSearchTerm]);

    // Views
    let productItemsView,
        clearTextView,
        loadingView,
        selectOptionView,
        loadMoreView;
    if (!loading) {
        if ( resultItems && resultItems.items && resultItems.items.length > 0) {
            if (resultItems.items.length > 5) {
                loadMoreView = (
                    <div className="ps-panel__footer text-center">
                        <Link href={`/search?keyword=${keyword}`}>
                            <a>B??t??n Sonu??lar?? G??r??nt??le</a>
                        </Link>
                    </div>
                );
            }
            productItemsView = resultItems.items.map((product) => (
                <ProductSearchResult product={product} key={product.id} />
            ));
        } else {
            productItemsView = <p>??r??n Bulunamad??.</p>;
        }
        if (categories && categories.length > 0){
            selectOptionView = categories.map((option)=>(
                <option value={option.id} key={option.name} selected={option.id==category?true:false}>
                    {option.name}
                </option>
            ))
        } else{
            selectOptionView = <option value={0} key={"loading"}>Bekleniyor...</option>;
        }
        if (keyword !== '') {
            clearTextView = (
                <span className="ps-form__action" onClick={handleClearKeyword}>
                    <i className="icon icon-cross2"></i>
                </span>
            );
        }
    } else {
        loadingView = (
            <span className="ps-form__action">
                <Spin size="small" />
            </span>
        );
    }

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            ref={inputEl}
            onSubmit={handleSubmit}>
            <div className="ps-form__categories">
                <select onChange={(val) => handleOptionChange(val)} className="form-control">
                    {selectOptionView}
                </select>
            </div>
            <div className="ps-form__input">
                <input
                    className="form-control"
                    type="text"
                    value={keyword}
                    placeholder="Bunu ar??yorum..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                {clearTextView}
                {loadingView}
            </div>
            <button onClick={handleSubmit}>Ara</button>
            <div
                className={`ps-panel--search-result${
                    isSearch ? ' active ' : ''
                }`}>
                <div className="ps-panel__content">{productItemsView}</div>
                {loadMoreView}
            </div>
        </form>
    );
};

export default SearchHeader;

