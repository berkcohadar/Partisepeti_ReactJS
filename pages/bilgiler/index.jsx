import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';

const { TabPane } = Tabs;

const LegalInformationPage = () => {
    const router = useRouter();
    const { page } = router.query;
    const [activeKey, setActiveKey] = useState(page)
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Legal Bilgiler',
        },
    ];

    const handleTabChanged = (key) => {
        router.push('bilgiler?page='+key)
    }

    useEffect(() => {
        console.log(page);
        setActiveKey(page);
    }, [page]);


    return (
        <ContainerPage title="Legal Bilgiler" boxed={true}>
            <div className="ps-page--legal__info" id="legal-info">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-legal__info">
                    <Tabs className="ps-product__tabs" 
                    onChange={(key)=>handleTabChanged(key)}
                    activeKey={activeKey}>
                        <TabPane tab="Hakkımızda"  key="hakkimizda">
                            <div className="ps-document">
                                <h3>Biz Kimiz?</h3>
                                <p>2002 yılında eğlence sektörüne adım atan Parti Sepeti ailesi, her geçen gün büyüyen ekibiyle siz değerli müşterilerimize zengin çeşit ve kaliteli ürünleriyle hizmet vermeyi amaçlayan, özel gün kutlamalarınız için isteyebileceğiniz parti malzemelerini dilediğiniz ayrıcalıklarla sizlere sunan bir kuruluştur.
                                </p>

                                <p>Müşteri memnuniyeti ilkesiyle yola çıkan Parti Sepeti ailesi, hayalinizdeki partileri gerçekleştirmeniz, standartlardan bir adım öne çıkmanız için tüm parti malzemelerini sizlerin beğenisine sunarak kutlamalarınızı en eğlenceli şekilde gerçekleştirmenizi sağlıyor.
                                </p>
                                <p>Bünyesinde bulunan 10000 çeşit her zevke hitap eden geniş ürün yelpazesini müşterilerine sunmakla birlikte, sizlerin hayallerindeki tasarımları da gerçekleştirerek özel günlerinizde sizlerin en eğlenceli ve değerli vakitlerine şahitlik ediyor.
                                </p>
                                <p>Parti Sepeti, İstanbul (Kozyatağı, Maltepe, Bakırköy, Pendik, Etiler ), İzmir, Adana, Ankara bulunan mağazalarının yanı sıra online alışveriş sitesiyle de siz değerli müşterilerimize hizmet vermektedir.
                                </p>

                                <h3>Hızlı Kargo</h3>
                                <p>Parti Sepeti, 13:30’a kadar verilen siparişleri aynı gün kargoya teslim ederek, ürünleri en kısa sürede sizlere ulaştırıyor.
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab="Yurt Dışı Gönderimi" key="yurt-disi-gonderimi">
                            <div className="ps-document">
                                <h3>YURTDIŞI TESLİMAT ŞARTLARI</h3>
                                <ul>
                                    <li>Partisepeti.com, PTT kargonun gönderim yaptığı her ülkeye gönderim yapmaktadır. Bilgi için destek@partisepeti.com adresine mail atabilirsiniz
                                    </li>
                                    <li>Yurtdışına gönderimlerimiz PTT kargo ile yapılmaktadır. Kargo ücreti ( 75 TL İle 150 tl arası  kargonun  hacmine göre değişir)  olup sipariş tutarınıza ilave edilmektedir.
                                    </li>
                                    <li>Siparişinizi banka havalesi yöntemi ile verdikten sonra; ödemelerinizi EU hesabımız, Moneygram ya da Western Union kanallarını kullanarak yapabilirsiniz.
                                    </li>
                                    <li>Ödeme yaptığınızda dekontu paylaşırsanız hemen çalışmalar başlar. Havale geçişleri 2 işgünü olduğundan dekont gönderilmediğinde ancak bu zaman sonunda bilgimiz olabilir ve gecikebiliriz.
                                    </li>

                                </ul>
                            </div>
                        </TabPane>
                        <TabPane tab="İptal ve İade" key="iptal-ve-iade">
                            <h3>GARANTİ, İADE VE İPTAL ŞARTLARI</h3>

                            <p>Firmamızda satılan tüm ürünler, orijinal olup üretici ve ithalatçı firmaların garantisi altındadır. Siparişleriniz gönderilmeden önce kontrol edilerek kargoya teslim edilir. Gönderileriniz sigortalı olarak size ulaşır. Teslimat anında üründe herhangi bir yırtılma, kırılma veya benzer sorun görürseniz ürünü teslim almayarak kargo sorumlusuna iade ediniz.</p>

                            <h4>Ürün Teslimatı</h4>

                            <p>Ürün teslimatları “1” iş günü içerisinde kargoya verilir ve ortalama “3” iş günü içerisinde kargo ile teslimatı gerçekleştirilir.</p>

                            <h4>Genel iade şartları aşağıdaki gibidir;</h4>

                            <ul>
                                <li>İadeler, ürün teslim tarihinden itibaren 7 iş günü içerisinde yapılmalıdır. </li>

                                <li>İadeler mutlak surette orijinal kutu veya ambalajı ile birlikte yapılmalıdır. </li>

                                <li>Orijinal kutusu/ambalajı bozulmuş, tekrar satılabilirlik özelliğini kaybetmiş, başka bir müşteri tarafından satın alınamayacak durumda olan ürünlerin iadesi kabul edilmemektedir.</li>

                                <li>İade etmek istediğiniz ürün ile birlikte orijinal fatura (sizdeki bütün kopyaları) ve iade sebebini içeren bir dilekçe göndermeniz gerekmektedir.</li>

                                <li>Kişiye  özel ürünlerde müşteriden son haliyle onay alındığı için kişiye özel ürünlerin  iadesi kabul edilmemektedir.</li>

                                <li>Ürün İadesi kargo ücreti müşteriye aittir</li>

                            </ul>

                            <h4>İademi hangi adrese göndereceğim?</h4>
                            <p>"İade Adresi : İdealtepe Mahallesi  Turgut Özal Bulvarı No 101/ İstanbul / Maltepe- Parti Sepeti Süs ve Oyuncak A.Ş</p>

                            <h4>İade ettiğim ürünün ödemesi ne zaman yapılacak?</h4>

                            <p>Müşteri hizmetleri departmanımıza gelen ürünlerin, iade şartlarına uygun ulaştırılması durumunda ürün tutarlarının iadesi, ürünün tarafımıza ulaştığı gün işleme alınır. İadenin hesabınıza yansıma süresi, bankanızın insiyatifindedir. Kredi kartına yapılan iadeler 7 iş günü içerisinde, havale ile yapılan ödemeler ise en geç  2  iş günü içerisinde hesaba yansımaktadır.</p>

                            <h4>Tutar iadem neden taksit taksit yapılıyor?</h4>

                            <p>Taksitli olarak satın almış olduğunuz ürüne ait bedelin, tamamı kredi kartınıza iade edilmekte ancak bankanız tarafından iadenin kredi kartınıza geri ödemesi, taksitli olarak kartınıza yansıtılmaktadır.</p>
                        </TabPane>
                        <TabPane tab="Şikayet ve Bildirim" key="sikayet-ve-bildirim">
                            <h3>Yakında</h3>
                        </TabPane>
                        <TabPane tab="Mesafeli Satış Sözleşmesi" key="mesafeli-satis-sozlesmesi">
                            <h3>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
                            <p>TARAFLAR VE KONU İşbu sözleşme www.partisepeti.com internet sitesinden (bundan sonra İNTERNET SİTESİ olarak anılacaktır) ürün (bundan sonra ÜRÜN/ÜRÜNLER olarak anılacaktır) satın alacak kişi (bundan sonra ALICI olarak anılacaktır) ile Aydınevler Mah Sancak Sok No : 11 adresinde (Tel: 0850 302 48 46 ; email: destek@partisepeti.com bulunan satıcı firma Partisepeti (bundan sonra SATICI olarak anılacaktır) arasındaki alışverişe ilişkin olarak, ALICI tarafından elektronik ortamda doldurulan, ÜRÜN ile ilgili özelliklerin, nitelik-niceliğinin, satış fiyatının, satış bedelinin tahsilat usül-şartlarının ve satış tarihinin belirtildiği sipariş formu ile Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeler Uygulama Esas ve Usulleri Hakkında Yönetmelik hükümleri kapsamında tarafların hak, hukuk ve yükümlülüklerini tespit eder. MADDE 1. CAYMA HAKKI SATICI tüketici ALICI'ya aşağıdaki taahhütte bulunmaktadır. "Tüketicinin hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin (ve cezai şart ödemeksizin) malı teslim aldığı veya sözleşmenin imzalandığı tarihten itibaren yedi gün içerisinde malı veya hizmeti reddederek sözleşmeden cayma hakkının var olduğunu ve cayma bildiriminin satıcı veya sağlayıcıya ulaşması tarihinden itibaren malı geri almayı taahhüt ederiz." Ancak ilgili hukuki düzenlemeler gereğince şu mal/hizmetlere ilişkin sözleşmelerde, kullanılmamış/istifade edilmemiş olsa dahi, cayma hakkı bulunmamaktadır : Tüketicinin özel istekleri veya onun kişisel ihtiyaçları doğrultusunda üretilen (üzerinde değişiklik ya da ilaveler yapılarak kişiye/kişisel ihtiyaçlara özel hale getirilenler dahil) mallar; kozmetik vb.leri ile çikolata vb gıda maddeleri gibi niteliği itibariyle geri gönderilmeye elverişli olmayan ve çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar; Tüketici tarafından ambalajı açılmış cd, dvd gibi ses veya görüntü kayıtları, yazılım programları ve bilgisayar sarf malzemeleri; fiyatı borsa gibi teşkilanlanmış piyasalarda belirlenen mallar; gazete, dergi gibi yayınlar; bahis ve piyangoya ilişkin hizmetler; genel olarak, elektronik ortamda anında ifa edilen tüm hizmetler ve tüketiciye anında teslim edilen her türlü gayi maddi mallar. Ayrıca, Tüketici onayı ile cayma hakkı süresi içinde ifasına başlanan hizmetler ve ilgili mevzuat uyarınca mesafeli satış kapsamı dışında kabul edilen diğer mal-hizmetler. Cayma hakkının kullanılması için bu süre içinde SATICI'ya yazılı bildirimde bulunulması şarttır. (Yazılı bildirim mekup, elektronik posta gibi bir sürekli veri taşıyıcısı-uzaktan ileşitim aracı ile de yapılabilir) Bu hakkın kullanılması halinde, anılan yazılı bildirimin yanısıra 3. kişiye veya ALICI'ya teslim edilen Ürün'ün SATICI'ya gönderildiğine ilişkin kargo teslim tutanağı örneği ile (vergi mevzuatı uyarınca) fatura aslının iadesi gerekmektedir.Ayrıca, iade edilmesi gereken Ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak SATICI'ya teslim edilmesi gerekmektedir. Cayma hakkı kullanılarak iade edilen ürünün kargo bedeli SATICI tarafından karşılanır. ALICI tarafından iade faturası kesilmesi gereken hallerin yanısıra Ürünle beraber iade edilecek olan fatura üzerinde altta yer alan iade ile ilgili bölüm doldurulup imzalanacaktır. Faturası kurumlar adına düzenlenen sipariş iadeleri İADE FATURASI kesilmediği takdirde kabul edilmeyecektir. Yukarıda yazılı belgelerin ve Ürün'ün SATICI'ya bu şekilde ulaşmasını takip eden 10 gün içinde Ürün bedeli ALICI'ya iade edilir. Kredi kartlı ödemelerde iade işlemi de ALICI kredi kartına iade sureti ile yapılır (Genel Hükümler 7. maddenin iadeye ilişkin hüküm ve açıklamaları cayma hakkının kullanılması sebebi ile iade hallerinde de geçerlidir) Cayma hakkı kullanılabilen Ürünlerde, yine mevzuat uyarınca, malda mutat kullanım dışında kullanımdan ötürü meydana gelen değişiklik ve bozulmalardan ya da genel olarak tüketicinin kusurundan kaynaklanan bir değer azalması söz konusu ise Tüketici'nin değerdeki bu azalmayı, iade imkânsızlığı var ise malın değerini (yukarıdaki satış fiyatını) SATICI'ya tazmin etmesi gerekir. Madde 2. GENEL HÜKÜMLER 1. ALICI, İNTERNET SİTESİ'nde gösterilen ürünlerin temel nitelikleri, tüm vergiler dahil satış fiyatı ve ödeme şekli ile teslimat ve cayma hakkı ile kullanım şartlarına ilişkin ön bilgilerin tarafına ulaştığını, okuyup bilgi sahibi olduğunu ve elektronik ortamda satış için gerekli teyid-onayları verdiğini kabul eder. 2. Sözleşme konusu ürün, yasal 30 günlük (ve ALICI'nın önceden bilgilendirilmesi ile ek 10 günlük) süreyi aşmamak koşulu ile her bir ürün için ALICI'nın yerleşim yerinin uzaklığına bağlı olarak internet sitesinde ön bilgiler içinde açıklanan süre içinde ALICI veya gösterdiği adresteki kişi/kuruluşa, SATICI’nın anlaşmalı olduğu kargo firması tarafından teslim edilir. SATICI sattığı ürünleri KARGO firmaları aracılığı ile ALICI’lara göndermekte ve teslim ettirmektedir. 3. Genel olarak aksi belirtilmediği sürece teslimat masrafları (kargo ücreti vb.) ALICI’ya aittir. SATICI satış anında yürüttüğü ve İNTERNET SİTESİ ‘nde şartlarını ilan ettiği kampanyaların sonucuna bağlı olarak söz konusu teslimat masraflarının tamamını yada bir kısmını ALICI’ya yansıtmayabilir. 4. Adreste teslim edilmiş ürünlerin, teslimatı anında ALICI'nın bizzatihi adresinde bulunmaması durumunda, SATICI edimini tam ve eksiksiz olarak yerine getirmiş olarak kabul edilecektir. Adreste teslim alacak kimsenin olmaması durumunda kargo firması ile temas kurarak ürünlerin sevkiyatını takip etmek ALICI’nın sorumluluğu olacaktır Ürün, ALICI'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun adresinde bulunmamasından veya teslimatı kabul etmemesinden SATICI sorumlu tutulamaz. Bu hallerde ALICI'nın Ürün'ü geç teslim almasından kaynaklanan her türlü zarar ile Ürün'ün kargo şirketinde beklemiş olması ve/veya kargonun SATICI'ya iade edilmesinden dolayı oluşan giderler de ALICI'ya aittir. 5. ALICI, Ürün'ü teslim aldığı anda kontrol etmekle ve Ürün'de kargodan kaynaklanan bir sorun gördüğünde, Ürün'ü kabul etmemekle ve KARGO firması yetkilisine tutanak tutturmakla sorumludur. Aksi halde SATICI sorumluluk kabul etmeyecektir. ÜRÜN teslimatı sırasında SATICI'nın talebi halinde ALICI işbu Sözleşmenin bir basılı örneğini imzalamakla yükümlüdür; imzalamaması durumunda ÜRÜN teslimatı yapılmayabilir. İNTERNET SİTESİ'nden alışveriş sırasında ALICI tarafından onaylanan bu Sözleşme her durumda yeterli ve geçerlidir. 6. ALICI, SATICI tarafından aksi yazılı öngörülmemiş ise, Ürün'ü teslim almadan önce bedelini tamamen ödemiş olması gerekir. Peşin satışlarda teslimattan önce Ürün bedeli SATICI'ya tamamen ödenmediği, taksitli satışlarda vadesi gelen taksit tutarı tediye edilmediği takdirde, SATICI tek taraflı olarak sözleşmeyi iptal edebilir ve Ürün'ü teslim etmeyebilir. Ürün teslimatı sonrasında herhangi bir sebepten dolayı, işlem yapılan kredi kartının ait olduğu Banka/finansman kurumunun Ürün bedelini SATICI'ya ödememesi halinde, Ürün en geç 3 gün içinde ALICI tarafından tüm giderleri ALICI'ya ait olmak üzere SATICI'ya iade edilir. SATICI'nın iadeyi kabul etmeksizin Ürün bedeli alacağını takip dahil diğer tüm akdi-kanuni hakları ayrıca ve herhülakarda saklıdır. Tereddüte mahal vermemek bakımından; ALICI'nın satış bedelini Bankalar ve finansman kuruluşlarından sahibi bulunduğuı kredi kartı, taksit kart v.b. ile ödediği hallerde bu kartların sağladığı tüm imkanlar doğrudan kartı veren kuruluşca sağlanmış kredi ve/veya taksitli ödeme imkanlarıdır; bu çerçevede gerçekleşen ve SATICI'nın bedelini defaten veya peyder pey tahsil ettiği Ürün satışları işbu Sözleşme’nin tarafları yönünden kredili veya taksitli satış değildir ve peşin satıştır. SATICI'nın kanunen taksitle satış sayılan hallerdeki yasal hakları (taksitlerinödenmemesi halinde sözleşmeyi fesih ve/veya kalan borcun tümünün temerrüt faizi ile birlikte ödenmesini talep hakları dahil) mevcut ve saklıdır. ALICI'nın temerrüdü durumunda aylık % 5oranında temerrüt faizi tatbik edilir. 7. Ürün'ün normal satış/teslimat koşulları dışında olağanüstü durumlar (hava muhalefeti, yoğun trafik, deprem, sel, yangın gibi) nedeni ile yasal 30 günlük süre zarfında teslim edilememesi ve gecikmenin 10 günü aşması söz konusu ise, SATICI teslimat ile ilgili olarak ALICI'yı bilgilendirir. Bu durumda ALICI siparişi iptal edebilir, benzer bir ürün sipariş edebilir veya olağanüstü durum sonuna kadar bekleyebilir. Sipariş iptallerinde Ürün bedeli tahsil edilmiş ise iptalden itibaren 7 gün içinde ALICI'ya iade edilir. Kredi kartlı ödemelerde iade işlemi de ALICI kredi kartına iade sureti ile yapılır ve Ürün tutarı, siparişin ALICI tarafından iptal edilmesinden sonra 7 gün içerisinde ilgili bankaya iade edilir; bu tutarın Bankaya iadesinden sonra ALICI hesaplarına yansıması tamamen Banka işlem süreci ile ilgili olduğundan, ALICI olası gecikmeler için SATICI’nın herhangi bir şekilde müdahalede bulunmasının ve sorumluluk üstlenmesinin mümkün olamayacağını şimdiden kabul eder.. (Bankaların iadeyi ALICI hesabına yansıtma işlemleri genellikle üç haftayı bulabilmektedir). 8. SATICI olağanüstü durumlar dışında haklı bir nedenle Sözleşme konusu Ürün/hizmetin tedarik edilemeyeceğinin anlaşılması halinde TÜKETİCİ'yi bilgilendirerek onayını almak sureti ile eşit kalite ve fiyatta başka bir mal/hizmeti tedarik edebilir ve Sözleşme konusu taahhüdünü bu suretle yerine getirmiş sayılır. TÜKETİCİ'nin onay vermediği hallerde sipariş iptaline ilişkin hükümler uygulanır. 9. ALICI Ürün ve satışla ilgili talep ve şikayetlerini Sözleşme'nin giriş kısmındaki SATICI ileşitim kanalları ile SATICI'ya bildirebilir. ÜRÜN teslimatı sırasında SATICI'nın talebi halinde ALICI işbu Sözleşmenin bir basılı örneğini imzalamakla yükümlüdür; imzalamaması durumunda ÜRÜN teslimatı yapılmayabilir. İNTERNET SİTESİ'nden alışveriş sırasında ALICI arafından onaylanan bu Sözleşme her durumda yeterli ve geçerlidir. 10. ALICI tarafından ön bilgileri almasını ve tediyidini müteakiben onaylanan işbu Sözleşme, ilgili hükümler saklı kalmak üzere, tarafların Sözleşme'den doğan ödeme/teslim yükümlülüklerini yerine getirdikleri zamana kadar yürürlüktedir. Madde 3. DELİL ANLAŞMASI VE YETKİLİ MAHKEME Bu Sözleşme'den ve/veya uygulanmasından doğabilecek hertürlü uyuşmazlığın çözümünde SATICI kayıtları (bilgisayar-ses kayıtları gibi manyetik ortamdaki kayıtlar dahil) kesin delil oluşturur; T.C. Sanayi ve Ticaret Bakanlığınca her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde Tüketici Hakem Heyetleri, aşan durumlarda ALICI'nın ve SATICI'nın yerleşim yerindeki Tüketici Mahkemeleri ve İcra Müdürlükleri yetkilidir. ALICI bu Sözleşme'de ve ayrılmaz parçasını oluşturan sipariş-sözleşme ön bilgilendirme formunda yazılı tüm koşulları ve açıklamaları okuduğunu, satışa konu Ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları vs. satışa konu Ürün ile ilgili tüm ön bilgiler ve cayma hakkı konusunda önceden bilgi sahibi olduğunu, ön bilgileri İNTERNET SİTESİ'nde elektronik ortamda görmesinin ve teyidin yanısıra elektronik postasına gönderildiğini, böylece tüm bunlara elektronik ortamda teyit-onay vererek ürünü sipariş ve işbu Sözleşme hükümlerini kabul ettiğini beyan eder.</p>
                        </TabPane>
                        <TabPane tab="Gizlilik ve Güvenlik Sözleşmesi" key="gizlilik-ve-guvenlik">
                            <h3>GİZLİLİK İLKELERİ</h3>

                            <p>www.partisepeti.com  internet sitesi gizlilik ilkeleridir.

                                Bu gizlilik ilkeleri “PARTİ SEPETİ SÜS VE OYUNCAK A.Ş”tarafından, “PARTİ SEPETİ SÜS VE OYUNCAK A.Ş.`nin” gizlilik konusundaki  sorumluluklarının tespiti için hazırlanmıştır. Aşağıdaki maddeler  www.partisepeti.com web  sitesi gizlilik ilkelerini ve web sitesi üzerindeki bilgi toplama ve dağıtımı işlemlerinin kurallarını içermektedir.

                                IP adresinizi sunucularımızdaki sorunların giderilmesi ve internet sitemizi yönetmek için ve alışveriş sepetinizi tanımak ve açık demografik bilgilerinizin toplanması için kullanılır.

                                Sitemizde alışveriş sepetinizin takibi ve ayni reklamların ard arda görülmesinin engellenmesi için cookielerden yararlanılmaktadır. Cookielerden size ilgi alanlarınız doğrultusunda içerik sunulması ve tekrar tekrar şifre girmemeniz için şifrenizin saklanması gibi konularda yararlanılmaktadır. 18 yaşından küçüklerin, www.partisepeti.com web sitesine, velileri veya vasilerinden izin almaksızın bilgi sunmalarından PARTİ SEPETİ SÜS VE OYUNCAK A.Ş..”sorumlu tutulamaz.

                                Sitemizin kayıt formunda, kullanıcılarımız iletişim bilgilerini (isim, adres, telefon, mail adresi... gibi) girmelidir. Bu formda aldığımız iletişim bilgilerini üyelerimize, firmamız ve tarafımızca belirlenen firmalar hakkında bilgi ve kampanya haberleri ve materyallerini göndermek için kullanılır. İletişim bilgileri ayrıca kullanıcılarımızla iletişime geçmemiz gerektiğinde kullanılır ve kullanıcımızla iletişime geçmek isteyen diğer firmalarla paylaşılmaz Kullanıcılarımız isteklerine bağlı olarak sistemimizden kayıtlarını sildirebilir. Alınan finansal bilgiler, satın alınan ürün ve hizmetlerin bedelinin tahsil edilmesinde ve diğer gerek duyulan durumlarda kullanılır. Kişiye özel bilgiler, kullanıcılarımızın sisteme girişlerinde ve diğer gerektiği durumlarda kişinin kimliğinin doğrulanmasında kullanılır. İstatistiki bilgiler ve profil bilgileri ayrıca sitemizin içinde de toplanarak istenilen tüm durumlarda da kullanılır. Bu bilgiler ziyaretçi hareketlerinin izlenmesi, kişiye özel içerik sağlanması durumlarında kullanılır. Kullanıcı bilgileriniz gizli tutulup 2. Şahıslarla paylaşımı yapılmayacaktır.

                                www.partisepeti.com  internet sitesi gizlilik ilkeleridir. </p>

                            <h3>GÜVENLİK İLKELERİ</h3>

                            <p> <strong> PARTİ SEPETİ SÜS VE OYUNCAK A.Ş </strong> kişisel bilgilerinizi yetkisiz erişim, kullanım ya da ifşa edilmeye karşı korur.PARTİ SEPETİ SÜS VE OYUNCAK A.Şbilgisayar sunucuları üzerinde vermiş olduğunuz tanıtıcı kişisel bilgilerinizi yetkisiz erişim, kullanım ya da ifşa edilmeye karşı koruyan kontrollü ve güvenli bir ortamda korur.</p>

                            <h4>Bu Beyanda Yapılacak Değişikler</h4>

                            <p>PARTİ SEPETİ SÜS VE OYUNCAK A.Ş şirket ve müşteri geribildirimlerini yansıtmak üzere bu Gizlilik Beyanını zaman zaman güncelleyecektir.PARTİ SEPETİ SÜS VE OYUNCAK A.Şdüzenli olarak bu Beyanı gözden geçirerek PARTİ SEPETİ SÜS VE OYUNCAK A.Ş’in bilgilerinizi nasıl koruduğu konusunda bilgi almanızı önerir.</p>
                            <h4>Biglilerim Nasıl Korunur?</h4>
                            <p>
                                www.partisepeti.com internet sitemiz 256 bit SSL sertifikası ile korunmaktadır. SSL Sertifikası, sunucunun kimlik doğrulamasını sağlayan ve sunucu-istemci arasındaki verinin güvenliğini ve bütünlüğünü mümkün kılan sertifikadır. İki bilgisayar arasındaki bilginin diğer kişiler tarafından görüntülenmeden, doğrudan iletişimde olan iki bilgisayar arasında ve güvenli bir şekilde iletilmesini sağlar.

                                Sitemize giriş yaptığınız andan itibaren sunucu ile tarayıcı arasında SSL oturumu başlatılır. SSL fonksiyonu müşterinin tarayıcısından, sunucuya kredi kartı bilgilerinin şifrelenmiş şekilde ulaşmasını sağlar. Kötü niyetli kimseler bu aşamada özel yazılım ya da cihazlarla ağ trafiğini izleyebilirler, ağda gidip gelen paketlerin içeriğini görüntüleyebilirler. Fakat paket içerikleri şifreli olduğu için istedikleri bilgiye ulaşamayacaklardır. Şifreli metinleri çözmek içinse, çok güçlü bilgisayarlarla bile yıllarca sürecek, ancak deneme yanılma yöntemiyle bulabilecekleri bir anahtara ihtiyaçları olacaktır. Bu şartlarda, SSL ile kredi kartının satıcı firmanın sunucusuna ulaştırılması son derece güvenlidir.

                                Fakat SSL tabi ki sunucu üzerinde kayıtlı tutulan kredi kartı bilgilerini korumaz. Kaydı Tutulan Kredi kartı bilgilerinin güvenliği tümüyle web sitesinin yönetimine aittir. Bu bağlamda www.partisepeti.com'a girilen kredi kartı bilgilerini saklamaz. Girilen bilgiler, bankanızdan ödeme onayı alındığı anda otomatik olacak silinecektir.

                                PARTİ SEPETİ SÜS VE OYUNCAK A.Ş bu Gizlilik Beyanı hakkındaki görüşlerinizi memnuniyetle karşılayacaktır.PARTİ SEPETİ SÜS VE OYUNCAK A.Ş.’in bu Beyana uygun davranmadığını düşünüyorsanız, lütfen PARTİ SEPETİ SÜS VE OYUNCAK A.Ş’in ağ yöneticisiyle iletişime geçin. Sorunu hemen belirlemek ve çözmek için ticari yönden makul her çabayı göstereceğiz.
                            </p>

                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </ContainerPage>
    );
};

export default LegalInformationPage;