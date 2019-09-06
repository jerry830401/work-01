
const moviesData = [
    { name: '鋼鐵人', img: 'iron', step: 0, id: 1 },
    { name: '無敵浩克', img: 'hulk', step: 0, id: 2 },
    { name: '鋼鐵人2', img: 'iron2', step: 0, id: 3 },
    { name: '雷神索爾', img: 'thor', step: 0, id: 4 },
    { name: '美國隊長', img: 'captain', step: 0, id: 5 },
    { name: '復仇者聯盟', img: 'avengers', step: 0, id: 6 },
    // step1
    { name: '鋼鐵人3', img: 'iron3', step: 1, id: 7 },
    { name: '雷神索爾2', img: 'thor2', step: 1, id: 8 },
    { name: '美國隊長2', img: 'captain2', step: 1, id: 9 },
    { name: '星際異攻隊', img: 'galaxy', step: 1, id: 10 },
    { name: '蟻人', img: 'ant', step: 1, id: 11 },
    { name: '復仇者聯盟:奧創紀元', img: 'avengers2', step: 1, id: 12 },
    // step2
    { name: '美國隊長3', img: 'captain3', step: 2, id: 13 },
    { name: '奇異博士', img: 'strange', step: 2, id: 14 },
    { name: '星際異攻隊2', img: 'galaxy2', step: 2, id: 15 },
    { name: '蜘蛛人:返校日', img: 'spider', step: 2, id: 16 },
    { name: '雷神索爾3:諸神黃昏', img: 'thor3', step: 2, id: 17 },
    { name: '黑豹', img: 'panther', step: 2, id: 18 },
    { name: '復仇者聯盟:無限之戰', img: 'avengers3', step: 2, id: 19 },
    { name: '蟻人與黃蜂女', img: 'ant2', step: 2, id: 20 },
    { name: '驚奇隊長', img: 'marvel', step: 2, id: 21 },
    { name: '復仇者聯盟:終局之戰', img: 'avengers4', step: 2, id: 22 },
    { name: '蜘蛛人:離家日', img: 'spider2', step: 2, id: 23 },
]

