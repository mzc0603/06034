(function() {
    'use strict';

    const surnameMap = {
        '李': ['梨', '璃', '鲤', '礼', '黎', '丽', '栗', '厉', '利', '荔'],
        '王': ['汪', '忘', '枉', '往', '望', '旺', '晚', '万', '威尔'],
        '张': ['樟', '獐', '彰', '涨', '掌', '障', '长', '丈', '章'],
        '刘': ['流', '留', '硫', '榴', '瘤', '柳', '六', '陆', '浏'],
        '陈': ['沉', '晨', '臣', '尘', '辰', '衬', '趁', '称', '郴'],
        '杨': ['羊', '洋', '阳', '扬', '央', '殃', '佯', '炀', '杨'],
        '赵': ['照', '召', '兆', '诏', '赵', '嘲', '肇', '昭', '赵'],
        '黄': ['慌', '凰', '荒', '黄', '谎', '磺', '簧', '恍', '煌'],
        '周': ['粥', '州', '舟', '周', '肘', '咒', '昼', '洲', '周'],
        '吴': ['无', '芜', '吴', '吾', '唔', '梧', '蜈', '五', '吴'],
        '徐': ['徐', '须', '虚', '需', '戌', '嘘', '徐', '栩', '许'],
        '孙': ['孙', '笋', '损', '孙', '逊', '荪', '飧', '孙子'],
        '马': ['马', '吗', '码', '妈', '骂', '嘛', '麻', '蟆', '马'],
        '朱': ['朱', '猪', '珠', '株', '蛛', '诛', '竹', '烛', '煮'],
        '胡': ['胡', '糊', '湖', '壶', '乎', '弧', '狐', '沪', '护'],
        '郭': ['锅', '郭', '裹', '过', '埚', '呙', '郭', '聒', '虢'],
        '林': ['林', '临', '淋', '琳', '霖', '邻', '鳞', '凛', '吝'],
        '何': ['何', '河', '荷', '合', '核', '盒', '禾', '鹤', '和'],
        '高': ['高', '稿', '告', '搞', '镐', '糕', '皋', '藁', '诰'],
        '罗': ['罗', '萝', '逻', '锣', '箩', '裸', '洛', '络', '骆'],
        '郑': ['郑', '正', '政', '证', '挣', '睁', '蒸', '征', '整'],
        '梁': ['梁', '良', '凉', '量', '粮', '两', '亮', '辆', '谅'],
        '谢': ['谢', '泻', '泄', '卸', '屑', '械', '榭', '解', '榭'],
        '宋': ['宋', '送', '颂', '讼', '诵', '悚', '送', '松', '凇'],
        '唐': ['唐', '糖', '堂', '棠', '塘', '搪', '膛', '汤', '淌'],
        '韩': ['韩', '寒', '喊', '含', '函', '罕', '涵', '韩', '翰'],
        '曹': ['曹', '草', '操', '糙', '曹', '槽', '嘈', '艹', '螬'],
        '许': ['许', '续', '需', '虚', '许', '栩', '旭', '序', '绪'],
        '邓': ['邓', '等', '凳', '邓', '凳', '澄', '嶝', '蹬', '镫'],
        '冯': ['冯', '逢', '缝', '凤', '奉', '冯', '讽', '佛', '否'],
        '曾': ['曾', '增', '赠', '憎', '曾', '睁', '筝', '峥', '征'],
        '彭': ['彭', '蓬', '棚', '朋', '捧', '彭', '砰', '烹', '嘭'],
        '潘': ['潘', '攀', '盘', '番', '潘', '袢', '蟠', '泮', '叛'],
        '于': ['于', '鱼', '雨', '玉', '域', '愉', '余', '娱', '愚'],
        '董': ['董', '懂', '动', '冻', '栋', '洞', '侗', '咚', '董'],
        '余': ['余', '鱼', '娱', '于', '愚', '虞', '与', '予', '宇'],
        '苏': ['苏', '酥', '俗', '诉', '素', '速', '苏', '塑', '溯'],
        '魏': ['魏', '为', '未', '位', '卫', '味', '谓', '魏', '慰'],
        '吕': ['吕', '旅', '律', '绿', '虑', '氯', '缕', '吕', '铝'],
        '丁': ['丁', '盯', '钉', '顶', '定', '订', '叮', '疗', '耵'],
        '沈': ['沈', '深', '审', '慎', '肾', '甚', '渗', '沈', '婶'],
        '叶': ['叶', '夜', '业', '页', '野', '冶', '液', '叶', '椰'],
        '蒋': ['蒋', '奖', '讲', '酱', '匠', '浆', '僵', '疆', '缰'],
        '杜': ['杜', '度', '渡', '镀', '肚', '堵', '赌', '都', '睹'],
        '林': ['林', '临', '淋', '琳', '霖', '邻', '鳞', '凛', '吝'],
        '夏': ['夏', '下', '吓', '侠', '峡', '狭', '霞', '暇', '辖'],
        '钟': ['钟', '中', '终', '种', '重', '众', '衷', '钟', '肿'],
        '田': ['田', '天', '填', '甜', '田', '佺', '甸', '恬', '舔'],
        '任': ['任', '人', '认', '仁', '忍', '刃', '任', '壬', '纴'],
        '姜': ['姜', '将', '江', '疆', '浆', '僵', '讲', '奖', '酱'],
        '范': ['范', '饭', '犯', '烦', '繁', '凡', '返', '泛', '贩'],
        '方': ['方', '芳', '房', '防', '妨', '访', '仿', '放', '枋'],
        '姚': ['姚', '摇', '窑', '遥', '咬', '药', '耀', '要', '夭'],
        '毛': ['毛', '猫', '矛', '茅', '卯', '茂', '冒', '帽', '贸'],
        '段': ['段', '断', '缎', '锻', '椴', '煅', '簖', '堆', ''],
        '雷': ['雷', '累', '泪', '类', '垒', '擂', '蕾', '雷', '镭'],
        '白': ['白', '百', '摆', '拜', '柏', '败', '摆', '佰', '稗'],
        '康': ['康', '抗', '扛', '亢', '炕', '康', '慷', '糠', '闶'],
        '孟': ['孟', '梦', '猛', '盟', '蒙', '懵', '孟', '勐', '蠓'],
        '秦': ['秦', '勤', '琴', '禽', '擒', '寝', '秦', '芹', '沁'],
        '崔': ['崔', '催', '脆', '翠', '崔', '璀', '摧', '衰', '榱'],
        '顾': ['顾', '故', '固', '雇', '顾', '锢', '牯', '鲴', '固'],
        '侯': ['侯', '后', '候', '厚', '侯', '吼', '喉', '候', '猴'],
        '邵': ['邵', '少', '绍', '哨', '捎', '邵', '苕', '劭', '昭'],
        '覃': ['覃', '秦', '琴', '勤', '擒', '覃', '禽', '噙', '螓'],
        '武': ['武', '舞', '务', '物', '五', '无', '误', '武', '戊'],
        '贺': ['贺', '喝', '鹤', '和', '何', '合', '河', '贺', '荷'],
        '赖': ['赖', '来', '莱', '赖', '籁', '徕', '涞', '睐', '赖'],
        '龚': ['龚', '公', '供', '功', '攻', '宫', '龚', '躬', '拱'],
        '文': ['文', '问', '闻', '稳', '温', '文', '纹', '蚊', '紊'],
        '严': ['严', '研', '眼', '演', '颜', '盐', '言', '沿', '炎'],
        '万': ['万', '晚', '弯', '玩', '完', '碗', '腕', '顽', '宛']
    };

    const suffixLib = {
        'gufeng': {
            name: '古风',
            prefixes: ['墨', '寒', '烟', '霜', '月', '云', '雪', '雨', '风', '竹', '兰', '梅', '松', '鹤', '仙', '尊', '上', '凌', '清', '幽', '寂', '空', '禅', '逸', '凡', '尘', '缘', '魄', '魂', '梦', '幻', '舞', '歌', '诗', '酒', '茶'],
            suffixes: ['仙', '尊', '墨', '寒', '烟', '霜', '月', '云', '公子', '仙子', '居士', '散人', '客', '翁', '叟', '生', '子', '君', '卿', '裳', '衣', '袖', '裙', '扇', '剑', '刀', '琴', '棋', '书', '画', '情', '意', '心', '魂', '魄']
        },
        'keai': {
            name: '可爱',
            prefixes: ['糖', '豆', '宝', '团', '蜜', '崽', '兔', '喵', '汪', '熊', '鹿', '狐', '羊', '猪', '鼠', '鸭', '鸡', '鸽', '雀', '虫', '花', '果', '草', '糖', '甜', '软', '萌', '乖', '软', '胖', '圆', '小', '迷你', '萌', '娇', '俏', '灵', '巧'],
            suffixes: ['糖', '豆', '宝', '团', '蜜', '崽', '兔', '喵', '汪', '熊', '果', '蜜', '糖', '心', '儿', '子', '妹', '弟', '侠', '控', '奴', '控', '粉', '饭', '团', '包', '包', '饼', '汤', '圆', '包', '丁', '冻', '糕']
        },
        'gaoling': {
            name: '高冷',
            prefixes: ['孤', '独', '凉', '默', '寂', '冷', '冰', '夜', '幽', '深', '暗', '玄', '冥', '渊', '寂', '空', '无', '虚', '清', '寒', '凛', '霜', '雪', '月', '星', '辰', '宇', '宙', '洪', '荒', '寂', '静', '淡', '漠', '离', '绝'],
            suffixes: ['孤', '独', '凉', '默', '寂', '冷', '冰', '夜', '影', '月', '星', '辰', '光', '暗', '王', '皇', '帝', '君', '主', '尊', '上', '神', '魔', '仙', '灵', '魂', '魄', '魄', '渊', '冥', '漠', '途', '路', '客', '人']
        },
        'qinglv': {
            name: '情侣',
            prefixes: ['相', '守', '念', '思', '恋', '爱', '情', '心', '意', '牵', '挂', '盼', '等', '待', '永', '长', '久', '一', '双', '对', '比', '翼', '连', '理', '同', '共', '携', '挽', '伴', '侣', '夫', '妻', '卿', '吾', '汝'],
            suffixes: ['伴', '侣', '双', '对', '执', '守', '念', '思', '恋', '爱', '情', '心', '意', '牵', '挂', '老', '少', '长', '久', '永', '恒', '缘', '分', '定', '三', '生', '世', '今', '昔', '朝', '暮', '暮', '朝', '归', '去']
        }
    };

    const randomSurnames = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗', '梁', '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏', '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎', '余', '潘', '杜', '戴', '夏', '钟', '汪', '田', '任', '姜', '范', '方', '石', '姚', '谭', '廖', '邹', '熊', '金', '陆', '郝', '孔', '白', '崔', '康', '毛', '邱', '秦', '江', '史', '顾', '侯', '邵', '孟', '龙', '万', '段', '雷', '钱', '汤', '尹', '黎', '易', '常', '武', '乔', '贺', '赖', '龚', '文'];
    const randomGivenNames = ['伟', '芳', '娜', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀英', '霞', '平', '刚', '桂英', '芬', '玲', '鹏', '红', '华', '飞', '莉', '辉', '兰', '梅', '英', '锋', '建华', '建国', '俊杰', '思远', '浩然', '子涵', '梓萱', '一诺', '欣怡', '子轩', '语桐', '浩宇', '欣悦', '思琪', '家乐', '雨轩', '诗涵', '浩轩', '雅静', '子涵', '雨萱', '志远', '子豪', '子涵', '雨桐', '欣怡', '思远', '俊杰'];

    const charCountEl = document.getElementById('charCount');
    const nameInput = document.getElementById('nameInput');
    const randomBtn = document.getElementById('randomBtn');
    const generateBtn = document.getElementById('generateBtn');
    const resultsGrid = document.getElementById('resultsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const themeToggle = document.getElementById('themeToggle');
    const toast = document.getElementById('toast');
    const toastText = toast.querySelector('.toast-text');

    let currentCategory = 'gufeng';

    function getCharacterCount(str) {
        return str.replace(/[^\u4e00-\u9fa5]/g, '').length;
    }

    function isValidName(name) {
        const cleanName = name.replace(/\s/g, '');
        return /^[\u4e00-\u9fa5]{2,6}$/.test(cleanName);
    }

    function getRandomName() {
        const surname = randomSurnames[Math.floor(Math.random() * randomSurnames.length)];
        const givenName = randomGivenNames[Math.floor(Math.random() * randomGivenNames.length)];
        return surname + givenName;
    }

    function getHomophones(char) {
        const homophones = surnameMap[char];
        if (homophones && homophones.length > 0) {
            return homophones;
        }
        const commonHomophones = ['星', '心', '欣', '新', '鑫', '馨', '辛', '芯', '锌'];
        return commonHomophones;
    }

    function generateNames(name, category) {
        const cleanName = name.replace(/\s/g, '');
        const categoryData = suffixLib[category];

        if (!isValidName(cleanName)) {
            return [];
        }

        const surname = cleanName[0];
        const givenName = cleanName.slice(1);
        const surnameHomophones = getHomophones(surname);
        const categoryPrefixes = categoryData.prefixes;
        const categorySuffixes = categoryData.suffixes;

        const results = new Set();

        for (let i = 0; i < 50 && results.size < 10; i++) {
            let generatedName = '';

            const pattern = Math.floor(Math.random() * 5);

            switch (pattern) {
                case 0:
                    if (surnameHomophones.length > 0) {
                        const prefix = surnameHomophones[Math.floor(Math.random() * surnameHomophones.length)];
                        const suffix = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
                        generatedName = prefix + suffix;
                    }
                    break;
                case 1:
                    if (givenName.length > 0) {
                        const char = givenName[Math.floor(Math.random() * givenName.length)];
                        const homophones = getHomophones(char);
                        if (homophones.length > 0) {
                            const prefix = homophones[Math.floor(Math.random() * homophones.length)];
                            const suffix = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
                            generatedName = prefix + suffix;
                        }
                    }
                    break;
                case 2:
                    const prefix1 = categoryPrefixes[Math.floor(Math.random() * categoryPrefixes.length)];
                    const suffix1 = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
                    generatedName = prefix1 + suffix1;
                    break;
                case 3:
                    if (surnameHomophones.length > 0) {
                        const prefix2 = surnameHomophones[Math.floor(Math.random() * surnameHomophones.length)];
                        const suffix2 = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
                        generatedName = prefix2 + suffix2;
                    }
                    break;
                case 4:
                    if (surnameHomophones.length > 0 && givenName.length > 0) {
                        const prefix3 = surnameHomophones[Math.floor(Math.random() * surnameHomophones.length)];
                        const char2 = givenName[Math.floor(Math.random() * givenName.length)];
                        const homophones2 = getHomophones(char2);
                        if (homophones2.length > 0) {
                            const middle = homophones2[Math.floor(Math.random() * homophones2.length)];
                            const suffix3 = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
                            generatedName = prefix3 + middle + suffix3;
                        }
                    }
                    break;
            }

            if (generatedName && generatedName.length >= 2 && generatedName.length <= 8) {
                results.add(generatedName);
            }
        }

        const finalResults = Array.from(results);
        while (finalResults.length < 10) {
            const prefix = categoryPrefixes[Math.floor(Math.random() * categoryPrefixes.length)];
            const suffix = categorySuffixes[Math.floor(Math.random() * categorySuffixes.length)];
            const newName = prefix + suffix;
            if (newName.length <= 8) {
                finalResults.push(newName);
            }
        }

        return finalResults.slice(0, 10);
    }

    function renderResults(names) {
        resultsGrid.innerHTML = '';

        if (names.length === 0) {
            resultsGrid.innerHTML = '<div class="result-placeholder"><p>请输入有效的中文姓名（2-6个汉字）</p></div>';
            return;
        }

        names.forEach((name, index) => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <div class="result-text">${name}</div>
                <div class="copy-hint">点击复制</div>
            `;
            card.addEventListener('click', () => copyToClipboard(name, card));
            resultsGrid.appendChild(card);
        });
    }

    function copyToClipboard(text, card) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showCopiedState(card, text);
            }).catch(() => {
                fallbackCopy(text, card);
            });
        } else {
            fallbackCopy(text, card);
        }
    }

    function fallbackCopy(text, card) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopiedState(card, text);
        } catch (err) {
            showToast('复制失败，请手动复制');
        }
        document.body.removeChild(textarea);
    }

    function showCopiedState(card, text) {
        card.classList.add('copied');
        const hint = card.querySelector('.copy-hint');
        hint.textContent = '已复制';
        showToast('已复制到剪贴板');

        setTimeout(() => {
            card.classList.remove('copied');
            hint.textContent = '点击复制';
        }, 1500);
    }

    function showToast(message) {
        toastText.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    function updateCharCount() {
        const count = getCharacterCount(nameInput.value);
        charCountEl.textContent = `${count}/6`;
    }

    function handleGenerate() {
        const name = nameInput.value.trim();

        if (!name) {
            showToast('请输入姓名');
            nameInput.focus();
            return;
        }

        if (!isValidName(name)) {
            showToast('请输入2-6个汉字的中文名字');
            return;
        }

        const names = generateNames(name, currentCategory);
        renderResults(names);
    }

    function handleRandomName() {
        const randomName = getRandomName();
        nameInput.value = randomName;
        updateCharCount();
        showToast('已随机生成姓名');
    }

    function handleCategoryChange(e) {
        const tab = e.target.closest('.category-tab');
        if (!tab) return;

        categoryTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        currentCategory = tab.dataset.category;
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }

    function init() {
        initTheme();

        nameInput.addEventListener('input', updateCharCount);

        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleGenerate();
            }
        });

        generateBtn.addEventListener('click', handleGenerate);
        randomBtn.addEventListener('click', handleRandomName);

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', handleCategoryChange);
        });

        themeToggle.addEventListener('click', toggleTheme);

        updateCharCount();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
