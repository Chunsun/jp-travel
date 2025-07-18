// ===== TRAVEL DATA CONFIGURATION =====
const TRAVEL_DATA = {
    locations: [
        // 住宿地點
        { name: 'ホップ イン 京都四条大宮', lat: 35.0072, lng: 135.7472, region: 'kyoto', type: 'hotel', 
          color: '#e74c3c', date: '7/15-17', day: 1, duration: '2晚', priority: 'important',
          features: ['附早餐', '大浴池', '咖啡茶'], description: '京都住宿基地，四条大宮站步行1分', openHours: '24小時' },
        { name: 'ABホテル京都四条堀川', lat: 35.0058, lng: 135.7486, region: 'kyoto', type: 'hotel', 
          color: '#f39c12', date: '7/18-20', day: 4, duration: '3晚', priority: 'important',
          features: ['附早餐', '大浴場'], description: '京都住宿基地，四条堀川站步行2分', openHours: '24小時' },
        { name: '溫泉旅館 小都里', lat: 34.7972, lng: 135.2486, region: 'osaka', type: 'onsen', 
          color: '#16a085', date: '7/21', day: 7, duration: '1晚', priority: 'must-see',
          features: ['一泊二食', '金銀湯', '共用衛浴'], description: '有馬溫泉傳統旅館體驗', openHours: '24小時' },
        { name: 'R HOTELS', lat: 34.6547, lng: 135.4883, region: 'osaka', type: 'hotel', 
          color: '#d35400', date: '7/22-24', day: 8, duration: '3晚', priority: 'important',
          features: ['木津市場步行4分'], description: '大阪住宿基地，近木津市場', openHours: '24小時' },
        { name: 'APA アパホテル 浅草 田原町駅前', lat: 35.7118, lng: 139.7806, region: 'tokyo', type: 'hotel', 
          color: '#2980b9', date: '7/25', day: 11, duration: '1晚', priority: 'important',
          features: ['有浴場', '咖啡茶'], description: '東京淺草住宿基地', openHours: '24小時' },
        { name: 'Karuizawa Pension Sato no Nukumori', lat: 36.3570, lng: 138.6296, region: 'tokyo', type: 'hotel', 
          color: '#f1c40f', date: '7/26', day: 12, duration: '1晚', priority: 'important',
          features: ['有早餐', '山間環境'], description: '輕井澤度假村住宿', openHours: '24小時' },
        { name: '絹の渓谷 碧流', lat: 36.7553, lng: 139.5964, region: 'tokyo', type: 'onsen', 
          color: '#e67e22', date: '7/27', day: 13, duration: '1晚', priority: 'important',
          features: ['一泊二食', '塔塔米海景房'], description: '日光溫泉旅館住宿', openHours: '24小時' },
        { name: 'APA アパホテル＆リゾート 西新宿五丁目駅タワー', lat: 35.6917, lng: 139.6983, region: 'tokyo', type: 'hotel', 
          color: '#e67e22', date: '7/28', day: 14, duration: '1晚', priority: 'important',
          features: ['有浴場', '咖啡茶'], description: '東京新宿住宿基地', openHours: '24小時' },
        { name: 'フレッサイン鎌倉大船駅東口', lat: 35.3533, lng: 139.5342, region: 'tokyo', type: 'hotel', 
          color: '#9b59b6', date: '7/29', day: 15, duration: '1晚', priority: 'important',
          features: ['咖啡茶', '浴鹽'], description: '鎌倉住宿基地，大船駅東口', openHours: '24小時' },

        // 京都區域 (7/15-21)
        { name: '地主神社', lat: 34.9950, lng: 135.7851, region: 'kyoto', type: 'shrine', 
          color: '#e74c3c', date: '7/15', day: 1, duration: '25分鐘', priority: 'important',
          features: ['戀愛祈願', '戀愛占卜石'], description: '戀愛祈願+戀愛占卜石體驗+寧靜參拜', openHours: '10:00-10:25' },
        { name: '音羽瀑布', lat: 34.9947, lng: 135.7847, region: 'kyoto', type: 'nature', 
          color: '#e74c3c', date: '7/15', day: 1, duration: '20分鐘', priority: 'important',
          features: ['三道瀑布祈願'], description: '三道瀑布祈願+充分品嚐神聖水源', openHours: '10:25-10:45' },
        { name: '建仁寺', lat: 35.0028, lng: 135.7745, region: 'kyoto', type: 'temple', 
          color: '#e74c3c', date: '7/15', day: 1, duration: '30分鐘', priority: 'important',
          features: ['風神雷神圖', '國寶'], description: '京都最古老的禪寺，收藏國寶風神雷神圖', openHours: '12:00-12:30' },
        { name: '京都國立博物館', lat: 34.9878, lng: 135.7725, region: 'kyoto', type: 'heritage', 
          color: '#e74c3c', date: '7/15', day: 1, duration: '2小時', priority: 'important',
          features: ['國寶文物'], description: '收藏豐富的日本國寶和重要文化財', openHours: '13:30-15:30' },
        { name: '三十三間堂', lat: 34.9880, lng: 135.7717, region: 'kyoto', type: 'temple', 
          color: '#e74c3c', date: '7/15', day: 1, duration: '1小時', priority: 'important',
          features: ['1001尊千手觀音'], description: '1001尊千手觀音像，重要文化體驗', openHours: '15:30-16:30' },
        
        { name: '京都文化博物館', lat: 35.0067, lng: 135.7669, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '1小時', priority: 'important',
          features: ['祇園祭文化背景', '總合展示'], description: '祇園祭文化背景+總合展示', openHours: '10:00-11:00' },
        { name: '六角堂（紫雲山頂法寺）', lat: 35.0072, lng: 135.7589, region: 'kyoto', type: 'temple', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['聖徳太子創建', '京都中心點臍石', '華道發祥地'], description: '聖徳太子創建+京都中心點臍石+華道發祥地', openHours: '11:00-11:30' },
        { name: '千總（屏風祭）', lat: 35.0081, lng: 135.7614, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['400年和服老舖', '重要文化財屏風展示'], description: '400年和服老舖+重要文化財屏風展示', openHours: '11:30-12:00' },
        { name: '誉田屋源兵衛（屏風祭）', lat: 35.0089, lng: 135.7625, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['高級和服老舖', '工藝製作過程觀賞'], description: '高級和服老舖+工藝製作過程觀賞', openHours: '12:00-12:30' },
        { name: '藤井絞（屏風祭）', lat: 35.0094, lng: 135.7631, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['京鹿子絞工藝展示', '手作體驗'], description: '京鹿子絞工藝展示+手作體驗', openHours: '12:30-13:00' },
        { name: '杉本家住宅（屏風祭精華）', lat: 35.0098, lng: 135.7639, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '1小時', priority: 'must-see',
          features: ['築151年大規模京町家', '伯牙山會所飾り'], description: '築151年大規模京町家+伯牙山會所飾り', openHours: '14:00-15:00' },
        { name: '八竹庵（屏風祭精華）', lat: 35.0102, lng: 135.7645, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['和洋折衷建築', '鉾見台'], description: '和洋折衷建築+鉾見台+飲料', openHours: '15:00-15:30' },
        { name: '長江家住宅（屏風祭精華）', lat: 35.0106, lng: 135.7651, region: 'kyoto', type: 'heritage', 
          color: '#3498db', date: '7/16', day: 2, duration: '30分鐘', priority: 'important',
          features: ['昭和100年主題展示'], description: '「昭和100年」主題展示', openHours: '15:30-16:00' },
        { name: '出町桝形商店街', lat: 35.0306, lng: 135.7639, region: 'kyoto', type: 'nature', 
          color: '#3498db', date: '7/16', day: 2, duration: '3小時', priority: 'important',
          features: ['在地人市場', '鯖街道終點'], description: '在地人生鮮市場，觀光客少、價格合理', openHours: '9:00-12:00' },
        { name: '祇園祭宵山', lat: 35.0036, lng: 135.7681, region: 'kyoto', type: 'festival', 
          color: '#3498db', date: '7/16', day: 2, duration: '5.5小時', priority: 'must-see',
          features: ['日本三大祭', '屏風祭', '山鉾搭乘'], description: '京都夏季最盛大的傳統祭典宵山', openHours: '13:00-22:30' },
        
        { name: '祇園祭山鉾巡行', lat: 35.0036, lng: 135.7681, region: 'kyoto', type: 'festival', 
          color: '#2ecc71', date: '7/17', day: 3, duration: '3.5小時', priority: 'must-see',
          features: ['日本三大祭', '山鉾巡行'], description: '祇園祭最高潮的山鉾巡行儀式', openHours: '8:30-12:00' },
        { name: '京都御所', lat: 35.0251, lng: 135.7625, region: 'kyoto', type: 'heritage', 
          color: '#2ecc71', date: '7/17', day: 3, duration: '50分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO'], description: '歷代天皇的宮殿，需預約導覽', openHours: '14:00-14:50' },
        { name: '仙洞御所', lat: 35.0236, lng: 135.7606, region: 'kyoto', type: 'heritage', 
          color: '#2ecc71', date: '7/17', day: 3, duration: '90分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO'], description: '退位天皇的宮殿，精美庭園設計', openHours: '15:30-17:00' },
        
        { name: '貴船神社', lat: 35.1128, lng: 135.7631, region: 'kyoto', type: 'shrine', 
          color: '#f39c12', date: '7/18', day: 4, duration: '90分鐘', priority: 'must-see',
          features: ['水神總本宮', '三社詣', '水占卜'], description: '水神總本宮，完整三社詣體驗', openHours: '9:30-11:00' },
        { name: '料理旅館 ひろ文', lat: 35.1142, lng: 135.7625, region: 'kyoto', type: 'nature', 
          color: '#f39c12', date: '7/18', day: 4, duration: '2小時', priority: 'important',
          features: ['川床料理'], description: '貴船川床料理午餐，夏季風物詩', openHours: '11:00-13:00' },
        { name: '修學院離宮', lat: 35.0583, lng: 135.7939, region: 'kyoto', type: 'heritage', 
          color: '#f39c12', date: '7/18', day: 4, duration: '80分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO'], description: '江戶時代皇室離宮，需預約參觀', openHours: '15:00-16:20' },
        { name: '下鴨神社', lat: 35.0378, lng: 135.7728, region: 'kyoto', type: 'heritage', 
          color: '#f39c12', date: '7/18', day: 4, duration: '2.5小時', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', 'みたらし祭', '足つけ神事'], description: 'みたらし祭特別體驗，足つけ神事', openHours: '16:30-19:00' },
        { name: '河合神社', lat: 35.0389, lng: 135.7719, region: 'kyoto', type: 'shrine', 
          color: '#f39c12', date: '7/18', day: 4, duration: '20分鐘', priority: 'optional',
          features: ['美麗祈願', '鏡繪馬'], description: '以美容祈願聞名的神社', openHours: '16:30-16:50' },
        
        { name: '平等院', lat: 34.8889, lng: 135.8075, region: 'kyoto', type: 'heritage', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '75分鐘', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', '鳳凰堂'], description: '平安時代建築傑作，十円硬幣圖案', openHours: '11:00-12:15' },
        { name: '伊藤久右衛門本店', lat: 34.8875, lng: 135.8055, region: 'kyoto', type: 'nature', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '1小時', priority: 'important',
          features: ['天保3年老舖', '懷石料理', '石臼抹茶'], description: '天保3年老舖懷石料理+石臼現磨抹茶', openHours: '12:15-13:15' },
        { name: '宇治橋', lat: 34.8892, lng: 135.8086, region: 'kyoto', type: 'heritage', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '15分鐘', priority: 'optional',
          features: ['日本三大古橋', '豐臣秀吉茶湯取水處'], description: '日本三大古橋，豐臣秀吉茶湯取水處', openHours: '13:15-13:30' },
        { name: '宇治神社', lat: 34.8899, lng: 135.8089, region: 'kyoto', type: 'shrine', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '15分鐘', priority: 'optional',
          features: ['見返兔祈願', '1710年歷史'], description: '見返兔祈願，1710年歷史土地神', openHours: '13:30-13:45' },
        { name: '宇治上神社', lat: 34.8906, lng: 135.8094, region: 'kyoto', type: 'heritage', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '30分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO', '日本最古神社'], description: '世界遺產國寶建築，平安後期最古老神社', openHours: '13:45-14:15' },
        { name: '宇治川畔', lat: 34.8883, lng: 135.8072, region: 'kyoto', type: 'nature', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '75分鐘', priority: 'important',
          features: ['避暑深度體驗', '塔之島橘島'], description: '塔之島橘島探索、川畔咖啡廳、自然景觀攝影', openHours: '14:15-15:30' },
        { name: '平等院表參道', lat: 34.8886, lng: 135.8063, region: 'kyoto', type: 'nature', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '1小時', priority: 'important',
          features: ['宇治茶葉', '抹茶點心', '茶具'], description: '宇治茶葉、抹茶點心、茶具選購（中村藤吉、福壽園、辻利）', openHours: '15:30-16:30' },
        { name: '星巴克平等院店', lat: 34.8884, lng: 135.8067, region: 'kyoto', type: 'nature', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '30分鐘', priority: 'optional',
          features: ['最後休息'], description: '咖啡時間，為伏見稻荷做準備', openHours: '16:30-17:00' },
        { name: '伏見稻荷大社', lat: 34.9671, lng: 135.7727, region: 'kyoto', type: 'shrine', 
          color: '#9b59b6', date: '7/19', day: 5, duration: '3小時', priority: 'must-see',
          features: ['千本鳥居', '宵宮祭', '萬燈神事'], description: '伏見稻荷宵宮祭完整體驗，一年一度萬燈神事', openHours: '18:00-21:00' },
        
        { name: '太秦映畫村', lat: 35.0139, lng: 135.7081, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '2小時40分鐘', priority: 'optional',
          features: ['江戶時代體驗'], description: '日本古裝電影拍攝場地主題樂園', openHours: '9:05-11:45' },
        { name: '嵯峨嵐山午餐', lat: 35.0147, lng: 135.6739, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '40分鐘', priority: 'important',
          features: ['嵯峨豆腐料理', '竹籠便當'], description: '嵯峨豆腐料理或竹籠便當', openHours: '12:20-13:00' },
        { name: '嵯峨野小火車', lat: 35.0167, lng: 135.6789, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '25分鐘', priority: 'must-see',
          features: ['保津峽風景'], description: '穿越保津峽的觀光小火車', openHours: '13:02-13:27' },
        { name: '京馬車', lat: 35.0167, lng: 135.6189, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '30分鐘', priority: 'must-see',
          features: ['復古馬車體驗'], description: '馬蹄聲中穿越田園風光，復古馬車文化體驗', openHours: '13:30-14:00' },
        { name: '保津川遊船', lat: 35.0167, lng: 135.6189, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '2小時', priority: 'must-see',
          features: ['激流體驗'], description: '專業船夫掌舵的激流遊船體驗', openHours: '14:00-16:00' },
        { name: '天龍寺', lat: 35.0156, lng: 135.6742, region: 'kyoto', type: 'heritage', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '45分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO', '雲龍圖'], description: '嵐山地區重要的禪寺，以庭園聞名', openHours: '16:15-17:00' },
        { name: '竹林之道', lat: 35.0172, lng: 135.6697, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '30分鐘', priority: 'must-see',
          features: ['嵯峨野竹林小径', '網美必拍'], description: '嵯峨野竹林小径，網美必拍，自然光線最佳時段', openHours: '17:00-17:30' },
        { name: '渡月橋', lat: 35.0103, lng: 135.6761, region: 'kyoto', type: 'nature', 
          color: '#1abc9c', date: '7/20', day: 6, duration: '30分鐘', priority: 'must-see',
          features: ['桂川河景', '嵐山山景', '夕陽攝影'], description: '桂川河景+嵐山山景+夕陽攝影黃金時間', openHours: '17:30-18:00' },
        
        { name: '神泉苑', lat: 35.0075, lng: 135.7444, region: 'kyoto', type: 'heritage', 
          color: '#16a085', date: '7/21', day: 7, duration: '30分鐘', priority: 'important',
          features: ['平安京史跡', '弘法大師祈雨傳說'], description: '平安京史跡，弘法大師祈雨傳說地', openHours: '9:30-10:00' },
        { name: '二條陣屋', lat: 35.0097, lng: 135.7472, region: 'kyoto', type: 'castle', 
          color: '#16a085', date: '7/21', day: 7, duration: '1小時15分鐘', priority: 'important',
          features: ['武家住宅', '24處機關', '日本人導覽'], description: '江戶時代武家住宅，隱藏24處防禦機關', openHours: '10:00-11:15' },
        { name: '二條城', lat: 35.0142, lng: 135.7481, region: 'kyoto', type: 'heritage', 
          color: '#16a085', date: '7/21', day: 7, duration: '1小時45分鐘', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', '德川幕府'], description: '德川幕府在京都的政治中心', openHours: '11:15-13:00' },

        // 有馬溫泉 (7/21-22)
        { name: '有馬溫泉', lat: 34.7972, lng: 135.2486, region: 'osaka', type: 'onsen', 
          color: '#16a085', date: '7/21-22', day: 7, duration: '一晚', priority: 'must-see',
          features: ['日本三古湯', '金湯銀湯', '17:00關門搶救購物'], description: '日本三大古湯之一，以金泉銀泉聞名', openHours: '15:30-18:30' },

        // 姬路+神戶 (7/22)
        { name: '姬路城', lat: 34.8394, lng: 134.6939, region: 'osaka', type: 'castle', 
          color: '#8e44ad', date: '7/22', day: 8, duration: '2小時', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', '國寶天守閣'], description: '日本現存12座天守之一，白鷺城美稱', openHours: '11:00-13:00' },
        { name: '書寫山圓教寺', lat: 34.8567, lng: 134.6328, region: 'osaka', type: 'temple', 
          color: '#8e44ad', date: '7/22', day: 8, duration: '2小時', priority: 'important',
          features: ['西國三十三所', '西の比叡山', '天台宗古刹'], description: '西國三十三所靈場，摩尼殿、大講堂等重要文化財', openHours: '14:30-16:30' },
        { name: '神戶港區', lat: 34.6901, lng: 135.1956, region: 'osaka', type: 'nature', 
          color: '#8e44ad', date: '7/22', day: 8, duration: '1.5小時', priority: 'important',
          features: ['神戶牛料理', '港景餐廳'], description: '神戶港區晚餐，神戶牛料理體驗', openHours: '17:45-19:15' },
        { name: '摩耶山星の駅', lat: 34.7284, lng: 135.2332, region: 'osaka', type: 'nature', 
          color: '#8e44ad', date: '7/22', day: 8, duration: '30分鐘', priority: 'must-see',
          features: ['新日本三大夜景', '掬星台'], description: '關西最佳視野，新日本三大夜景觀賞點', openHours: '19:50-20:20' },

        // 大阪區域 (7/23-25)
        { name: '大阪城', lat: 34.6873, lng: 135.5262, region: 'osaka', type: 'castle', 
          color: '#d35400', date: '7/23', day: 9, duration: '1.5小時', priority: 'important',
          features: ['豐臣秀吉'], description: '豐臣秀吉建造的名城', openHours: '9:00-10:30' },
        { name: '大阪歷史博物館', lat: 34.6842, lng: 135.5203, region: 'osaka', type: 'heritage', 
          color: '#d35400', date: '7/23', day: 9, duration: '1小時', priority: 'optional',
          features: ['難波宮遺跡'], description: '展示大阪從古至今的歷史文物', openHours: '10:30-11:30' },
        { name: '舊櫻宮公會堂', lat: 34.6958, lng: 135.5228, region: 'osaka', type: 'heritage', 
          color: '#d35400', date: '7/23', day: 9, duration: '1.5小時', priority: 'optional',
          features: ['大正建築'], description: '大正時期西式建築代表作', openHours: '11:45-13:15' },
        { name: '天神橋筋商店街', lat: 34.7000, lng: 135.5139, region: 'osaka', type: 'nature', 
          color: '#d35400', date: '7/23', day: 9, duration: '1.75小時', priority: 'important',
          features: ['日本最長商店街', 'ギャルみこし'], description: '全長2.6公里的日本最長商店街，ギャルみこし觀賞', openHours: '15:00-16:45' },
        
        { name: '堺市古墳群', lat: 34.5644, lng: 135.4881, region: 'osaka', type: 'heritage', 
          color: '#c0392b', date: '7/24', day: 10, duration: '2小時', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', '仁徳天皇陵'], description: '古代天皇陵墓群，世界最大古墳', openHours: '9:30-11:30' },
        { name: '住吉大社', lat: 34.6169, lng: 135.4928, region: 'osaka', type: 'shrine', 
          color: '#c0392b', date: '7/24', day: 10, duration: '1小時', priority: 'important',
          features: ['海神總本社'], description: '全國住吉神社的總本社', openHours: '13:00-14:00' },
        { name: '四天王寺', lat: 34.6544, lng: 135.5164, region: 'osaka', type: 'temple', 
          color: '#c0392b', date: '7/24', day: 10, duration: '1小時', priority: 'important',
          features: ['聖德太子建立'], description: '聖德太子建立的日本最古老官寺', openHours: '14:45-15:45' },
        { name: '慶沢園', lat: 34.6517, lng: 135.5181, region: 'osaka', type: 'nature', 
          color: '#c0392b', date: '7/24', day: 10, duration: '45分鐘', priority: 'important',
          features: ['住友家日本庭園', '國家指定名勝'], description: '住友家日本庭園，國家指定名勝，傍晚光線最佳時段', openHours: '17:30-18:15' },
        { name: '鯛よし百番', lat: 34.6678, lng: 135.5008, region: 'osaka', type: 'nature', 
          color: '#c0392b', date: '7/24', day: 10, duration: '2.5小時', priority: 'must-see',
          features: ['高級料亭', '大阪老字號'], description: '大阪老字號高級料亭，預約20:00晚餐', openHours: '20:00-22:30' },
        { name: '天神祭宵宮', lat: 34.7018, lng: 135.5097, region: 'osaka', type: 'festival', 
          color: '#c0392b', date: '7/24', day: 10, duration: '4小時', priority: 'must-see',
          features: ['日本三大祭', '船渡御', '奉納花火'], description: '大阪夏季最盛大的傳統祭典宵宮', openHours: '18:00-22:00' },
        
        { name: '木津卸売市場', lat: 34.6564, lng: 135.4853, region: 'osaka', type: 'nature', 
          color: '#27ae60', date: '7/25', day: 11, duration: '1.5小時', priority: 'must-see',
          features: ['大阪廚房', '批發市場', '海鮮丼'], description: '大阪專業料理人採買的批發市場，品嚐超值海鮮丼', openHours: '8:30-10:00' },
        { name: 'アメリカ村', lat: 34.6728, lng: 135.4989, region: 'osaka', type: 'nature', 
          color: '#27ae60', date: '7/25', day: 11, duration: '1.25小時', priority: 'important',
          features: ['年輕文化', '古著店', '塗鴉藝術'], description: '大阪年輕女性時尚購物聖地，古著店和咖啡廳巡禮', openHours: '10:15-11:30' },
        { name: '天神祭本宮', lat: 34.7018, lng: 135.5097, region: 'osaka', type: 'festival', 
          color: '#27ae60', date: '7/25', day: 11, duration: '8小時', priority: 'must-see',
          features: ['日本三大祭', '船渡御', '奉納花火'], description: '天神祭本宮最高潮，船渡御+奉納花火', openHours: '13:30-21:24' },
        
        // 東京區域 (7/25-30)
        { name: '增上寺', lat: 35.6567, lng: 139.7489, region: 'tokyo', type: 'temple', 
          color: '#2980b9', date: '7/26', day: 12, duration: '1.5小時', priority: 'important',
          features: ['德川家墓所', '東京鐵塔絕景'], description: '德川家墓所，東京鐵塔絕景拍攝點', openHours: '11:00-12:30' },
        { name: '六本木Hills', lat: 35.6606, lng: 139.7289, region: 'tokyo', type: 'nature', 
          color: '#2980b9', date: '7/26', day: 12, duration: '1.5小時', priority: 'important',
          features: ['城市景觀', '午餐'], description: '六本木Hills午餐+城市景觀', openHours: '13:00-14:30' },
        { name: '銀座', lat: 35.6719, lng: 139.7653, region: 'tokyo', type: 'nature', 
          color: '#2980b9', date: '7/26', day: 12, duration: '2小時', priority: 'important',
          features: ['精品購物', '三越', '伊勢丹'], description: '銀座購物（三越、伊勢丹、無印良品旗艦店）', openHours: '15:00-17:00' },
        { name: '隅田川花火大會', lat: 35.7061, lng: 139.8107, region: 'tokyo', type: 'festival', 
          color: '#2980b9', date: '7/26', day: 12, duration: '1小時', priority: 'must-see',
          features: ['日本三大花火', '2萬發煙火'], description: '東京夏季最盛大的花火大會', openHours: '19:00-20:00' },
        
        { name: '白糸瀑布', lat: 36.3944, lng: 138.5558, region: 'tokyo', type: 'nature', 
          color: '#f1c40f', date: '7/27', day: 13, duration: '1小時', priority: 'important',
          features: ['輕井澤名瀑', '晨光攝影'], description: '輕井澤著名瀑布，晨光攝影絕佳地點', openHours: '9:00-10:00' },
        { name: '舊輕井澤銀座', lat: 36.3570, lng: 138.6296, region: 'tokyo', type: 'nature', 
          color: '#f1c40f', date: '7/27', day: 13, duration: '4小時', priority: 'must-see',
          features: ['高原避暑', '歷史街區', '咖啡文化'], description: '舊輕井澤銀座完整體驗，歷史街區漫步', openHours: '10:30-14:30' },
        
        { name: '華嚴瀑布', lat: 36.7394, lng: 139.5008, region: 'tokyo', type: 'nature', 
          color: '#e67e22', date: '7/28', day: 14, duration: '2小時', priority: 'important',
          features: ['日本三大名瀑', '電梯觀景'], description: '日本三大名瀑之一，電梯直達觀景台', openHours: '9:00-11:00' },
        { name: '中禪寺湖', lat: 36.7283, lng: 139.4833, region: 'tokyo', type: 'nature', 
          color: '#e67e22', date: '7/28', day: 14, duration: '1小時', priority: 'important',
          features: ['奧日光', '遊船體驗'], description: '奧日光地區美麗湖泊，遊船體驗', openHours: '11:00-12:00' },
        { name: '日光東照宮', lat: 36.7581, lng: 139.5989, region: 'tokyo', type: 'heritage', 
          color: '#e67e22', date: '7/28', day: 14, duration: '3小時', priority: 'must-see',
          features: ['世界遺產', 'UNESCO', '德川家康'], description: '德川家康陵墓，華麗的江戶建築', openHours: '12:30-15:30' },
        { name: '二荒山神社', lat: 36.7597, lng: 139.6028, region: 'tokyo', type: 'heritage', 
          color: '#e67e22', date: '7/28', day: 14, duration: '30分鐘', priority: 'important',
          features: ['世界遺產', 'UNESCO'], description: '日光山信仰的中心神社', openHours: '15:30-16:00' },
        { name: '輪王寺', lat: 36.7553, lng: 139.5964, region: 'tokyo', type: 'heritage', 
          color: '#e67e22', date: '7/28', day: 14, duration: '1小時', priority: 'important',
          features: ['世界遺產', 'UNESCO'], description: '日光山天台宗總本山', openHours: '16:00-17:00' },
        
        { name: 'DEAN & DELUCA渋谷', lat: 35.6598, lng: 139.7006, region: 'tokyo', type: 'nature', 
          color: '#9b59b6', date: '7/29', day: 15, duration: '1小時', priority: 'important',
          features: ['早餐', '渋谷都市氛圍'], description: '東京文化日早餐起點', openHours: '9:00-10:00' },
        { name: '花川戸公園', lat: 35.7061, lng: 139.8107, region: 'tokyo', type: 'nature', 
          color: '#2980b9', date: '7/26', day: 12, duration: '1小時', priority: 'important',
          features: ['隅田川花火觀賞點'], description: '隅田川花火觀賞最佳位置', openHours: '18:00-19:00' },
        
        { name: '圓覺寺', lat: 35.3378, lng: 139.5472, region: 'tokyo', type: 'temple', 
          color: '#34495e', date: '7/30', day: 16, duration: '45分鐘', priority: 'important',
          features: ['國寶舍利殿'], description: '神奈川縣唯一國寶建築舍利殿', openHours: '9:30-10:15' },
        { name: '明月院', lat: 35.3433, lng: 139.5550, region: 'tokyo', type: 'temple', 
          color: '#34495e', date: '7/30', day: 16, duration: '1小時', priority: 'important',
          features: ['紫陽花名所'], description: '以紫陽花聞名的美麗寺廟', openHours: '10:30-11:30' },
        { name: '建長寺', lat: 35.3367, lng: 139.5439, region: 'tokyo', type: 'temple', 
          color: '#34495e', date: '7/30', day: 16, duration: '1.25小時', priority: 'must-see',
          features: ['禪宗文化', '坐禪體驗', '國寶梵鐘'], description: '鎌倉五山第一位，禪宗文化體驗', openHours: '11:45-13:00' },
        { name: '長谷寺', lat: 35.3128, lng: 139.5347, region: 'tokyo', type: 'temple', 
          color: '#34495e', date: '7/30', day: 16, duration: '1小時', priority: 'important',
          features: ['十一面觀音', '9.18公尺巨像'], description: '長谷寺式十一面觀音，高9.18公尺巨像', openHours: '15:00-16:00' },
        { name: '鎌倉大佛', lat: 35.3167, lng: 139.5353, region: 'tokyo', type: 'heritage', 
          color: '#34495e', date: '7/30', day: 16, duration: '45分鐘', priority: 'must-see',
          features: ['國寶青銅大佛'], description: '鎌倉最著名的青銅大佛像，禪宗文化收尾', openHours: '16:15-17:00' },
        { name: '小町通', lat: 35.3225, lng: 139.5508, region: 'tokyo', type: 'nature', 
          color: '#34495e', date: '7/30', day: 16, duration: '45分鐘', priority: 'important',
          features: ['和風雜貨', '伴手禮'], description: '和風雜貨購物，最後伴手禮採購', openHours: '17:15-18:00' }
    ],
    
    icons: {
        heritage: '🏛️',
        festival: '🎭',
        shrine: '⛩️',
        temple: '🏯',
        castle: '🏰',
        onsen: '♨️',
        nature: '🌸',
        hotel: '🏨',
        default: '📍'
    },
    
    sizes: {
        base: 28,
        festival: 32,
        hover: 3,
        click: -2
    }
};