const moviesInfoData = [
    {
        id: 1,
        img:'iron',
        plot:
            `<div>
                <p>天才發明家兼<a title="企業家" href="https://zh.wikipedia.org/wiki/%E4%BC%81%E4%B8%9A%E5%AE%B6">企業家</a><a title="鋼鐵人" href="https://zh.wikipedia.org/wiki/%E9%8B%BC%E9%90%B5%E4%BA%BA">東尼&middot;史塔克</a>擁有已故父親<a title="霍華&middot;史塔克" href="https://zh.wikipedia.org/wiki/%E9%9C%8D%E8%8F%AF%C2%B7%E5%8F%B2%E5%A1%94%E5%85%8B">霍華</a>的<span class="ilh-all" data-orig-title="史塔克工業" data-lang-code="en" data-lang-name="英語" data-foreign-title="Stark Industries"><span class="ilh-page"><a class="new" href="https://zh.wikipedia.org/w/index.php?title=%E5%8F%B2%E5%A1%94%E5%85%8B%E5%B7%A5%E6%A5%AD&amp;action=edit&amp;redlink=1">史塔克工業</a></span></span>；表面是愛國者的他，私底下卻是極度自戀自負的花花公子，藉著販售軍火的收入來逍遙自在。他與摯友兼空軍上校<a title="戰爭機器 (漫畫)" href="https://zh.wikipedia.org/wiki/%E6%88%B0%E7%88%AD%E6%A9%9F%E5%99%A8_(%E6%BC%AB%E7%95%AB)">詹姆士&middot;羅德</a>在<a title="阿富汗" href="https://zh.wikipedia.org/wiki/%E9%98%BF%E5%AF%8C%E6%B1%97">阿富汗</a>完成最新科技導彈「耶利哥」（<span lang="en">Jericho</span>）的測試，前往機場回國途中遭到一群武裝民兵襲擊。護衛隊全體陣亡後，東尼被一顆出產於自己公司的<a title="火箭推進榴彈" href="https://zh.wikipedia.org/wiki/%E7%81%AB%E7%AE%AD%E6%8E%A8%E9%80%B2%E6%A6%B4%E5%BD%88">火箭推進榴彈</a>炸傷，導彈碎片直接插進他的胸腔。許久後，東尼在一個洞穴中清醒，發現自己的胸部中央安裝一個連接汽車蓄電池的<a title="電磁鐵" href="https://zh.wikipedia.org/wiki/%E9%9B%BB%E7%A3%81%E9%90%B5">電磁鐵</a>，幫他動手術的男子<a title="何銀森" href="https://zh.wikipedia.org/wiki/%E4%BD%95%E9%93%B6%E6%A3%AE">伊申</a>解釋他身體裡的彈片插在深處而無法移除，只能靠這枚電磁鐵來避免他的心臟受損害。</p>
                <p>綁架他們二人的武裝組織「十環幫」（<span lang="en">Ten Rings</span>），每人都手持來自史塔克工業的槍械。十環幫首領<span class="ilh-all" data-orig-title="拉扎 (漫威漫畫)" data-lang-code="en" data-lang-name="英語" data-foreign-title="Raza (Marvel Comics)"><span class="ilh-page"><a class="new" href="https://zh.wikipedia.org/w/index.php?title=%E6%8B%89%E6%89%8E_(%E6%BC%AB%E5%A8%81%E6%BC%AB%E7%95%AB)&amp;action=edit&amp;redlink=1">拉扎</a></span></span>脅迫東尼幫他們製造一系列耶利哥導彈來換取自由，東尼表面裝作同意，但也開始安排逃亡計畫。獲得自己想要的武器材料後，東尼取出導彈中的<a class="mw-redirect" title="金屬" href="https://zh.wikipedia.org/wiki/%E9%87%91%E5%B1%AC">金屬</a><a class="mw-redirect" title="鈀" href="https://zh.wikipedia.org/wiki/%E9%88%80">鈀</a>，用一堆破銅爛鐵拼湊成一個小型方舟核<a class="mw-redirect" title="反應爐" href="https://zh.wikipedia.org/wiki/%E5%8F%8D%E6%87%89%E7%88%90">反應爐</a>；替代他身上的電磁鐵。反應爐每秒會產生30億<a title="焦耳" href="https://zh.wikipedia.org/wiki/%E7%84%A6%E8%80%B3">焦耳</a>電量；東尼決定將其用在逃生工具上面：一架透過反應爐發電的<a title="鋼鐵人動力服" href="https://zh.wikipedia.org/wiki/%E9%8B%BC%E9%90%B5%E4%BA%BA%E5%8B%95%E5%8A%9B%E6%9C%8D">鋼鐵動力服</a>。幾個月下來，東尼與伊申全心投入製作動力服，逐漸不耐煩的拉紮下令隔天就是最後期限。東尼抓緊時間完善動力服，設置好啟動程序後等待幾分鐘的運行，伊申發現時間來不及後，拿一把槍衝出去拖延時間後身中數槍。東尼等動力服正式啟動後出動，殺出一條血路至洞穴外找到奄奄一息的伊申，家破人亡的他決定留下來赴死，並希望東尼不要浪費生命。</p>
                <p>東尼衝出洞穴用<a class="mw-redirect" title="噴火器" href="https://zh.wikipedia.org/wiki/%E5%99%B4%E7%81%AB%E5%99%A8">噴火器</a>燒毀整座基地後利用噴射裝置飛離，最後因動力服電量耗盡墜毀在沙漠中，最終被巡邏美軍救起。東尼回國後直接召開新聞發布會，宣布他會徹底將公司改頭換面，他的秘書<a title="小辣椒&middot;波茲" href="https://zh.wikipedia.org/wiki/%E5%B0%8F%E8%BE%A3%E6%A4%92%C2%B7%E6%B3%A2%E8%8C%B2">小辣椒&middot;波茲</a>、羅德與史塔克工業副總裁<a title="鐵霸王" href="https://zh.wikipedia.org/wiki/%E9%90%B5%E9%9C%B8%E7%8E%8B">奧比戴亞&middot;史坦</a>看到他煥然一新後十分震驚；而一名來自政府部門<a title="神盾局" href="https://zh.wikipedia.org/wiki/%E7%A5%9E%E7%9B%BE%E5%B1%80">神盾局</a>的探員<a title="菲爾&middot;考森" href="https://zh.wikipedia.org/wiki/%E8%8F%B2%E7%88%BE%C2%B7%E8%80%83%E6%A3%AE">菲爾&middot;考森</a>找上小辣椒打算知道東尼失蹤時的細節。東尼絲毫沒有被外界的質疑影響，藉由小辣椒的幫助更換一個全新的反應爐心臟，也開始著手建造新型的戰甲。東尼在自己宅邸的地下工作室工作幾天幾夜，做出一套整合型的實驗二代戰甲。與此同時，拉扎在沙漠中找回東尼的動力服碎片，用洞穴裡留下的設計圖將其再度拼湊起來，認為該科技若是大量生產足以稱霸世界。</p>
                <p>東尼出席<a class="mw-redirect" title="迪士尼音樂廳" href="https://zh.wikipedia.org/wiki/%E8%BF%AA%E5%A3%AB%E5%B0%BC%E9%9F%B3%E6%A8%82%E5%BB%B3">迪士尼音樂廳</a>的宴會，曾與東尼有過<a title="一夜情" href="https://zh.wikipedia.org/wiki/%E4%B8%80%E5%A4%9C%E6%83%85">一夜情</a>的女記者<span class="ilh-all" data-orig-title="克莉絲汀&middot;埃佛哈特" data-lang-code="en" data-lang-name="英語" data-foreign-title="Christine Everhart"><span class="ilh-page"><a class="new" href="https://zh.wikipedia.org/w/index.php?title=%E5%85%8B%E8%8E%89%E7%B5%B2%E6%B1%80%C2%B7%E5%9F%83%E4%BD%9B%E5%93%88%E7%89%B9&amp;action=edit&amp;redlink=1">克莉絲汀&middot;埃佛哈特</a></span></span>給東尼觀看一系列伊沈的老家古米拉小鎮受十環幫襲擊的照片。東尼發現是奧比戴爾將武器賣給敵人後，為了制止自己的武器繼續肆虐那裡，於是身換上色過的第三代動力服飛到小鎮，摧毀十環幫的勢力並拯救所有村民。但東尼回去的途中被阿富汗美軍基地探測到，美軍為以防萬一而派遣兩架<a title="F-22猛禽戰鬥機" href="https://zh.wikipedia.org/wiki/F-22%E7%8C%9B%E7%A6%BD%E6%88%B0%E9%AC%A5%E6%A9%9F">F-22戰機</a>進行攔截，東尼在意外毀掉一架戰機後得以逃脫。而懸賞東尼性命的幕後黑手奧比戴爾來到十環幫營地，奪走原始動力服與設計圖且血洗整座營地，召集一群精英工程師、根據設計圖以<a title="逆向工程" href="https://zh.wikipedia.org/wiki/%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B">逆向工程</a>為他量身打造出一架巨型動力服。</p>
                <p>小辣椒奉東尼的命令來到奧比戴爾的電腦竊取武器販賣資料時，剛好發現奧比戴爾正在私造巨型動力服，以及奧比戴爾買兇殺東尼的錄影證據。於是將所有證據交付給考森後。奧比戴爾為了取得動力服的供應能源而伏擊在家的東尼，搶走他身上的反應爐心臟。奄奄一息的東尼跑回地下室，將自己的原始反應爐心臟換回去。羅德趕到他家中後，按照東尼的指示回去基地，避免軍方戰鬥機前來干擾。與此同時，小辣椒隨著考森去逮捕奧比戴爾時，奧比戴爾駕駛著他研製的動力服「鐵霸王」（<span lang="en">Iron Monger</span>）衝出去。東尼到達後使出渾身解數與奧比戴爾對打，但因受制原始反應爐心臟出力不斷衰退而處於下風，兩人最後打到工業發電反應爐工廠的屋頂，東尼暗中讓小辣椒釋放大型反應爐裏的能量。反應爐的電量破表，而站在屋頂的奧比戴爾被釋出的高壓電重創後，隨著自己的動力服一同掉入反應爐中葬身火海。</p>
                <p>東尼獲救後得知媒體已經將身穿戰甲的他取名為「鋼鐵人」，並與小辣椒一同感謝考森的協助。接著他來到新聞發布會上本想利用軍事演習為理由掩蓋實情，但最後在演講時選擇放下手中的演講稿，向眾人公開他的鋼鐵人身份。在<span class="ilh-all" data-orig-title="片尾片段" data-lang-code="en" data-lang-name="英語" data-foreign-title="Post-credits scene"><span class="ilh-page"><a class="new" href="https://zh.wikipedia.org/w/index.php?title=%E7%89%87%E5%B0%BE%E7%89%87%E6%AE%B5&amp;action=edit&amp;redlink=1">片尾片段</a></span></span>中，神盾局局長<a title="尼克&middot;福瑞" href="https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%85%8B%C2%B7%E7%A6%8F%E7%91%9E">尼克&middot;福瑞</a>來到東尼家中，告訴東尼他並不是世界上唯一的「<a class="mw-redirect" title="超級英雄" href="https://zh.wikipedia.org/wiki/%E8%B6%85%E7%B4%9A%E8%8B%B1%E9%9B%84">超級英雄</a>」，並打算與他討論一個《<a class="mw-redirect" title="" href="https://zh.wikipedia.org/wiki/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F_(%E9%9B%BB%E5%BD%B1)">復仇者聯盟方案</a>》。</p>
            </div>`,
        video: ['https://www.youtube.com/embed/DG1lS5CDIqM']
    }
]

export { moviesData, moviesInfoData }