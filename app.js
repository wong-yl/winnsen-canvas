const productImages = {
  flower:
    "https://www.winnsen.com/photo/pt220891007-winnsen_large_floor_standing_flower_vending_machine_with_24_bouquets_capacity_built_in_refrigeration_and_touch_screen_payment.jpg",
  laundry:
    "https://www.winnsen.com/photo/pt219215460-winnsen_automatic_laundry_locker_24_7_self_service_intelligent_storage_cabinet_with_remote_management_platform_for_gym_hotel.jpg",
  parcel:
    "https://www.winnsen.com/photo/pt218904041-winnsen_automatic_residential_smart_parcel_locker_electronic_delivery_locker_with_touch_screen_24h_self_service_monitoring.jpg",
  parcelIndoor:
    "https://www.winnsen.com/photo/pt218902354-winnsen_building_indoor_intelligent_parcel_locker_cold_rolled_steel_self_service_cabinet_for_parcel_and_mail_delivery.jpg",
  laundryOutdoor:
    "https://www.winnsen.com/photo/pt219215469-winnsen_custom_outdoor_laundry_locker_with_24_7_unattended_service_cleancloud_integration_and_darkpos_integration.jpg",
  charging:
    "https://www.winnsen.com/photo/pt221045003-winnsen_japan_elevator_vending_machine_machines_flower_bouquets.jpg",
};

const productCatalog = [
  {
    id: "parcel-residential-24",
    line: "Parcel Locker",
    model: "PL-Residential-24",
    title: "Residential Smart Parcel Locker",
    subtitle: "住宅 / 社区 24H 自助取件柜",
    scenario: "公寓、社区、校园、写字楼",
    doors: "12-48 门可配置",
    material: "冷轧钢 / 户外喷涂",
    screen: "10.1 / 15.6 inch touch screen",
    payment: "验证码、扫码、可选支付",
    software: "远程管理平台、短信/邮件、API",
    certifications: "CE / FCC / RoHS 按项目整理",
    image: productImages.parcel,
    specs: ["触摸屏", "远程监控", "摄像头", "可定制门数"],
    modules: ["柜体", "门模块", "电控锁", "触摸屏操作区", "摄像头", "锁控板", "后台管理"],
    tasks: ["补齐门数配置表", "确认户外防水等级", "整理安装场景照片"],
  },
  {
    id: "laundry-api-247",
    line: "Laundry Locker",
    model: "LL-API-24/7",
    title: "Automatic Laundry Locker",
    subtitle: "酒店 / 健身房 / 社区洗衣柜",
    scenario: "酒店、健身房、医院、宿舍",
    doors: "双流程投递/取回门",
    material: "冷轧钢 / 户外款可选防水结构",
    screen: "Touch screen / RFID / printer",
    payment: "会员账户、二维码、第三方订单",
    software: "CleanCloud / DarkPOS / API 集成",
    certifications: "按客户国家补齐合规资料",
    image: productImages.laundry,
    specs: ["RFID", "SMS / Email", "API", "打印机"],
    modules: ["柜体", "投递门", "取回门", "打印机", "RFID", "系统 API", "线束"],
    tasks: ["确认第三方 API 流程", "复核打印机维护方式", "检查线束防夹路径"],
  },
  {
    id: "flower-cooling-24",
    line: "Flower Vending",
    model: "FV-Cooling-24",
    title: "Large Floor Standing Flower Vending Machine",
    subtitle: "冷藏鲜花售卖机",
    scenario: "商场、机场、花店外摆、酒店",
    doors: "24 bouquets 展示容量",
    material: "冷藏柜体 / 玻璃门 / 展示灯",
    screen: "Android touch screen",
    payment: "二维码、银行卡、移动支付",
    software: "库存、温控、远程销售记录",
    certifications: "制冷/电气认证按市场确认",
    image: productImages.flower,
    specs: ["冷藏", "安卓屏", "支付", "24 bouquets"],
    modules: ["冷藏柜体", "玻璃门", "支付模块", "安卓屏", "灯光", "温控"],
    tasks: ["确认冷凝水路径", "检查玻璃门密封", "定义鲜花展示镜头"],
  },
  {
    id: "charging-ad-screen",
    line: "Charging Locker",
    model: "CL-AdScreen",
    title: "Phone Charging Locker",
    subtitle: "商场 / 酒吧 / 展会手机充电柜",
    scenario: "商场、酒吧、展会、公共服务点",
    doors: "多仓位安全充电门",
    material: "金属柜体 / 安全仓门 / 广告面板",
    screen: "广告屏 / 可选触控",
    payment: "扫码支付、会员、免费模式",
    software: "广告播放、设备状态、订单记录",
    certifications: "电源安全与充电协议按项目确认",
    image: productImages.charging,
    specs: ["广告屏", "安全门", "快充", "Wi-Fi"],
    modules: ["广告屏", "充电仓", "锁具", "电源", "散热", "联网模块"],
    tasks: ["确认散热路径", "复核充电线维护", "定义广告屏素材规格"],
  },
  {
    id: "food-pharmacy-elevator",
    line: "Food / Pharmacy Vending",
    model: "FP-Elevator",
    title: "Food / Pharmacy Vending",
    subtitle: "食品、药品、微型商店售卖终端",
    scenario: "办公室、社区、医院、药房、学校",
    doors: "电梯货道 / 补货门",
    material: "冷藏柜体 / 货道模块 / 维护门",
    screen: "Touch screen / scanner",
    payment: "移动支付、银行卡、优惠券",
    software: "库存、补货、温控、远程告警",
    certifications: "食品/药品/制冷合规按国家确认",
    image: productImages.flower,
    specs: ["冷藏", "电梯货道", "远程系统", "库存"],
    modules: ["柜体", "电梯货道", "冷藏系统", "支付模块", "库存系统", "补货门"],
    tasks: ["确认货道适配范围", "检查补货动线", "定义库存报警规则"],
  },
  {
    id: "refrigerated-pickup-fresh",
    line: "Refrigerator Locker",
    model: "RL-Fresh-24",
    title: "Refrigerated Pickup Locker",
    subtitle: "鲜食 / 药品 / 鲜花冷藏取货柜",
    scenario: "社区、生鲜店、药房、餐厅、医院",
    doors: "温控门格 / 透明门可选",
    material: "冷藏柜体 / 保温层 / 双层玻璃",
    screen: "18.5 inch touch screen / QR scanner",
    payment: "预订取货、二维码、可选支付",
    software: "温控、库存、远程告警、取货码",
    certifications: "制冷、电气、食品/药品合规按市场确认",
    image: productImages.flower,
    specs: ["温控", "透明门", "扫码取货", "远程告警"],
    modules: ["冷藏柜体", "温控系统", "透明门", "扫码器", "锁控板", "库存系统"],
    tasks: ["确认温区范围", "定义温控报警逻辑", "补齐透明门和密封结构图"],
  },
  {
    id: "mini-mart-store-48",
    line: "Mini Mart Vending",
    model: "MM-Store-48",
    title: "Mini Mart Vending Machine",
    subtitle: "办公室 / 学校 / 医院微型商店售卖终端",
    scenario: "办公室、学校、医院、旅游点、社区",
    doors: "可调货道 / 电梯货道 / 补货门",
    material: "金属柜体 / 玻璃展示 / 可选冷藏",
    screen: "Touch screen / barcode scanner",
    payment: "Coin / bill / card / QR payment",
    software: "库存、补货、促销、远程销售记录",
    certifications: "支付、电气、食品合规按国家确认",
    image: productImages.flower,
    specs: ["电梯货道", "库存", "大屏", "远程补货"],
    modules: ["柜体", "货道", "电梯机构", "支付模块", "库存系统", "广告屏"],
    tasks: ["整理 SKU 适配范围", "确认补货动线", "定义广告屏素材规格"],
  },
  {
    id: "luggage-station-rental",
    line: "Luggage Locker",
    model: "LG-Station-32",
    title: "Airport / Station Luggage Locker",
    subtitle: "机场 / 车站 / 学校行李寄存柜",
    scenario: "机场、车站、学校、健身房、商业中心",
    doors: "多尺寸储物门 / 租赁计费",
    material: "冷轧钢柜体 / 数字锁 / 防撬门",
    screen: "Touch screen / QR / barcode",
    payment: "投币、纸币、银行卡、二维码",
    software: "租赁计费、远程开门、日志、超时提醒",
    certifications: "电气、支付、公共场所合规按市场确认",
    image: productImages.parcelIndoor,
    specs: ["多语言", "租赁计费", "扫码", "远程开门"],
    modules: ["柜体", "大中小门格", "支付模块", "锁控板", "触摸屏", "租赁系统"],
    tasks: ["确认计费规则", "补齐多语言流程", "评审门格尺寸和防撬结构"],
  },
  {
    id: "tool-safety-workshop",
    line: "Tool / Safety Vending",
    model: "TV-Workshop",
    title: "Tool and Safety Equipment Vending",
    subtitle: "工厂 / 车间工具与劳保用品售卖机",
    scenario: "工厂、车间、仓库、维护站点",
    doors: "格口 / 货道 / 可选归还流程",
    material: "金属柜体 / 透明门 / 工业控制板",
    screen: "Touch screen / RFID / fingerprint optional",
    payment: "员工账号、RFID、成本中心、可选支付",
    software: "库存、领用记录、权限、归还、远程报表",
    certifications: "工业电气和客户现场安全规范按项目确认",
    image: productImages.parcelIndoor,
    specs: ["RFID", "权限", "库存报表", "可选归还"],
    modules: ["柜体", "货道/格口", "RFID", "权限系统", "库存报表", "工业控制板"],
    tasks: ["确认领用/归还流程", "定义权限字段", "整理客户报表样例"],
  },
];

const customerProjectCatalog = [
  {
    id: "project-uae-flower-pilot",
    customerName: "UAE Mall Operator",
    title: "UAE 商场鲜花售卖试点",
    region: "UAE / Qatar",
    productId: "flower-cooling-24",
    stage: "报价前评审",
    priority: "P1",
    quantity: "2-5 台试点，后续按点位扩展",
    targetPrice: "需按制冷、支付、阿语 UI 分版本报价",
    dueDate: "2 周内提交方案包",
    requestType: "新市场试点 / 品牌定制",
    requirements: ["Arabic / English UI", "冷藏温控和湿度说明", "商场支付方式", "透明门展示效果", "视频和安装场景素材"],
    changeRequests: ["阿语 UI 文案", "支付模块按当地方式选择", "外观品牌贴纸", "制冷认证资料"],
    risks: ["温控和冷凝水路径未确认", "支付方式和票据需求可能影响软件范围", "商场安装场景素材不足"],
    requiredMaterials: ["产品主图", "玻璃门密封结构", "温控范围", "Arabic UI 流程", "商场安装效果图", "30 秒视频脚本"],
    nextActions: ["结构确认冷凝水路径", "UI 输出阿语流程", "市场准备商场场景图", "销售确认支付方式"],
  },
  {
    id: "project-us-parcel-apartment",
    customerName: "US Apartment Group",
    title: "美国公寓取件柜方案",
    region: "USA",
    productId: "parcel-residential-24",
    stage: "需求澄清",
    priority: "P1",
    quantity: "20-50 套，按社区规模分批",
    targetPrice: "区分室内/户外、防水、摄像头和 API 版本",
    dueDate: "本周输出配置对比",
    requestType: "批量项目 / 室内外配置",
    requirements: ["多门数配置", "室外防水选项", "摄像头", "短信/邮件通知", "物业后台和 API"],
    changeRequests: ["门数配置表", "户外防水等级", "FCC/RoHS 资料", "安装底座方案"],
    risks: ["户外环境和安装方式不清", "软件 API 字段需确认", "不同门数报价差异容易漏项"],
    requiredMaterials: ["门数配置表", "户外安装图", "摄像头位置图", "API 字段表", "物业后台截图"],
    nextActions: ["产品整理 24/36/48 门差异", "结构复核户外安装", "软件确认 API 字段", "市场准备案例图"],
  },
  {
    id: "project-hotel-laundry-api",
    customerName: "Hotel Laundry Chain",
    title: "酒店洗衣柜 API 对接项目",
    region: "EU / UK",
    productId: "laundry-api-247",
    stage: "接口评审",
    priority: "P1",
    quantity: "首批 10 套，连锁酒店复制",
    targetPrice: "按打印机、RFID、第三方 API 和户外配置拆分",
    dueDate: "10 天内输出技术方案",
    requestType: "客户定制 / 第三方系统对接",
    requirements: ["CleanCloud / DarkPOS API", "RFID", "标签打印", "短信/邮件通知", "投递和取回双流程"],
    changeRequests: ["API 状态字段", "打印机维护路径", "RFID 失败流程", "后台订单状态同步"],
    risks: ["第三方 API 未定稿", "打印机维护空间影响结构", "RFID 和订单异常流程可能影响 UI"],
    requiredMaterials: ["API 字段表", "打印机安装图", "投递/取回 UI 流程", "线束路径", "维护视频"],
    nextActions: ["软件列 API 问题清单", "结构确认打印机拆装", "UI 输出异常流程", "产品整理报价差异"],
  },
  {
    id: "project-pharmacy-refrigerated",
    customerName: "Pharmacy Pickup Network",
    title: "药品冷藏取货柜",
    region: "EU / Middle East",
    productId: "refrigerated-pickup-fresh",
    stage: "合规资料准备",
    priority: "P2",
    quantity: "5-20 台按门店试点",
    targetPrice: "按温区、透明门、扫码器和远程告警拆分",
    dueDate: "下周提交资料缺口",
    requestType: "行业定制 / 冷链取货",
    requirements: ["温控记录", "扫码取货", "透明门可选", "远程告警", "药品/食品合规资料"],
    changeRequests: ["温控范围说明", "断电告警", "取货码流程", "透明门安全和保温方案"],
    risks: ["合规资料未按目标国家整理", "温控记录和远程告警边界不清", "透明门影响保温和成本"],
    requiredMaterials: ["温控测试资料", "断电告警流程", "扫码取货 UI", "透明门结构图", "合规资料清单"],
    nextActions: ["产品列合规资料", "结构确认保温方案", "软件确认温控日志", "市场准备药房场景图"],
  },
  {
    id: "project-airport-luggage",
    customerName: "Airport Service Partner",
    title: "机场行李寄存租赁柜",
    region: "APAC / EU",
    productId: "luggage-station-rental",
    stage: "方案对比",
    priority: "P2",
    quantity: "1-3 套试点，按航站楼扩展",
    targetPrice: "按门格尺寸、支付、租赁计费和多语言拆分",
    dueDate: "本月输出 V1 方案",
    requestType: "公共场所租赁 / 多语言",
    requirements: ["多尺寸门格", "租赁计费", "二维码/银行卡支付", "超时提醒", "多语言 UI"],
    changeRequests: ["计费规则", "超时开门策略", "大件门尺寸", "支付失败异常流程"],
    risks: ["计费规则未确认", "公共场所防撬和应急开门要求高", "多语言和支付失败流程需 UI 细化"],
    requiredMaterials: ["计费流程图", "门格尺寸表", "应急开门说明", "多语言 UI", "公共场所安装图"],
    nextActions: ["销售确认计费规则", "结构复核防撬门", "UI 输出租赁流程", "产品整理尺寸版本"],
  },
  {
    id: "project-workshop-tool",
    customerName: "Industrial Workshop Client",
    title: "车间工具和劳保用品领用柜",
    region: "USA / EU",
    productId: "tool-safety-workshop",
    stage: "需求整理",
    priority: "P2",
    quantity: "按工厂站点配置，首批 3-8 台",
    targetPrice: "按货道/格口、RFID、权限、归还流程拆分",
    dueDate: "两周内输出需求确认表",
    requestType: "工业客户定制 / 权限和库存",
    requirements: ["员工 RFID / 指纹可选", "库存报表", "权限控制", "可选归还流程", "成本中心记录"],
    changeRequests: ["领用权限字段", "归还流程", "库存报表模板", "工业现场电气要求"],
    risks: ["权限字段和报表格式不清", "是否需要归还流程影响结构和软件", "工业现场安装环境需确认"],
    requiredMaterials: ["权限字段表", "报表样例", "货道/格口配置", "RFID 流程", "工业现场安装图"],
    nextActions: ["产品梳理领用/归还流程", "软件定义权限字段", "结构确认格口方案", "销售索取报表样例"],
  },
];

const assetCatalog = [
  {
    id: "parcel-front-photo",
    title: "Parcel Locker 产品主图",
    type: "Image",
    productLine: "Parcel Locker",
    usage: "官网、报价、视频封面、方案页",
    formats: ["JPG", "PNG"],
    tags: ["正面", "户外", "触摸屏", "取件柜"],
    thumbnail: productImages.parcel,
    status: "可复用",
  },
  {
    id: "laundry-outdoor-photo",
    title: "Outdoor Laundry Locker 场景图",
    type: "Image",
    productLine: "Laundry Locker",
    usage: "客户定制说明、安装场景、视频镜头",
    formats: ["JPG", "PNG"],
    tags: ["户外", "API", "洗衣柜", "客户场景"],
    thumbnail: productImages.laundryOutdoor,
    status: "可复用",
  },
  {
    id: "structure-review-pdf",
    title: "结构品审资料包",
    type: "PDF",
    productLine: "Smart Locker",
    usage: "门板、锁具、线束、屏幕操作区评审",
    formats: ["PDF", "Markdown"],
    tags: ["结构图", "评审", "学习卡"],
    thumbnail: productImages.parcelIndoor,
    status: "待接入",
  },
  {
    id: "cabinet-3d-shell",
    title: "柜体 3D 外壳模型",
    type: "3D",
    productLine: "Parcel / Laundry",
    usage: "结构拆解、视频旋转镜头、客户方案",
    formats: ["STEP", "GLB", "OBJ"],
    tags: ["柜体", "门模块", "爆炸图", "模型"],
    thumbnail: productImages.parcelIndoor,
    status: "待入库",
  },
  {
    id: "video-shot-pack",
    title: "30 秒产品视频素材包",
    type: "Video",
    productLine: "All Product Lines",
    usage: "分镜、旁白、字幕、AI 视频 prompt",
    formats: ["MP4", "Prompt", "SRT"],
    tags: ["全景", "操作区", "开门", "后台", "客户场景"],
    thumbnail: productImages.flower,
    status: "模板",
  },
];

const publicProductSeedRows = [
  {
    model: "PL-Residential-24H",
    line: "Parcel Delivery Lockers",
    title: "Winnsen Automatic Residential Smart Parcel Locker",
    subtitle: "Electronic delivery locker with touch screen, 24H self-service and monitoring",
    applications: "Residential community / apartment / mailroom",
    doorCount: "Customizable parcel doors",
    material: "Cold rolled steel / outdoor coating option",
    screen: "Touch screen",
    payment: "Code / QR / optional card",
    software: "Remote management / monitoring / notification",
    certifications: "CE/FCC/RoHS by market confirmation",
    image: "",
    specs: "touch screen;24H self-service;monitoring;parcel delivery",
    modules: "cabinet;door module;electronic lock;touch screen;camera;remote platform",
    tasks: "确认门数配置表;补齐安装场景图;检查门缝和锁舌一致性",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "PL-Building-Indoor",
    line: "Parcel Delivery Lockers",
    title: "Winnsen Building Indoor Intelligent Parcel Locker",
    subtitle: "Cold rolled steel self-service cabinet for parcel and mail delivery",
    applications: "Building lobby / office / school / community",
    doorCount: "Indoor multi-door parcel cabinet",
    material: "Cold rolled steel",
    screen: "Touch screen / barcode optional",
    payment: "Code / QR",
    software: "Remote platform / access log",
    certifications: "Confirm by destination market",
    image: "",
    specs: "indoor;parcel;mail delivery;self-service",
    modules: "cabinet;mail doors;barcode/QR;touch screen;admin platform",
    tasks: "确认室内安装尺寸;补齐取件流程 UI;整理物业后台字段",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "LL-Gym-Hotel-24H",
    line: "Laundry Locker",
    title: "Winnsen Automatic Laundry Locker 24/7 Self-Service Intelligent Storage Cabinet",
    subtitle: "Laundry locker with remote management platform for gym and hotel",
    applications: "Gym / hotel / laundry room / hospital",
    doorCount: "Drop-off and retrieval doors",
    material: "Cold rolled steel / waterproof option",
    screen: "Touch screen / RFID / printer",
    payment: "Member account / QR / optional card",
    software: "Remote management platform",
    certifications: "Confirm by destination market",
    image: "",
    specs: "24/7;laundry;remote platform;printer",
    modules: "drop-off door;retrieval door;printer;RFID;touch screen;wiring",
    tasks: "确认投递取回双流程;复核打印机维护;检查线束防夹路径",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "LL-Outdoor-API",
    line: "Laundry Locker",
    title: "Winnsen Custom Outdoor Laundry Locker",
    subtitle: "24/7 unattended service with CleanCloud and DarkPOS integration",
    applications: "Outdoor laundry service / hotel chain / gym",
    doorCount: "Custom outdoor laundry doors",
    material: "Outdoor steel enclosure / waterproof design",
    screen: "Touch screen / RFID / printer",
    payment: "Account / QR / third-party payment",
    software: "CleanCloud / DarkPOS / API integration",
    certifications: "Confirm waterproof and electrical requirement",
    image: "",
    specs: "outdoor;API;CleanCloud;DarkPOS;24/7",
    modules: "outdoor cabinet;printer;RFID;API;touch screen;lock control",
    tasks: "确认第三方 API 字段;复核户外防水等级;整理联调任务",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "FV-24-Bouquets",
    line: "Flower Vending Machine",
    title: "Winnsen Large Floor Standing Flower Vending Machine",
    subtitle: "24 bouquets capacity, built-in refrigeration and touch screen payment",
    applications: "Shopping mall / airport / hotel / florist self-service",
    doorCount: "24 bouquets capacity",
    material: "Refrigerated cabinet / glass display",
    screen: "Android touch screen",
    payment: "QR / card / mobile payment",
    software: "Inventory / temperature / remote sales record",
    certifications: "Cooling and electrical certification by market",
    image: "",
    specs: "24 bouquets;refrigeration;touch screen;payment",
    modules: "cooling cabinet;glass door;payment module;Android screen;lighting;temperature",
    tasks: "确认冷凝水路径;检查玻璃门密封;定义视频镜头和补货流程",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "FV-Android-Refrigerated",
    line: "Flower Vending Machine",
    title: "Winnsen 24-Hour Self-Service Flower Shop",
    subtitle: "Refrigerated floral bouquet vending machine with Android touchscreen",
    applications: "Flower shop extension / mall / cemetery / hospital",
    doorCount: "Refrigerated bouquet locker",
    material: "Cooling cabinet / transparent display window",
    screen: "Android touchscreen",
    payment: "QR / card / contactless payment",
    software: "Remote ads / inventory / temperature control",
    certifications: "CE/FCC and refrigeration requirement by market",
    image: "",
    specs: "24-hour;refrigerated;Android;bouquet vending",
    modules: "cooling system;glass window;Android screen;payment;remote ads;humidity",
    tasks: "补齐温控测试资料;确认花束容量;准备英文视频卖点",
    sourceUrl: "https://www.winnsen.com/products.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "RF-Grocery-QR",
    line: "Refrigerator Locker",
    title: "QR Coin Bill Parcel Refrigerated Lockers",
    subtitle: "24 hours refrigerated locker for grocery delivery",
    applications: "Grocery delivery / meat egg / restaurant / office building",
    doorCount: "Temperature-controlled doors",
    material: "Refrigerated steel cabinet",
    screen: "7/15 inch or 15.6 inch touch screen by configuration",
    payment: "QR / coin / bill / card optional",
    software: "Remote control / temperature record / WiFi",
    certifications: "Food refrigeration and electrical certification by market",
    image: "",
    specs: "refrigerated;grocery;QR;temperature control",
    modules: "cooling system;insulated doors;temperature sensor;payment;remote alarm",
    tasks: "确认温控范围;补齐断电告警流程;整理冷链安装场景",
    sourceUrl: "https://www.winnsen.com/products-p91.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "CS-24-60W",
    line: "Cell Phone Charging Stations",
    title: "24 Doors Cell Phone Charging Station",
    subtitle: "60W USB AC cellphone charging locker",
    applications: "Shopping mall / school / gym / public service area",
    doorCount: "24 phone charging doors",
    material: "Steel charging locker cabinet",
    screen: "Control panel / optional touch screen",
    payment: "Coin / QR / optional card",
    software: "Charging status / timer / remote control optional",
    certifications: "Electrical safety by market",
    image: "",
    specs: "24 doors;60W;USB;AC charging",
    modules: "charging module;door lock;power management;control panel;wiring",
    tasks: "确认电气安全;检查散热路径;定义租借/归还 UI",
    sourceUrl: "https://www.winnsen.com/products-p42.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "MM-22-Touch",
    line: "Mini Mart Vending Machine",
    title: "22 Inch Touch Screen Mini Mart Vending Machine",
    subtitle: "Gumball, candy, book, glasses and cupcake vending use",
    applications: "Mini mart / retail / mall / campus",
    doorCount: "Locker or shelf vending by SKU",
    material: "Steel cabinet / glass display",
    screen: "22 inch touch screen",
    payment: "Cash / card / QR / mobile payment",
    software: "Remote network management / sales report",
    certifications: "Payment and electrical certification by market",
    image: "",
    specs: "22 inch;mini mart;remote management;multi SKU",
    modules: "cabinet;shelf/elevator;payment;touch screen;inventory;ads",
    tasks: "确认 SKU 尺寸;补齐补货动线;定义库存报警规则",
    sourceUrl: "https://www.winnsen.com/products-p53.html",
    source: "Winnsen 官网 Products",
  },
  {
    model: "LG-36-Storage",
    line: "Luggage Lockers",
    title: "36 Doors Automatic Storage Luggage Lockers",
    subtitle: "Storage lockers for gym, swimming pool and water park with steel enclosure",
    applications: "Gym / swimming pool / water park / station",
    doorCount: "36 storage doors",
    material: "Steel enclosure",
    screen: "Control panel / touch screen optional",
    payment: "Coin / bill / card / QR optional",
    software: "Rental timer / access log / remote report",
    certifications: "Electrical and payment requirement by market",
    image: "",
    specs: "36 doors;luggage;storage;rental",
    modules: "storage doors;lock control;payment;timer;admin report;emergency open",
    tasks: "确认门格尺寸;补齐租赁计费流程;检查应急开门说明",
    sourceUrl: "https://www.winnsen.com/products-p74.html",
    source: "Winnsen 官网 Products",
  },
];

const materialReadinessRequirements = [
  {
    id: "product-profile",
    area: "产品资料",
    owner: "产品设计",
    output: "内部产品资料卡",
    evidence: "真实型号、门数配置、应用场景、核心卖点、版本差异。",
    acceptance: "能直接进入报价前评审和产品库筛选。",
  },
  {
    id: "structure-review",
    area: "结构 / BOM",
    owner: "结构品审",
    output: "结构图与品审依据",
    evidence: "外形尺寸、门板/锁具、线束、维护路径、关键 BOM 和风险点。",
    acceptance: "能支撑结构评审、装配检查和供应链确认。",
  },
  {
    id: "ui-software",
    area: "UI / 软件",
    owner: "界面设计",
    output: "UI 流程与接口字段",
    evidence: "屏幕入口、用户步骤、异常状态、后台字段、支付或 API 对接。",
    acceptance: "能交给 UI/软件按同一流程评审和开发。",
  },
  {
    id: "asset-library",
    area: "图库 / 模型库",
    owner: "图库模型",
    output: "图片、3D、PDF 文件路径",
    evidence: "主图、安装图、结构局部图、UI 截图、3D 模型、公开等级。",
    acceptance: "能在客户方案、评审包和视频生成中复用。",
  },
  {
    id: "video-pack",
    area: "视频素材",
    owner: "视频生成",
    output: "镜头脚本与 Prompt",
    evidence: "客户场景、产品全景、操作特写、后台画面、旁白卖点。",
    acceptance: "能生成 30 秒产品介绍视频脚本或 AI 视频 prompt。",
  },
  {
    id: "quote-cert",
    area: "报价 / 认证",
    owner: "销售报价",
    output: "报价差异与合规清单",
    evidence: "认证要求、付款/支付模块、目标市场、交期风险、版本报价口径。",
    acceptance: "能支持可报价/需评审/暂缓报价判断。",
  },
];

const catalogCsvSample = productSeedCsv(publicProductSeedRows);

const csvHeaderAliases = {
  型号: "model",
  产品线: "line",
  产品名称: "title",
  名称: "title",
  标题: "title",
  说明: "subtitle",
  副标题: "subtitle",
  应用场景: "applications",
  场景: "applications",
  门数: "doorCount",
  门数结构: "doorCount",
  结构: "doorCount",
  材料: "material",
  材质: "material",
  屏幕: "screen",
  支付: "payment",
  软件: "software",
  系统: "software",
  认证: "certifications",
  图片: "image",
  图片链接: "image",
  参数: "specs",
  标签: "specs",
  模块: "modules",
  任务: "tasks",
  来源: "source",
  来源链接: "sourceUrl",
  来源URL: "sourceUrl",
};

function catalogFields(id) {
  const item = productCatalog.find((entry) => entry.id === id);
  if (!item) return {};
  return {
    catalogId: item.id,
    model: item.model,
    line: item.line,
    applications: item.scenario,
    doorCount: item.doors,
    screen: item.screen,
    payment: item.payment,
    software: item.software,
    certifications: item.certifications,
    material: item.material,
  };
}

const storageKey = "winnsen-product-canvas-v1";

const defaultNodes = [
  {
    id: "product-parcel",
    type: "product",
    title: "Residential Smart Parcel Locker",
    subtitle: "住宅 / 社区 24H 自助取件柜",
    status: "量产复盘",
    badge: "green",
    x: 120,
    y: 120,
    image: productImages.parcel,
    ...catalogFields("parcel-residential-24"),
    specs: ["触摸屏", "远程监控", "可定制门数", "冷轧钢"],
    modules: ["柜体", "门模块", "电控锁", "触摸屏操作区", "摄像头", "后台管理"],
    tasks: ["确认户外防水等级", "检查门缝一致性", "复核摄像头视角"],
    details: [
      ["评审重点", "户外防水、取件流程、摄像头位置、门缝一致性"],
      ["资料", "产品图、结构图、UI 流程、客户安装场景"],
    ],
  },
  {
    id: "review-structure",
    type: "review",
    title: "门缝与铰链一致性",
    subtitle: "批量装配后需统一门板间隙和门锁定位",
    status: "P1",
    badge: "red",
    x: 520,
    y: 94,
    owner: "结构工程师",
    due: "本周",
    category: "门板/铰链/锁具",
    details: [
      ["风险", "门缝不齐会影响客户第一印象，也可能影响取件门开合。"],
      ["动作", "建立门板、锁扣、铰链三件套安装基准检查表。"],
    ],
  },
  {
    id: "knowledge-locker",
    type: "knowledge",
    title: "智能柜结构经验卡",
    subtitle: "屏幕、锁控板、走线、维修门需要一起评审",
    status: "沉淀",
    badge: "green",
    x: 910,
    y: 120,
    details: [
      ["经验", "把维护门、屏幕背板、强弱电隔离和排水路径放在同一张评审表里。"],
      ["复用", "Parcel / Laundry / Luggage Locker 通用。"],
    ],
  },
  {
    id: "flow-parcel-pickup",
    type: "flow",
    title: "取件屏幕流程",
    subtitle: "验证码/扫码 → 开门 → 取件 → 关门确认",
    status: "UI流程",
    badge: "blue",
    x: 520,
    y: 300,
    sourceProductId: "product-parcel",
    persona: "住户 / 取件人 / 物业管理员",
    entryPoints: ["短信验证码", "二维码", "后台远程开门"],
    flowSteps: ["待机欢迎页", "输入或扫码取件码", "订单校验", "柜门开锁", "取件提示", "关门确认", "完成通知"],
    errorStates: ["验证码错误", "门未打开", "门未关闭", "网络离线", "锁控板异常"],
    uiChecklist: ["触控高度与视角", "门号高亮", "多语言文案", "弱网提示", "操作日志", "摄像头提示"],
    tasks: ["补齐取件流程 UI 截图", "确认异常状态文案", "检查门号高亮与实际柜门一致"],
    details: [
      ["界面目标", "把用户取件动作、柜门状态、后台日志和异常提示连成一条可评审流程。"],
      ["品审关联", "屏幕操作区、扫码器、摄像头、锁控板和门号显示需要一起验证。"],
    ],
  },
  {
    id: "product-laundry",
    type: "product",
    title: "Automatic Laundry Locker",
    subtitle: "酒店 / 健身房 / 社区洗衣柜",
    status: "客户定制",
    badge: "blue",
    x: 110,
    y: 560,
    image: productImages.laundry,
    ...catalogFields("laundry-api-247"),
    specs: ["RFID", "SMS / Email", "API", "打印机"],
    modules: ["柜体", "投递门", "取回门", "打印机", "RFID", "系统 API", "线束"],
    tasks: ["确认第三方 API 流程", "复核打印机维护方式", "检查线束防夹路径"],
    details: [
      ["评审重点", "投递/取回双流程、衣物袋编号、第三方系统集成。"],
      ["资料", "CleanCloud / DarkPOS 集成记录、柜门配置表。"],
    ],
  },
  {
    id: "brief-laundry-hotel",
    type: "brief",
    title: "Hotel Laundry Locker 客户需求",
    subtitle: "酒店/健身房客户定制：投递、取回、打印、API 对接",
    status: "需求整理",
    badge: "amber",
    x: 910,
    y: 340,
    sourceProductId: "product-laundry",
    customerName: "Hotel / Gym 客户",
    region: "EU / US 项目待确认",
    market: "酒店、健身房、医院、社区洗衣服务",
    requestType: "ODM 定制",
    quantity: "首批数量待报价确认",
    targetPrice: "按门数、屏幕、打印机和 API 范围核算",
    dueDate: "2 周内完成方案评审",
    requirements: ["投递/取回双流程", "RFID 或二维码识别", "打印衣物标签", "第三方系统 API", "短信/邮件提醒"],
    changeRequests: ["确认打印机维护方式", "确认 API 订单状态字段", "确认户外防水是否进入本版本"],
    versionRows: [
      ["V0 资料版", "确认门数、屏幕、打印机、RFID、API 范围", "待客户确认"],
      ["V1 样机版", "输出 UI 流程、结构品审、素材清单和报价差异", "准备中"],
    ],
    tasks: ["整理客户需求差异表", "确认 API 对接字段", "输出报价版本说明"],
    details: [
      ["客户目标", "把洗衣柜投递、取回、打印和第三方系统状态连成可报价、可评审的版本。"],
      ["版本重点", "屏幕流程、打印机维护、RFID/API、门数配置和户外防水是否进入同一报价版本。"],
    ],
  },
  {
    id: "asset-library",
    type: "asset",
    title: "图库 / 模型库",
    subtitle: "产品图、安装图、渲染图、3D 外壳、UI 截图",
    status: "素材",
    badge: "violet",
    x: 520,
    y: 580,
    assets: [productImages.laundryOutdoor, productImages.flower, productImages.parcelIndoor],
    assetType: "Image / 3D / PDF / Video",
    relatedProduct: "All Product Lines",
    sourceProductId: "product-laundry",
    usage: "产品设计、结构评审、客户提案、视频生成",
    formats: ["JPG", "PNG", "STEP", "GLB", "PDF", "MP4"],
    tags: ["产品图", "安装图", "渲染图", "3D 模型", "UI 截图"],
    storagePath: "Winnsen/Assets/Product-Library/",
    assetOwner: "产品/市场",
    assetVersion: "v1",
    source: "官网图片 / 项目资料",
    approvalStatus: "待整理",
    requiredAssets: ["产品正面图", "45 度图", "开门动作", "UI 截图", "结构图", "3D 模型", "视频镜头"],
    missingAssets: ["结构局部图", "UI 截图", "3D GLB 模型"],
    fileRows: [
      ["产品正面图", "Image", "JPG/PNG", "市场", "Winnsen/Assets/Product-Library/Photos/", "待入库", "官网/报价/封面", "可公开"],
      ["45 度图", "Image", "JPG/PNG", "市场", "Winnsen/Assets/Product-Library/Photos/", "待入库", "方案页/视频", "可公开"],
      ["开门动作", "Video", "MP4", "市场/产品", "Winnsen/Assets/Product-Library/Video/", "待拍摄", "视频镜头/品审", "内部审核"],
      ["UI 截图", "UI", "PNG/Figma", "产品/UI", "Winnsen/Assets/Product-Library/UI/", "缺口", "界面设计/软件对齐", "内部"],
      ["结构图", "Structure", "PDF/DWG", "结构", "Winnsen/Assets/Product-Library/Structure/", "缺口", "结构品审", "内部"],
      ["3D 模型", "3D", "STEP/GLB", "结构", "Winnsen/Assets/Product-Library/3D/", "缺口", "模型库/视频", "内部脱敏"],
      ["视频镜头", "Video", "MP4/Prompt", "市场", "Winnsen/Assets/Product-Library/Video/", "待整理", "视频生成", "可公开审核"],
    ],
    details: [
      ["命名", "产品线-型号-角度-版本，例如 parcel-PL24-front-v03。"],
      ["标签", "门数、屏幕尺寸、应用场景、材质、客户国家。"],
      ["缺口", "每个产品至少补齐主图、45 度图、开门动作、UI 截图、结构图和视频镜头。"],
    ],
  },
  {
    id: "video-story",
    type: "video",
    title: "客户介绍视频脚本",
    subtitle: "从产品卡和评审结论生成 30 秒短视频",
    status: "生成中",
    badge: "amber",
    x: 910,
    y: 580,
    shotPlan: ["客户场景痛点", "产品全景", "屏幕取件流程", "门锁开合细节", "后台远程管理"],
    voiceover: "Self-service parcel pickup, remote monitoring, and customizable locker modules for residential communities.",
    videoPrompt: "Show a Winnsen smart parcel locker in a residential lobby, user scans pickup code, one door opens, camera and touchscreen details, clean product close-up.",
    details: [
      ["镜头", "场景痛点 → 柜体细节 → 用户取件 → 后台管理 → 定制能力。"],
      ["输出", "旁白、字幕、镜头 prompt、封面图 prompt。"],
    ],
  },
];

const defaultLinks = [
  ["product-parcel", "review-structure"],
  ["review-structure", "knowledge-locker"],
  ["product-parcel", "flow-parcel-pickup"],
  ["flow-parcel-pickup", "video-story"],
  ["product-laundry", "brief-laundry-hotel"],
  ["brief-laundry-hotel", "asset-library"],
  ["brief-laundry-hotel", "video-story"],
  ["product-laundry", "asset-library"],
  ["asset-library", "video-story"],
  ["knowledge-locker", "video-story"],
];

const templates = {
  parcel: {
    type: "product",
    title: "New Parcel Locker Concept",
    subtitle: "社区 / 学校 / 公寓自助取件",
    status: "方案",
    badge: "blue",
    image: productImages.parcelIndoor,
    specs: ["条码", "摄像头", "远程平台", "多语言"],
    modules: ["柜体", "门模块", "锁控板", "扫码器", "摄像头", "后台平台"],
    tasks: ["定义门数配置", "确认扫码器安装角度", "建立客户场景图"],
  },
  laundry: {
    type: "product",
    title: "Laundry Locker Variant",
    subtitle: "洗衣房 / 医院 / 宿舍",
    status: "定制",
    badge: "green",
    image: productImages.laundryOutdoor,
    specs: ["API", "短信提醒", "打印机", "防水"],
    modules: ["柜体", "衣物投递门", "RFID", "打印机", "API 模块", "线束"],
    tasks: ["梳理洗衣订单状态", "确认打印机耗材维护", "验证短信提醒逻辑"],
  },
  flower: {
    type: "product",
    title: "Flower Vending Machine",
    subtitle: "冷藏鲜花售卖机",
    status: "营销",
    badge: "amber",
    image: productImages.flower,
    specs: ["冷藏", "安卓屏", "支付", "24 bouquets"],
    modules: ["冷藏柜体", "玻璃门", "支付模块", "安卓屏", "灯光", "温控"],
    tasks: ["确认冷凝水路径", "检查玻璃门密封", "定义鲜花展示镜头"],
  },
  charging: {
    type: "product",
    title: "Phone Charging Locker",
    subtitle: "商场 / 酒吧 / 展会手机充电柜",
    status: "资料",
    badge: "violet",
    image: productImages.charging,
    specs: ["广告屏", "安全门", "快充", "Wi-Fi"],
    modules: ["广告屏", "充电仓", "锁具", "电源", "散热", "联网模块"],
    tasks: ["确认散热路径", "复核充电线维护", "定义广告屏素材规格"],
  },
  food: {
    type: "product",
    title: "Food / Pharmacy Vending",
    subtitle: "食品、药品、微型商店售卖终端",
    status: "机会",
    badge: "blue",
    image: productImages.flower,
    specs: ["冷藏", "电梯货道", "远程系统", "库存"],
    modules: ["柜体", "电梯货道", "冷藏系统", "支付模块", "库存系统", "补货门"],
    tasks: ["确认货道适配范围", "检查补货动线", "定义库存报警规则"],
  },
};

const scenarioTemplates = {
  "structure-review": {
    product: "parcel",
    title: "新品结构品审",
    reviewTitle: "门板/锁具/操作区结构评审",
    knowledgeTitle: "结构评审学习卡",
    videoTitle: "结构亮点演示素材",
    tasks: ["模块拆解评审", "门缝锁舌样机验证", "操作区维护方式确认"],
  },
  "customer-custom": {
    product: "laundry",
    title: "客户定制方案",
    reviewTitle: "客户场景与接口风险",
    knowledgeTitle: "客户定制复盘卡",
    videoTitle: "客户提案视频脚本",
    tasks: ["确认客户使用流程", "核对第三方 API", "整理报价所需差异项"],
  },
  "video-planning": {
    product: "flower",
    title: "视频素材规划",
    reviewTitle: "拍摄前产品状态检查",
    knowledgeTitle: "视频素材经验卡",
    videoTitle: "30 秒产品短视频",
    tasks: ["拍摄全景和操作细节", "准备英文卖点文案", "生成封面和分镜 prompt"],
  },
};

const openSourceReferenceCatalog = [
  {
    id: "tldraw",
    product: "tldraw",
    repo: "tldraw/tldraw",
    url: "https://github.com/tldraw/tldraw",
    role: "无限画布 SDK",
    stars: "47.6k",
    forks: "3.3k",
    license: "自定义 tldraw license",
    checkedAt: "2026-06-08",
    activity: "2026-06-08 仍有 push；最新 release v5.1.0 / 2026-06-03",
    maturitySignal: "Feature-complete infinite canvas engine，支持自定义 shapes/tools/bindings、多人协作、运行时 API、AI 和 DOM canvas。",
    adoptDecision: "P2 技术验证候选：优先验证自定义业务节点、连线、协作和运行时 API。",
    licenseAction: "开发可试，生产使用需确认 license key 和商用边界。",
    borrow: "自定义形状、工具、连线、多人协作、AI 画布和运行时 API。",
    winnsenUse: "把产品卡、客户需求、品审点、UI 流程、素材台账和视频脚本做成可扩展业务节点。",
    buildScope: "下一阶段可评估 React + tldraw SDK 或自研形状层，重点验证自定义节点和权限协作。",
    risk: "生产使用授权需单独确认；当前原型只做产品模式借鉴，不直接复制实现。",
  },
  {
    id: "excalidraw",
    product: "Excalidraw",
    repo: "excalidraw/excalidraw",
    url: "https://github.com/excalidraw/excalidraw",
    role: "轻量白板与开放导出",
    stars: "124.9k",
    forks: "14.0k",
    license: "MIT",
    checkedAt: "2026-06-08",
    activity: "2026-06-08 仍有 push；开源编辑器和 excalidraw.com showcase 同仓维护。",
    maturitySignal: "开放、轻量、无限白板，支持 PNG/SVG/clipboard、.excalidraw JSON、实时协作、端到端加密和 local-first。",
    adoptDecision: "P0/P1 交互仿照：保留低门槛批注、箭头、导出和本地保存体验。",
    licenseAction: "MIT 可作为轻量白板体验参考；仍需避免复制品牌资产。",
    borrow: "手绘风表达、快速草图、箭头批注、图库、PNG/SVG/JSON 导出和低学习成本。",
    winnsenUse: "销售、产品和结构可以快速画客户安装场景、柜体流程、报价差异和 UI 草图。",
    buildScope: "保留轻量操作体验，优先支持批注、框选、导出和可读 JSON 工作区。",
    risk: "手绘白板不等于业务系统；需要叠加产品资料库、评审表和文件台账。",
  },
  {
    id: "affine",
    product: "AFFiNE",
    repo: "toeverything/AFFiNE",
    url: "https://github.com/toeverything/affine",
    role: "文档、白板、数据库合一",
    stars: "69.2k",
    forks: "4.9k",
    license: "CE 自托管 MIT；仓库 license 检测为 mixed/unknown",
    checkedAt: "2026-06-08",
    activity: "2026-06-08 仍有 push；最新 release 0.26.3 / 2026-02-25",
    maturitySignal: "Docs、canvas、tables 融合；edgeless canvas 可放 rich text、sticky notes、embed、多视图数据库、linked pages、shapes 和 slides。",
    adoptDecision: "P1 产品组织仿照：把画布、产品资料表、知识库和素材库做成互相引用的工作区。",
    licenseAction: "优先借鉴信息架构；正式自托管或集成前复核 CE/EE 边界。",
    borrow: "文档、edgeless 画布、多视图数据库、知识库、数字资产和本地优先协作。",
    winnsenUse: "把产品资料、知识沉淀、图库模型库、客户项目和评审包连接成一套内部知识工作区。",
    buildScope: "先做画布节点与表格视图互通，再补文档页、知识库检索和素材文件详情页。",
    risk: "全能工作区容易变重；Winnsen 版本要聚焦报价前、品审、素材和视频生成。",
  },
  {
    id: "appflowy",
    product: "AppFlowy",
    repo: "AppFlowy-IO/AppFlowy",
    url: "https://github.com/AppFlowy-IO/AppFlowy",
    role: "项目、任务、Wiki 工作区",
    stars: "72.1k",
    forks: "5.4k",
    license: "AGPL-3.0",
    checkedAt: "2026-06-08",
    activity: "2026-06-05 有 push；最新 release v0.12.2 / 2026-06-05",
    maturitySignal: "AI workspace，强调项目、Wiki、团队、模板、数据库、跨端和数据控制权。",
    adoptDecision: "P1/P2 管理仿照：资料缺口、负责人、任务看板、Wiki 和权限策略进入内部试用。",
    licenseAction: "AGPL 影响较大；只借鉴产品模式，正式使用代码前做法务/架构确认。",
    borrow: "项目看板、数据库、Wiki、模板、AI 工作区和数据控制权。",
    winnsenUse: "管理报价前项目、产品路线、任务负责人、资料缺口、客户版本和团队协作权限。",
    buildScope: "用项目库、任务看板和权限结构支撑真实团队使用，后续考虑自托管数据库。",
    risk: "不要把它做成通用 Notion；核心是 Winnsen 产品决策和资料闭环。",
  },
  {
    id: "drawio",
    product: "diagrams.net / draw.io",
    repo: "jgraph/drawio",
    url: "https://github.com/jgraph/drawio",
    role: "成熟图表与模板库",
    stars: "5.9k",
    forks: "947",
    license: "Apache-2.0",
    checkedAt: "2026-06-08",
    activity: "2026-06-06 有 push；GitHub 仓库记录核心团队维护。",
    maturitySignal: "可配置 diagramming / whiteboarding application，成熟图形库、模板、导出和 app.diagrams.net 生产部署。",
    adoptDecision: "P2 模板仿照：先做 Winnsen 柜体结构、安装、售后、支付/API 和报价流程模板。",
    licenseAction: "源代码 Apache-2.0；图标、stencil、模板有额外条款，正式使用前单独复核。",
    borrow: "结构图、流程图、模板库、嵌入式编辑、XML/PNG/SVG 导出和企业集成。",
    winnsenUse: "沉淀柜体结构、安装方式、售后路径、支付流程、API 流程和报价方案模板。",
    buildScope: "先做 Winnsen 专用图表模板和导出，再评估是否嵌入 draw.io 编辑器或兼容 .drawio 文件。",
    risk: "模板能力很强，但要避免把产品画布变成复杂制图软件；业务节点仍应是主线。",
  },
];

const productRoadmapMilestones = [
  {
    phase: "P0 原型",
    goal: "静态无限画布",
    scope: "产品资料库、客户项目、报价 Gate、品审、UI 流程、素材、文件台账和视频脚本。",
    owner: "产品设计",
    evidence: "当前 HTML 原型和本地 JSON 导入导出。",
  },
  {
    phase: "P1 真实资料",
    goal: "Winnsen 数据结构",
    scope: "导入真实型号、门数、结构图、认证、报价差异、文件路径、客户版本和负责人。",
    owner: "产品/市场/销售",
    evidence: "产品资料表、客户项目模板、素材路径和评审包导出。",
  },
  {
    phase: "P2 画布引擎",
    goal: "业务节点与协作",
    scope: "评估 tldraw/自研 Canvas，支持自定义节点、连线、权限、评论、多人协作和版本记录。",
    owner: "前端/产品",
    evidence: "技术选型 Demo、节点 schema、协作和保存方案。",
  },
  {
    phase: "P3 AI 工作流",
    goal: "产品助理",
    scope: "接入产品品审、竞品分析、UI 流程、视频脚本、知识库问答和资料缺口自动提示。",
    owner: "产品/AI",
    evidence: "Prompt 包、RAG 知识库、AI 生成节点和人工确认记录。",
  },
  {
    phase: "P4 团队产品 OS",
    goal: "内部长期使用",
    scope: "权限、评论、任务、文件入库、报告导出、Figma/素材库/NAS/CRM 或 ERP 集成。",
    owner: "产品/IT/管理",
    evidence: "团队试点、项目复盘、真实报价前会议使用记录。",
  },
];

const matureProductPatterns = [
  {
    id: "canvas-engine",
    pattern: "可扩展无限画布",
    sourceProducts: "tldraw",
    matureMove: "自定义 shapes、tools、bindings、多人协作、运行时 API 和 AI 画布能力。",
    winnsenFeature: "产品卡、客户需求、品审点、UI 流程、素材台账和视频脚本都作为业务节点。",
    tonight: "固化 Winnsen 节点 schema、启动器和报告表格，暂不重写画布引擎。",
    proof: "能一键生成产品设计冲刺和报价前评审任务包。",
  },
  {
    id: "quick-whiteboard",
    pattern: "低门槛白板表达",
    sourceProducts: "Excalidraw",
    matureMove: "轻量草图、箭头批注、图库、开放 JSON/PNG/SVG 导出和低学习成本。",
    winnsenFeature: "销售、产品、结构和 UI 可以快速标注客户安装场景、柜体差异和屏幕流程。",
    tonight: "把导出、报告、搜索和任务生成做得更像真实评审工具。",
    proof: "生成评审包里能看到参考、路线、任务、资料和视频计划。",
  },
  {
    id: "knowledge-workspace",
    pattern: "文档、画布、表格融合",
    sourceProducts: "AFFiNE",
    matureMove: "Docs、canvas、tables、知识库和数字资产在一个工作区里互通。",
    winnsenFeature: "产品资料库、客户项目库、图库模型库、知识库和评审报告互相引用。",
    tonight: "补齐仿照矩阵、今夜队列和 Winnsen 特色模块表。",
    proof: "报告和导出 Markdown 可直接说明为什么这么做。",
  },
  {
    id: "project-wiki",
    pattern: "项目、任务、Wiki 管理",
    sourceProducts: "AppFlowy",
    matureMove: "项目看板、数据库、Wiki、模板、AI 工作区和数据控制权。",
    winnsenFeature: "把报价前项目、资料缺口、负责人、交接、权限和任务推进放在同一张画布里。",
    tonight: "把 overnight run queue 做成可生成节点的执行清单。",
    proof: "今夜任务节点能生成并进入任务看板。",
  },
  {
    id: "diagram-template",
    pattern: "结构图和流程图模板",
    sourceProducts: "diagrams.net / draw.io",
    matureMove: "成熟图形库、模板、嵌入、XML/PNG/SVG 导出和企业图表协作。",
    winnsenFeature: "柜体结构、门锁路径、售后维护、安装场景、支付/API 和报价流程模板库。",
    tonight: "把图表模板作为后续开发模块，先在路线与任务中明确验收。",
    proof: "开发规格里出现图表模板与文件入库闭环。",
  },
];

const winnsenSignatureModules = [
  {
    module: "产品设计工作台",
    from: "tldraw + AppFlowy",
    feature: "型号、产品线、门数、屏幕、支付、软件、认证、应用场景和版本差异统一维护。",
    userValue: "你可以直接把新产品或客户定制项目拉成一张可评审画布。",
  },
  {
    module: "界面设计交付",
    from: "AFFiNE + Excalidraw",
    feature: "屏幕流程、异常状态、多语言、后台字段、Figma/UI 截图和视频镜头联动。",
    userValue: "UI 不只是画界面，而是和结构、软件、视频素材一起确认交付。",
  },
  {
    module: "产品品审与报价 Gate",
    from: "AppFlowy + draw.io",
    feature: "结构品审、客户资料缺口、报价可行性、风险等级、负责人和验证资料闭环。",
    userValue: "报价前先知道能不能报、缺什么、谁补、风险在哪里。",
  },
  {
    module: "图库 / 模型库 / 文件台账",
    from: "AFFiNE + diagrams.net",
    feature: "图片、结构图、PDF、STEP、GLB、UI 截图、视频素材和客户资料按产品入库。",
    userValue: "产品图、3D、结构资料和客户素材不再散落在聊天记录里。",
  },
  {
    module: "AI 视频与知识沉淀",
    from: "tldraw AI + AppFlowy AI",
    feature: "从产品卡、UI 流程、素材缺口和品审结论生成脚本、分镜、Prompt 和经验卡。",
    userValue: "让产品资料直接服务宣传视频、销售提案和下一次设计复盘。",
  },
];

const overnightRunQueue = [
  {
    slot: "22:30-23:30",
    objective: "成熟产品仿照矩阵",
    action: "把 tldraw、Excalidraw、AFFiNE、AppFlowy、draw.io 的可借鉴能力转成 Winnsen 版本。",
    acceptance: "报告、导出和画布节点里都能看到仿照来源、Winnsen 落地和风险边界。",
    owner: "Codex / 产品设计",
    status: "进行中",
  },
  {
    slot: "23:30-01:00",
    objective: "Winnsen 特色闭环",
    action: "强化产品设计、界面设计、品审、报价 Gate、素材台账、视频生成和知识库之间的连接。",
    acceptance: "至少能一键生成产品设计冲刺、报价前评审、素材视频准备和知识复盘任务包。",
    owner: "Codex / 产品设计",
    status: "待执行",
  },
  {
    slot: "01:00-02:30",
    objective: "内部试用工作台",
    action: "补齐真实产品资料导入、搜索、任务看板、报告导出和文件入库说明。",
    acceptance: "一个产品卡可以完整走到客户需求、UI、品审、素材、视频和报告。",
    owner: "Codex / 产品设计",
    status: "待执行",
  },
  {
    slot: "02:30-04:00",
    objective: "知识库与图库模型库",
    action: "整理知识卡、结构经验、素材缺口、公开等级、文件路径和模型库字段。",
    acceptance: "可以回答哪些资料已入库、哪些缺口会影响报价或视频生成。",
    owner: "Codex / 产品 / 市场",
    status: "待执行",
  },
  {
    slot: "04:00-05:30",
    objective: "开发规格与数据模型",
    action: "把业务节点、实体字段、权限角色、MVP 模块和未来技术选型写进原型。",
    acceptance: "开发同事能看懂下一步是自研还是评估 tldraw / draw.io 嵌入。",
    owner: "Codex / 前端 / 产品",
    status: "待执行",
  },
  {
    slot: "05:30-07:00",
    objective: "浏览器验收与收尾",
    action: "逐个验证新增按钮、报告、导出、搜索和节点生成，记录未完成风险。",
    acceptance: "页面无控制台错误，关键工作流能生成节点，README 有使用说明。",
    owner: "Codex",
    status: "待执行",
  },
];

const internalPilotScenarios = [
  {
    id: "pilot-product-sprint",
    scenario: "新品产品设计冲刺",
    users: "产品设计 / 结构 / UI / 市场",
    start: "选择 Residential Smart Parcel Locker 产品卡，启动产品设计冲刺。",
    output: "客户需求、整套品审、UI 流程、素材包、文件台账和视频计划。",
    pass: "30 分钟内能形成一份可开会讨论的产品评审包。",
  },
  {
    id: "pilot-quote-readiness",
    scenario: "客户项目报价前评审",
    users: "销售 / 产品 / 结构 / 管理",
    start: "启动报价前评审，查看客户项目地图、报价 Gate 和项目文件台账。",
    output: "可报价、补资料、技术评审、暂缓报价的判断和资料缺口。",
    pass: "每个客户项目都有明确下一步，不再只靠聊天记录推进。",
  },
  {
    id: "pilot-ui-handoff",
    scenario: "UI 设计交付",
    users: "UI / 软件 / 产品",
    start: "选择带屏幕的产品卡，生成 UI 流程和视频计划。",
    output: "屏幕入口、关键步骤、异常状态、UI 检查点和视频镜头。",
    pass: "UI 与软件能基于同一张流程卡确认范围和异常状态。",
  },
  {
    id: "pilot-asset-library",
    scenario: "图库模型库入库",
    users: "市场 / 产品 / 结构",
    start: "生成素材需求包和文件入库台账，检查公开等级与缺口。",
    output: "图片、结构图、3D、UI 截图、视频、客户资料的路径和状态。",
    pass: "能说清哪些资料已入库、哪些缺口影响报价和视频生成。",
  },
  {
    id: "pilot-knowledge-retro",
    scenario: "知识库复盘",
    users: "产品 / 结构 / 知识库管理员",
    start: "从品审问题沉淀知识卡，再生成产品路线和团队交接流程。",
    output: "可复用经验、验证方式、负责人、下一次设计检查点。",
    pass: "一次品审后的经验能被下一次产品或客户定制项目复用。",
  },
];

const internalPilotChecklist = [
  {
    gate: "打开即可理解",
    check: "首次试用者能在 10 分钟内看懂产品范围、画布节点和右侧工具区。",
    evidence: "侧栏有工作流、今夜目标、内部试用包、报告和导出入口。",
    owner: "产品设计",
    status: "P0",
  },
  {
    gate: "产品闭环可跑通",
    check: "一个产品卡能生成需求、品审、UI、素材、文件台账、视频计划和报告。",
    evidence: "产品设计冲刺按钮生成完整节点包，任务看板出现对应任务。",
    owner: "产品设计 / 结构 / UI",
    status: "P0",
  },
  {
    gate: "报价前可决策",
    check: "客户项目能生成项目地图、报价 Gate、项目文件总台账和下一步判断。",
    evidence: "报告里能看到报价结论、资料缺口和项目文件清单。",
    owner: "销售 / 产品",
    status: "P0",
  },
  {
    gate: "资料能入库",
    check: "素材包和文件台账能记录图片、结构图、3D、UI、视频、客户资料的路径和状态。",
    evidence: "缺口、待入库、待审核、已入库和公开等级可被报告引用。",
    owner: "市场 / 产品 / 结构",
    status: "P1",
  },
  {
    gate: "知识能复用",
    check: "品审问题可以沉淀为知识卡，并和产品路线、团队交接关联。",
    evidence: "知识库表能显示来源、验证方式、经验和下一步任务。",
    owner: "产品 / 知识库管理员",
    status: "P1",
  },
  {
    gate: "开发能接手",
    check: "数据模型、MVP 模块、权限角色、技术参考和验收标准足够清楚。",
    evidence: "开发规格导出后能拆成前端、后端、数据、权限和集成任务。",
    owner: "产品 / 前端 / IT",
    status: "P1",
  },
];

const internalPilotAgenda = [
  {
    time: "0-10 分钟",
    step: "定位产品和试用范围",
    activity: "选择一个 Winnsen 产品卡，说明它对应的客户场景、资料缺口和目标输出。",
    output: "确定本次会议用哪个产品或客户项目试跑。",
  },
  {
    time: "10-25 分钟",
    step: "启动核心工作流",
    activity: "点击产品设计冲刺或报价前评审，观察节点是否生成完整任务包。",
    output: "得到需求、品审、UI、素材、视频或报价 Gate 节点。",
  },
  {
    time: "25-40 分钟",
    step: "检查资料和任务",
    activity: "看任务看板、文件台账、素材缺口、知识卡和责任人是否清楚。",
    output: "形成下一步补资料、结构评审、UI 或视频任务。",
  },
  {
    time: "40-55 分钟",
    step: "导出评审包",
    activity: "打开生成评审包，确认表格覆盖产品、客户、品审、UI、素材、知识和视频。",
    output: "得到可发给内部团队的评审包。",
  },
  {
    time: "55-60 分钟",
    step: "记录试用反馈",
    activity: "按验收 Gate 标记通过、缺口和下一轮开发优先级。",
    output: "形成下一轮迭代清单。",
  },
];

const pilotSessionRecords = [
  {
    id: "session-scope",
    stage: "范围确认",
    participants: "产品设计 / 销售 / 结构 / UI / 市场",
    topic: "确认本次内部试用对象",
    decision: "以 1 个 P1 官网种子产品和 1 个报价前客户项目作为试跑对象。",
    evidence: "画布中必须有产品卡、客户需求、资料补齐台和评审包。",
    action: "产品设计在会前选定产品卡和客户项目，并重置到干净试用状态。",
    owner: "产品设计",
    due: "会前 30 分钟",
    acceptance: "会议开始时所有人看到同一个试用对象。",
  },
  {
    id: "session-material",
    stage: "资料补齐",
    participants: "产品设计 / 结构品审 / 图库模型",
    topic: "检查官网种子产品是否能转成内部资料任务",
    decision: "P1 产品必须先补齐产品资料、结构/BOM、UI/软件、图库模型、视频素材和报价认证 6 类资料。",
    evidence: "内部资料补齐台显示 60 项资料缺口和对应责任角色。",
    action: "各负责人把真实型号、文件路径、结构图和认证状态补到产品资料卡。",
    owner: "产品设计 + 结构品审",
    due: "会后 1 个工作日",
    acceptance: "P1 产品至少完成 6 类资料的负责人和文件路径。",
  },
  {
    id: "session-quote",
    stage: "报价 Gate",
    participants: "销售 / 产品 / 管理",
    topic: "判断客户项目能否进入报价",
    decision: "报价 Gate 必须给出可报价、补资料后报价、先技术评审或暂缓报价的结论。",
    evidence: "评审包里能看到项目结论、资料缺口、负责人和下一步。",
    action: "销售把待确认资料发给客户，产品同步标记影响报价的配置差异。",
    owner: "销售报价",
    due: "会后当天",
    acceptance: "每个客户项目都有明确下一步和责任人。",
  },
  {
    id: "session-asset-video",
    stage: "素材视频",
    participants: "市场 / 产品 / UI / 视频生成",
    topic: "确认素材库和视频生成是否能接上",
    decision: "视频脚本必须引用产品卖点、UI 流程、素材缺口和品审结论。",
    evidence: "视频计划卡、素材需求卡、文件台账和 UI 流程在评审包中可见。",
    action: "市场补齐主图、场景图、UI 截图和 30 秒视频镜头素材。",
    owner: "市场 / 视频生成",
    due: "会后 2 个工作日",
    acceptance: "能导出一份可交给 AI 视频工具的镜头和 prompt 清单。",
  },
  {
    id: "session-knowledge",
    stage: "知识复盘",
    participants: "产品 / 结构 / 知识库管理员",
    topic: "把试用结论沉淀为可复用知识",
    decision: "所有 P0/P1 问题必须进入知识卡或下一轮迭代 backlog。",
    evidence: "试用反馈、Gate 评分和迭代优先级在画布和 Markdown 中可追踪。",
    action: "知识库管理员把会议结论整理成经验卡，产品把 P0/P1 转成开发任务。",
    owner: "知识库管理员 / 产品",
    due: "会后 1 个工作日",
    acceptance: "下一次试用能直接复用这次会议的经验和行动项。",
  },
];

const pilotLaunchRecipes = [
  {
    id: "launch-source",
    step: "01",
    title: "导入真实产品种子",
    action: "生成官网资料包",
    creates: "10 个公开产品卡、品审、UI 流程和素材需求。",
    evidence: "画布出现 Winnsen 官网公开产品资料种子包。",
    owner: "产品设计",
  },
  {
    id: "launch-readiness",
    step: "02",
    title: "拆出内部资料缺口",
    action: "生成内部资料补齐台",
    creates: "产品资料、结构/BOM、UI/软件、图库模型、视频素材、报价认证 6 类责任矩阵。",
    evidence: "资料补齐台显示 60 项待补资料和责任角色。",
    owner: "产品设计 / 结构 / 市场",
  },
  {
    id: "launch-pilot",
    step: "03",
    title: "铺开 60 分钟试用包",
    action: "生成内部试用包和验收清单",
    creates: "试用场景、会议议程、P0/P1 验收 Gate。",
    evidence: "画布出现内部试用包和试用验收清单。",
    owner: "产品设计",
  },
  {
    id: "launch-session",
    step: "04",
    title: "记录会后决策",
    action: "生成会话记录和行动项",
    creates: "试用会议结论、证据、行动项、负责人和验收标准。",
    evidence: "评审包能看到试用会话记录和会后行动项。",
    owner: "产品 / 销售 / 知识库管理员",
  },
  {
    id: "launch-feedback",
    step: "05",
    title: "沉淀反馈与迭代",
    action: "生成试用反馈和迭代优先级",
    creates: "角色反馈、Gate 评分和下一轮开发 backlog。",
    evidence: "试用反馈与迭代优先级可导出 Markdown。",
    owner: "产品 / 开发",
  },
  {
    id: "launch-report",
    step: "06",
    title: "导出内部评审包",
    action: "生成评审包",
    creates: "产品、资料、品审、UI、素材、视频、会议和反馈总报告。",
    evidence: "评审包弹窗无错误，并可导出 JSON / Markdown。",
    owner: "产品设计",
  },
];

const internalTrialRolePlaybooks = [
  {
    id: "product-design",
    label: "产品设计",
    focus: "把新型号或客户定制需求拆成产品卡、版本差异、资料缺口和下一轮任务。",
    reference: "tldraw 自定义节点 + AppFlowy 项目模板",
    entry: "试用启动台 → 生成试用工作区 → 产品资料库 / 客户项目库",
    deliverable: "产品卡、客户需求、资料补齐队列、报价前决策证据。",
    acceptance: "能在 15 分钟内说明当前产品能否进入报价或样机评审。",
    prompt: "产品设计 Prompt",
    relatedNodes: [
      ["官网资料", "Winnsen 官网公开产品资料种子包"],
      ["资料补齐", "内部资料补齐台"],
      ["内部试用", "Winnsen Canvas 内部试用包"],
    ],
    tasks: ["选 1 个真实 Winnsen 产品", "补齐型号、应用场景和门数结构", "生成客户需求或报价 Gate"],
  },
  {
    id: "ui-design",
    label: "界面设计",
    focus: "把触摸屏流程、多语言、异常状态、后台字段和 UI 截图纳入同一条交付线。",
    reference: "AFFiNE 文档/画布融合 + Excalidraw 低门槛流程表达",
    entry: "界面设计 → 生成 UI 清单 → AI 工作台 / 界面设计",
    deliverable: "UI 流程卡、异常状态清单、多语言与软件字段交接。",
    acceptance: "能把取件、投递、支付、故障和后台字段讲清楚，并进入评审包。",
    prompt: "界面设计 Prompt",
    relatedNodes: [
      ["界面流程", "取件屏幕流程"],
      ["试用会话", "内部试用会话记录"],
    ],
    tasks: ["选择一个产品卡", "生成或检查 UI 流程", "把 UI 缺口写入会后行动项"],
  },
  {
    id: "product-review",
    label: "产品品审",
    focus: "围绕柜体、门板、铰链、锁控、屏幕、电控线束和维护路径做结构/产品评审。",
    reference: "draw.io 结构模板 + AppFlowy Gate 看板",
    entry: "品审模板库 → 整套品审 → 任务看板 / 评审包",
    deliverable: "P1/P2/P3 品审点、验证方式、负责人和整改证据。",
    acceptance: "能从一个产品卡直接生成结构品审清单，并看到 P1 风险。",
    prompt: "结构品审 Prompt",
    relatedNodes: [
      ["试用验收", "Winnsen Canvas 内部试用验收清单"],
      ["试用行动", "试用会后行动项"],
    ],
    tasks: ["生成整套品审清单", "确认 P1 风险是否有证据", "把问题转成行动项和知识卡"],
  },
  {
    id: "video-generation",
    label: "视频生成",
    focus: "从产品卖点、UI 流程、素材缺口和品审结论生成分镜、旁白、字幕和视频 Prompt。",
    reference: "tldraw AI 画布 + AppFlowy AI 工作区",
    entry: "视频生成 → AI 工作台 / 视频脚本 → 图库模型库",
    deliverable: "30 秒视频脚本、5 个镜头、AI 视频 Prompt 和缺失素材清单。",
    acceptance: "视频脚本不泛泛宣传，必须引用真实产品卖点、画面素材和 UI 动作。",
    prompt: "视频脚本 Prompt",
    relatedNodes: [
      ["试用反馈", "内部试用反馈记录"],
      ["迭代优先级", "内部试用后迭代优先级"],
    ],
    tasks: ["选择产品卖点", "检查素材缺口", "生成 30 秒视频脚本和 Prompt"],
  },
  {
    id: "knowledge-manager",
    label: "知识库管理",
    focus: "把会议结论、品审经验、报价 Gate、UI 交接和素材路径沉淀为可复用知识。",
    reference: "AFFiNE 知识库 + AppFlowy Wiki / 数据库",
    entry: "知识库沉淀 → 试用会话记录 → 导出 Markdown",
    deliverable: "结构经验卡、试用纪要、行动项、复盘结论和可检索标签。",
    acceptance: "下一次试用能直接复用本次结论，而不是重新翻聊天记录。",
    prompt: "知识沉淀 Prompt",
    relatedNodes: [
      ["试用会话", "内部试用会话记录"],
      ["试用反馈", "内部试用反馈记录"],
    ],
    tasks: ["导出评审包 Markdown", "把 P0/P1 结论转知识卡", "维护标签和复用场景"],
  },
  {
    id: "asset-model-library",
    label: "图库模型库",
    focus: "管理产品图、UI 截图、结构图、PDF、STEP/GLB、视频素材和公开等级。",
    reference: "AFFiNE 数字资产工作区 + Excalidraw 图库",
    entry: "图库 / 模型库 → 素材管理 → 文件入库台账",
    deliverable: "素材目录、模型文件、缺口状态、负责人、版本和审核公开等级。",
    acceptance: "客户方案、品审、视频和知识库都能引用同一套素材路径。",
    prompt: "素材整理 Prompt",
    relatedNodes: [
      ["资料补齐", "内部资料补齐台"],
      ["试用行动", "试用会后行动项"],
    ],
    tasks: ["生成素材需求包", "补齐图片/UI/结构/3D/视频路径", "导出素材库 Markdown"],
  },
];

const pilotFeedbackSignals = [
  {
    id: "feedback-onboarding",
    source: "首次打开",
    role: "销售 / 产品",
    observation: "右侧工具很多，新人需要知道先点哪个入口。",
    impact: "如果入口顺序不清楚，内部试用会变成逐个按钮猜功能。",
    response: "增加内部试用包、工作流启动器和报告作为推荐路径。",
    priority: "P0",
  },
  {
    id: "feedback-product-loop",
    source: "产品设计冲刺",
    role: "产品 / 结构 / UI",
    observation: "产品卡能生成很多节点，但需要知道哪些节点必须先审。",
    impact: "任务很多时容易丢掉 P0 Gate，影响产品评审效率。",
    response: "把产品闭环 Gate、任务看板和评审包作为试用验收证据。",
    priority: "P0",
  },
  {
    id: "feedback-quote-gate",
    source: "报价前评审",
    role: "销售 / 管理",
    observation: "报价 Gate 很有用，但需要把资料缺口和负责人明确到下一步。",
    impact: "只给结论不够，销售还需要知道补哪些资料才可报价。",
    response: "把项目文件总台账和 Gate 待确认项放进报告。",
    priority: "P0",
  },
  {
    id: "feedback-assets",
    source: "素材与模型库",
    role: "市场 / 结构",
    observation: "图库、结构图、3D、UI 截图和视频素材需要统一路径规则。",
    impact: "素材路径不统一会拖慢报价、视频生成和知识库复用。",
    response: "继续强化文件台账、公开等级、缺口状态和素材负责人。",
    priority: "P1",
  },
  {
    id: "feedback-ai-video",
    source: "AI 视频",
    role: "市场 / 产品",
    observation: "视频脚本需要直接引用产品卖点、UI 流程和素材缺口。",
    impact: "如果视频和产品资料脱节，生成内容会变成泛泛宣传。",
    response: "让视频计划节点关联产品、UI 流程、素材包和品审结论。",
    priority: "P1",
  },
];

const pilotGateScorecard = [
  {
    gate: "打开即可理解",
    score: 78,
    result: "基本通过",
    evidence: "侧栏已有工作流、今夜目标、内部试用包和反馈入口。",
    next: "增加推荐起步路径和试用说明。",
  },
  {
    gate: "产品闭环可跑通",
    score: 86,
    result: "通过",
    evidence: "产品设计冲刺可生成需求、品审、UI、素材、文件台账和视频计划。",
    next: "补充真实 Winnsen 型号和文件路径。",
  },
  {
    gate: "报价前可决策",
    score: 82,
    result: "通过",
    evidence: "报价前评审可生成客户项目地图、报价 Gate 和项目文件台账。",
    next: "把 Gate 分数和资料缺口转成责任人任务。",
  },
  {
    gate: "资料能入库",
    score: 68,
    result: "需补强",
    evidence: "已有素材包和文件台账，但真实文件路径、版本和审批状态仍需录入。",
    next: "建立公司文件夹命名规范和素材导入流程。",
  },
  {
    gate: "知识能复用",
    score: 72,
    result: "基本通过",
    evidence: "品审可沉淀知识卡，知识复盘可生成路线和交接流程。",
    next: "增加知识卡来源、适用产品线和验证结论字段。",
  },
  {
    gate: "开发能接手",
    score: 76,
    result: "基本通过",
    evidence: "已有数据模型、MVP 规格、权限角色和开源参考矩阵。",
    next: "拆成正式开发 issue、接口字段和数据库表。",
  },
];

const pilotIterationBacklog = [
  {
    id: "iteration-guided-start",
    priority: "P0",
    item: "推荐起步路径",
    why: "内部试用者需要知道先选产品、再启动工作流、再看报告。",
    owner: "产品设计",
    acceptance: "首次打开能看到一条明确的试用路线。",
  },
  {
    id: "iteration-real-winnsen-data",
    priority: "P0",
    item: "导入真实 Winnsen 产品资料",
    why: "内部试用必须用真实型号、门数、图片、结构资料和认证信息。",
    owner: "产品 / 市场",
    acceptance: "至少 10 个真实型号可从 CSV 导入并生成节点包。",
  },
  {
    id: "iteration-file-paths",
    priority: "P1",
    item: "文件路径和公开等级规范",
    why: "图库模型库、报价资料和视频素材需要统一路径与权限。",
    owner: "市场 / 结构 / IT",
    acceptance: "文件台账能按产品线、型号、文件类型和公开等级过滤。",
  },
  {
    id: "iteration-gate-tasks",
    priority: "P1",
    item: "Gate 缺口转任务",
    why: "报价 Gate 的待确认项需要自动变成负责人和截止日期。",
    owner: "销售 / 产品",
    acceptance: "每个未通过检查项都能进入任务看板。",
  },
  {
    id: "iteration-ai-review",
    priority: "P2",
    item: "AI 品审与视频 Prompt 复核",
    why: "AI 生成内容必须能追溯来源并由人工确认。",
    owner: "产品 / AI",
    acceptance: "Prompt 输出包含来源节点、人工确认状态和复核人。",
  },
];

const guidedStartSteps = [
  {
    id: "choose-track",
    order: "01",
    title: "选择试用路线",
    action: "先决定今天试产品设计、报价前评审、UI 交付、素材入库还是知识复盘。",
    tool: "内部试用包",
    result: "明确本次试用目标、参与角色和通过标准。",
    owner: "产品设计",
  },
  {
    id: "pick-product",
    order: "02",
    title: "选择产品或客户项目",
    action: "在画布中选中一个产品卡，或直接进入客户项目库生成报价前地图。",
    tool: "产品资料库 / 客户项目库",
    result: "有一个明确的试用对象，而不是空白画布。",
    owner: "产品 / 销售",
  },
  {
    id: "launch-workflow",
    order: "03",
    title: "启动核心工作流",
    action: "点击产品设计冲刺、报价前评审、UI 交付或素材视频准备。",
    tool: "工作流启动器",
    result: "自动生成需求、品审、UI、素材、文件台账、视频或 Gate 节点。",
    owner: "产品设计",
  },
  {
    id: "inspect-tasks",
    order: "04",
    title: "检查任务和资料缺口",
    action: "查看任务看板、文件入库台账、素材缺口、Gate 待确认项和知识卡。",
    tool: "任务看板 / 文件台账 / 报价 Gate",
    result: "知道谁要补什么资料、哪些风险影响报价或视频生成。",
    owner: "产品 / 市场 / 结构",
  },
  {
    id: "export-review",
    order: "05",
    title: "导出内部评审包",
    action: "点击生成评审包，检查产品、客户、品审、UI、素材、知识、视频和试用表格。",
    tool: "生成评审包",
    result: "得到一份可发给内部团队讨论的会议材料。",
    owner: "产品设计",
  },
  {
    id: "capture-feedback",
    order: "06",
    title: "记录反馈并排优先级",
    action: "生成试用反馈记录和迭代优先级，把口头意见转成下一轮 backlog。",
    tool: "试用反馈 / 迭代",
    result: "形成 P0/P1/P2 下一轮开发任务和验收标准。",
    owner: "产品 / 开发",
  },
];

const guidedStartTracks = [
  {
    track: "产品设计试用",
    firstAction: "选择产品卡 → 产品设计冲刺 → 生成评审包。",
    bestFor: "产品设计、结构、UI、市场一起评审一个新产品。",
    success: "30 分钟内形成完整产品节点包和任务看板。",
  },
  {
    track: "报价前试用",
    firstAction: "报价前评审 → 客户项目地图 → 全部报价 Gate。",
    bestFor: "销售、产品和管理判断客户项目能不能报价。",
    success: "每个项目都有报价结论、资料缺口和负责人。",
  },
  {
    track: "素材视频试用",
    firstAction: "选择产品卡 → 素材视频准备 → 文件台账 → 视频计划。",
    bestFor: "市场和产品准备宣传图、结构图、UI 截图、3D 和视频脚本。",
    success: "素材缺口、路径、公开等级和视频镜头清楚。",
  },
  {
    track: "知识复盘试用",
    firstAction: "品审问题 → 知识复盘 → 产品路线和交接流程。",
    bestFor: "产品、结构和知识库管理员沉淀可复用经验。",
    success: "品审经验能被下一次产品或客户定制复用。",
  },
];

const teamRoleCatalog = [
  {
    id: "product-design",
    role: "产品设计",
    team: "产品 / 你",
    permissions: "维护产品卡、路线图、报价 Gate、评审包和 AI Prompt。",
    inputs: "官网资料、客户需求、竞品参考、销售反馈、结构建议。",
    outputs: "产品资料包、功能边界、版本差异、评审结论和路线图。",
    handoff: "交给 UI、结构、市场、销售和管理评审。",
  },
  {
    id: "ui-design",
    role: "界面设计",
    team: "UI / 软件 / 产品",
    permissions: "维护界面流程、屏幕状态、异常流程、Figma 交付和 UI 截图。",
    inputs: "产品卡、客户需求、支付/扫码/API 规则、目标语言和品牌要求。",
    outputs: "UI 流程节点、屏幕清单、异常状态、Figma 链接和交互说明。",
    handoff: "交给软件开发、视频生成、素材入库和客户方案。",
  },
  {
    id: "product-review",
    role: "产品品审 / 结构评审",
    team: "产品 / 结构 / 质量",
    permissions: "维护品审模板、结构问题、验证方式、风险等级和整改任务。",
    inputs: "产品资料、结构图、样机照片、客户场景、认证和安装要求。",
    outputs: "P1/P2/P3 品审点、工程师问题、验证资料和结构学习卡。",
    handoff: "交给产品路线、知识库、报价 Gate 和结构整改任务。",
  },
  {
    id: "asset-library",
    role: "图库 / 模型库",
    team: "市场 / 产品 / 结构",
    permissions: "维护图片、PDF、STEP、GLB、视频、UI 截图和文件入库状态。",
    inputs: "产品拍摄、结构图、3D 模型、客户案例、UI 截图和安装场景。",
    outputs: "素材包、文件台账、缺口清单、公开等级和授权状态。",
    handoff: "交给视频生成、销售资料、知识库和评审包。",
  },
  {
    id: "video-generation",
    role: "视频生成",
    team: "市场 / AI / 产品",
    permissions: "维护分镜、旁白、封面 Prompt、视频素材需求和成片版本。",
    inputs: "产品卡、UI 流程、素材包、客户场景、卖点和品审结论。",
    outputs: "30 秒脚本、镜头列表、AI 视频 Prompt、封面 Prompt 和素材缺口。",
    handoff: "交给市场发布、销售提案、知识库和客户项目包。",
  },
  {
    id: "sales-quote",
    role: "销售 / 报价",
    team: "销售 / 产品",
    permissions: "创建客户需求、触发报价 Gate、查看资料缺口和导出客户方案包。",
    inputs: "客户项目、数量、目标价、交期、国家、付款/认证/安装要求。",
    outputs: "客户需求卡、项目包、报价前问题清单和可报价判断。",
    handoff: "交给产品设计、结构评审、软件集成和管理决策。",
  },
  {
    id: "software-integration",
    role: "软件 / 集成",
    team: "软件 / 产品",
    permissions: "维护 API、支付、后台、权限、多语言、异常状态和联调任务。",
    inputs: "客户需求、UI 流程、支付方式、第三方系统、设备状态和异常规则。",
    outputs: "API 字段表、状态机、后台截图、联调问题和软件范围确认。",
    handoff: "交给 UI、销售报价、产品品审和客户技术方案。",
  },
  {
    id: "management-review",
    role: "管理评审",
    team: "老板 / 产品负责人",
    permissions: "查看路线、Gate、风险、资料缺口、投入优先级和阶段证据。",
    inputs: "产品路线图、报价 Gate、客户机会、素材缺口、团队任务和阶段报告。",
    outputs: "优先级、立项/暂缓判断、资源分配和下一阶段目标。",
    handoff: "交给产品、销售、结构、市场和软件执行。",
  },
];

const teamHandoffStages = [
  {
    phase: "01 客户机会",
    owner: "销售 / 产品",
    trigger: "客户提出产品、数量、国家、交期、预算或定制需求。",
    deliverable: "客户需求卡、项目基本信息、目标价和交期边界。",
    next: "进入报价 Gate。",
  },
  {
    phase: "02 报价 Gate",
    owner: "产品 / 销售 / 结构 / 软件",
    trigger: "判断是否可报价、需补资料、先技术评审或暂缓报价。",
    deliverable: "Gate 节点、待确认项、资料缺口和负责人。",
    next: "进入产品资料与品审。",
  },
  {
    phase: "03 产品资料与品审",
    owner: "产品 / 结构 / 质量",
    trigger: "产品型号、结构、安装、认证或客户改动影响报价与交付。",
    deliverable: "产品卡、品审清单、结构学习卡和整改任务。",
    next: "进入 UI / 软件流程。",
  },
  {
    phase: "04 UI / 软件流程",
    owner: "UI / 软件 / 产品",
    trigger: "涉及屏幕、扫码、支付、API、后台、多语言或异常流程。",
    deliverable: "UI 流程、异常状态、API 字段表和后台截图需求。",
    next: "进入素材与视频准备。",
  },
  {
    phase: "05 素材 / 文件入库",
    owner: "市场 / 产品 / 结构",
    trigger: "需要产品图、结构图、3D 模型、UI 截图、客户案例或视频镜头。",
    deliverable: "素材包、文件台账、缺口清单、公开等级和授权状态。",
    next: "进入视频与方案包。",
  },
  {
    phase: "06 视频 / 客户方案",
    owner: "市场 / 产品 / 销售",
    trigger: "需要给客户、代理商或内部会议说明产品方案。",
    deliverable: "视频脚本、镜头 Prompt、客户方案 Markdown 和评审包。",
    next: "进入知识库复盘。",
  },
  {
    phase: "07 知识库复盘",
    owner: "产品 / 知识库管理员",
    trigger: "项目结束、报价失败、样机评审或客户反馈后。",
    deliverable: "知识卡、复用经验、下一次检查点和资料模板。",
    next: "回到产品路线和项目模板。",
  },
];

const dataModelCatalog = [
  {
    id: "workspace",
    entity: "Workspace",
    purpose: "保存一个 Winnsen 产品画布工作区。",
    fields: "id, title, projectType, owner, nodes, links, view, savedAt, version",
    owner: "产品 / 前端",
    storage: "localStorage 原型；正式版可用 Postgres + object storage。",
    acceptance: "导入导出 JSON 后节点、连线、位置、缩放和选中状态保持一致。",
  },
  {
    id: "canvas-node",
    entity: "CanvasNode",
    purpose: "统一承载产品、需求、流程、品审、知识、素材、视频和规格节点。",
    fields: "id, type, title, subtitle, status, badge, x, y, specs, modules, tasks, details",
    owner: "前端 / 产品",
    storage: "节点表 + JSONB 扩展字段。",
    acceptance: "新增、编辑、拖拽、搜索、筛选、导出和报告都能识别节点。",
  },
  {
    id: "product",
    entity: "ProductProfile",
    purpose: "记录 Winnsen 产品型号和可报价资料。",
    fields: "model, line, applications, doorCount, screen, payment, software, certifications, material, image",
    owner: "产品设计",
    storage: "产品资料库表，可从 CSV / ERP / 官网资料导入。",
    acceptance: "能按产品线筛选、生成产品卡、品审、UI、素材和视频节点。",
  },
  {
    id: "customer-project",
    entity: "CustomerProject",
    purpose: "记录报价前客户机会和项目版本。",
    fields: "customerName, region, quantity, targetPrice, dueDate, requirements, changeRequests, risks, requiredMaterials",
    owner: "销售 / 产品",
    storage: "客户项目表，后续可对接 CRM。",
    acceptance: "能一键生成需求卡、项目包、报价 Gate 和文件总台账。",
  },
  {
    id: "quote-gate",
    entity: "QuoteGate",
    purpose: "判断项目是否可报价、需补资料或先技术评审。",
    fields: "projectId, score, decision, checks, missing, owners, evidence, createdAt",
    owner: "产品 / 销售 / 结构",
    storage: "Gate 评审表 + 检查项表。",
    acceptance: "每个客户项目能输出分数、结论、待确认项和负责人。",
  },
  {
    id: "review",
    entity: "ReviewIssue",
    purpose: "维护产品品审、结构评审和整改问题。",
    fields: "category, priority, owner, due, validation, question, impact, evidence, sourceProductId",
    owner: "产品品审 / 结构",
    storage: "品审问题表，可沉淀到知识库。",
    acceptance: "能按模板批量生成，进入任务看板和评审包。",
  },
  {
    id: "ui-flow",
    entity: "UiFlow",
    purpose: "维护屏幕流程、用户入口、异常状态和 UI 交付。",
    fields: "persona, entryPoints, flowSteps, errorStates, uiChecklist, sourceProductId",
    owner: "UI / 软件",
    storage: "UI 流程表，后续可关联 Figma 链接。",
    acceptance: "能从产品生成流程清单，并导出给 UI、软件和销售。",
  },
  {
    id: "asset-file",
    entity: "AssetFile",
    purpose: "管理产品图、结构图、3D、UI 截图和视频素材文件。",
    fields: "assetId, productId, name, kind, formats, owner, path, status, usage, visibility",
    owner: "市场 / 产品 / 结构",
    storage: "文件台账表 + NAS / OSS / 云盘路径。",
    acceptance: "能统计待补、待审核、结构/3D 文件，并导出 Markdown 台账。",
  },
  {
    id: "knowledge",
    entity: "KnowledgeCard",
    purpose: "沉淀品审经验、结构学习卡、路线图和团队流程。",
    fields: "category, sourceReviewId, sourceProductId, reusableInsight, validation, learningRows, tags",
    owner: "产品 / 知识库管理员",
    storage: "知识库表，后续可接 RAG 检索。",
    acceptance: "能从品审生成经验卡，并进入报告与知识库导出。",
  },
  {
    id: "video-plan",
    entity: "VideoPlan",
    purpose: "维护产品视频脚本、镜头、旁白和 AI Prompt。",
    fields: "duration, audience, shotPlan, voiceover, videoPrompt, sourceProductId",
    owner: "市场 / AI / 产品",
    storage: "视频计划表，可关联素材文件和成片版本。",
    acceptance: "能从产品、UI、品审和素材生成 30 秒视频脚本。",
  },
  {
    id: "permission",
    entity: "RolePermission",
    purpose: "定义角色能查看、编辑、审批和导出的数据范围。",
    fields: "roleId, canView, canEdit, canApprove, canExport, visibilityRules",
    owner: "产品 / IT",
    storage: "角色权限表。",
    acceptance: "能从团队角色矩阵映射出正式系统的账号权限。",
  },
];

const mvpDeliveryCatalog = [
  {
    id: "mvp-canvas",
    module: "无限画布核心",
    scope: "节点、连线、拖拽、缩放、搜索、筛选、保存、导入导出。",
    build: "先保留当前静态原型体验，下一步评估 React + tldraw 或自研 Canvas。",
    acceptance: "一个客户项目能在同一张画布里串起产品、需求、Gate、品审、UI、素材和视频。",
    priority: "P0",
  },
  {
    id: "mvp-product-data",
    module: "产品资料库",
    scope: "型号、产品线、门数、材料、屏幕、支付、软件、认证、模块和任务。",
    build: "CSV 导入 + 表格视图 + 产品包生成。",
    acceptance: "真实产品资料导入后能生成完整项目画布。",
    priority: "P0",
  },
  {
    id: "mvp-project-gate",
    module: "客户项目与报价 Gate",
    scope: "客户需求、区域、数量、目标价、交期、风险、资料缺口和可报价判断。",
    build: "项目模板 + Gate 打分 + Markdown 导出。",
    acceptance: "报价前会议能用 Gate 表判断下一步。",
    priority: "P0",
  },
  {
    id: "mvp-review-knowledge",
    module: "品审与知识库",
    scope: "结构品审模板、整改问题、工程师问题、验证资料和经验卡。",
    build: "模板库 + 一键沉淀知识卡 + 知识库导出。",
    acceptance: "每次品审结论能进入下次项目复用。",
    priority: "P1",
  },
  {
    id: "mvp-assets",
    module: "图库 / 模型库 / 文件台账",
    scope: "素材包、文件级清单、负责人、路径、状态、用途和公开等级。",
    build: "文件台账表 + 素材缺口 + 项目文件包。",
    acceptance: "产品图、结构图、3D、UI 截图和视频镜头不再散落在聊天记录里。",
    priority: "P1",
  },
  {
    id: "mvp-ai-video",
    module: "AI 工作台与视频生成",
    scope: "产品设计、UI、品审、素材、知识库和视频 Prompt。",
    build: "先导出 Prompt 包，后接模型 API 和知识库检索。",
    acceptance: "能从当前产品生成可用的设计/品审/视频提示词。",
    priority: "P1",
  },
  {
    id: "mvp-team",
    module: "团队协作与权限",
    scope: "角色矩阵、交接流程、任务看板、评论、审批和导出权限。",
    build: "先用角色矩阵定义权限，再开发账号和审批。",
    acceptance: "不同团队知道自己负责什么、能改什么、交给谁。",
    priority: "P2",
  },
  {
    id: "mvp-integrations",
    module: "外部集成",
    scope: "Figma、NAS/云盘、CRM、ERP、网站产品库、3D 预览和邮件/飞书提醒。",
    build: "先做导入导出和路径记录，再接真实 API。",
    acceptance: "关键资料能从外部系统进入画布并被报告引用。",
    priority: "P3",
  },
];

const workflowLauncherCatalog = [
  {
    id: "product-sprint",
    title: "产品设计冲刺",
    owner: "产品设计",
    trigger: "选中一个产品卡后启动。",
    creates: "客户需求、整套品审、UI 流程、素材包、文件台账和视频计划。",
    outcome: "把一个产品快速变成可评审、可分工、可出方案的完整画布。",
    priority: "P0",
  },
  {
    id: "quote-readiness",
    title: "报价前评审",
    owner: "销售 / 产品",
    trigger: "客户项目进入报价前，资料和风险还不清楚时启动。",
    creates: "客户项目地图、全部报价 Gate、客户项目文件总台账。",
    outcome: "判断哪些项目可报价、哪些先补资料或技术评审。",
    priority: "P0",
  },
  {
    id: "ui-handoff",
    title: "UI 设计交付",
    owner: "UI / 软件 / 产品",
    trigger: "产品涉及屏幕、支付、扫码、后台、API 或多语言时启动。",
    creates: "当前产品 UI 流程、异常状态检查点和视频计划。",
    outcome: "给 UI 和软件一份可交接的屏幕流程清单。",
    priority: "P1",
  },
  {
    id: "asset-video",
    title: "素材视频准备",
    owner: "市场 / 产品 / AI",
    trigger: "需要产品图、结构图、3D、UI 截图或 30 秒产品视频时启动。",
    creates: "素材需求包、文件入库台账、视频脚本和镜头 Prompt。",
    outcome: "把素材缺口、负责人、路径和视频脚本放到同一个画布。",
    priority: "P1",
  },
  {
    id: "knowledge-retro",
    title: "知识复盘",
    owner: "产品 / 知识库管理员",
    trigger: "品审结束、项目复盘或客户反馈后启动。",
    creates: "批量知识卡、产品路线图、团队交接流程。",
    outcome: "把评审结论沉淀成下次项目能复用的经验。",
    priority: "P1",
  },
  {
    id: "delivery-planning",
    title: "开发规划",
    owner: "产品 / 前端 / IT",
    trigger: "准备把原型推进到真实内部系统时启动。",
    creates: "开源参考图谱、数据模型总览、MVP 开发规格、团队角色矩阵。",
    outcome: "形成可交给开发评估的产品范围、数据结构和验收标准。",
    priority: "P2",
  },
];

const reviewTemplateLibrary = [
  {
    id: "cabinet-sheet-metal",
    title: "柜体钣金与外观",
    category: "钣金/外观",
    priority: "P1",
    owner: "结构工程师",
    due: "样机前",
    summary: "检查柜体大面变形、折弯孔位、喷涂厚度、外露螺丝和边角保护。",
    risk: "大面变形、孔位靠近折弯线、喷涂后门缝和锁舌受影响，会直接影响外观和装配稳定性。",
    action: "让结构工程师标出加强筋/翻边/焊接/铆接/螺丝位置，并建立喷涂前后关键间隙检查点。",
    validation: "样机拍正面/侧面/门缝照片，记录喷涂前后门缝、屏幕压边、锁舌啮合变化。",
    question: "哪些外观面不能露螺丝或焊痕？大门板是否需要翻边、压筋、内加强或自定位结构？",
    evidence: ["结构图局部", "喷涂样板", "门缝照片", "装配检查表"],
  },
  {
    id: "door-hinge-lock",
    title: "门板/铰链/锁具",
    category: "门板/铰链/锁具",
    priority: "P1",
    owner: "结构工程师",
    due: "本周",
    summary: "检查门板下垂、铰链调节、锁舌啮合、应急开锁和锁具快速更换。",
    risk: "门缝不一致、门板下垂或锁舌啮合偏差，会导致客户第一印象差、开门失败和售后返工。",
    action: "建立门板、铰链、锁扣三件套安装基准，确认可调结构和批量检查方式。",
    validation: "连续开关门测试，记录门缝、锁舌啮合、开门角度、碰撞点和锁具拆换时间。",
    question: "门板、铰链、锁扣是否有可调结构来保证批量门缝一致？断电或锁坏时怎么应急开启？",
    evidence: ["门板局部图", "铰链安装图", "锁具规格", "开门测试视频"],
  },
  {
    id: "operation-panel",
    title: "屏幕/扫码/摄像头操作区",
    category: "屏幕/操作区",
    priority: "P1",
    owner: "产品/结构",
    due: "样机前",
    summary: "检查屏幕安装、黑边遮盖、扫码/摄像头角度、线束出口和可维护空间。",
    risk: "屏幕黑边、触控高度、扫码角度和线束出口处理不好，会影响用户操作、维修和产品质感。",
    action: "把操作区定义成可预装、可替换模块，明确屏幕、扫码器、摄像头、读卡器和线束接口。",
    validation: "用身高/视角/扫码距离做操作测试，拆装一次操作区模块并记录工具和耗时。",
    question: "操作区是否能做成独立预装模块，现场售后是否能整块替换？扫码器和摄像头视角是否覆盖真实用户动作？",
    evidence: ["操作区爆炸图", "UI 截图", "扫码测试", "维修拆装照片"],
  },
  {
    id: "electronics-wiring",
    title: "电控板/电源/线束",
    category: "电控/线束",
    priority: "P2",
    owner: "电子/结构",
    due: "样机联调",
    summary: "检查主板、电源、锁控板、线束编号、防呆插头、固定点、余量和防夹路径。",
    risk: "线束无编号、没有固定点或穿过门铰链/锐边，会造成装配慢、误插、夹线和售后定位困难。",
    action: "建立线束路由图，把强弱电隔离、扎线点、检修余量和防呆接口放进版本资料。",
    validation: "做一次整机拆装和通电联调，记录误插风险、线束干涉点、热源附近路径和维护方向。",
    question: "线束是否有编号、防呆插头、固定点、余量和防夹路径？电源和锁控板能否独立拆换？",
    evidence: ["线束图", "接口编号表", "电控安装板", "通电测试记录"],
  },
  {
    id: "assembly-service",
    title: "装配顺序与售后维护",
    category: "装配/售后",
    priority: "P2",
    owner: "结构/生产",
    due: "试产前",
    summary: "检查是否可同向装配、减少翻面、统一螺丝、减少盲装，并保证核心模块可快拆。",
    risk: "装配动作如果依赖翻柜、盲装、频繁换工具或后期调锁，量产速度和一致性都会受影响。",
    action: "把门模块、操作区、电控托盘、线束分支做成预装模块，列出总装顺序和检查点。",
    validation: "做一轮试装计时，记录工具切换次数、翻转次数、返工点、调门缝耗时和维修拆装路径。",
    question: "哪些零件可以先线下预装再整块装入柜体？哪些装配动作最容易慢、错、返工或需要调试？",
    evidence: ["装配流程表", "试装视频", "工具清单", "售后拆装记录"],
  },
  {
    id: "environment-compliance",
    title: "使用环境与合规资料",
    category: "环境/认证",
    priority: "P2",
    owner: "产品/质量",
    due: "报价前",
    summary: "检查户外防水、冷藏排水、散热、防倾倒、电源安全、食品/药品/电气认证资料。",
    risk: "环境条件和认证资料不清，会导致报价偏差、客户安装风险和后期整改成本。",
    action: "按客户国家、安装环境和产品线建立资料清单，标注需要供应商或测试机构确认的项目。",
    validation: "对照客户场景复核 IP 等级、温控、散热、电源安全、认证证书和安装约束。",
    question: "目标市场需要哪些电气、制冷、食品/药品或支付相关认证？户外款的排水、进线、防倾倒是否明确？",
    evidence: ["客户场景", "认证清单", "测试报告", "安装要求"],
  },
];

const reviewDimensions = [
  "模块划分：柜体、门模块、铰链、锁具、操作区、电控板、线束、底座、维护门是否边界清晰。",
  "钣金与外观：大面变形、门缝、喷涂厚度、外露螺丝、折弯孔位、边角保护。",
  "门板/铰链/锁具：门板下垂、锁舌啮合、应急开锁、快速更换、开门角度和碰撞风险。",
  "屏幕/操作区：屏幕安装方式、黑边遮盖、公差、扫码器/摄像头角度、线束出口和维修空间。",
  "装配顺序：是否可同向装配、是否减少翻面、是否统一螺丝、是否有自定位和防呆。",
  "维护与售后：锁、屏幕、电源、锁控板、打印机、冷藏系统是否能独立拆换。",
];

const engineerQuestions = [
  "门板、铰链、锁扣是否有可调结构来保证批量门缝一致？",
  "喷涂厚度是否会影响锁舌啮合、屏幕压边、门缝和铰链转动？",
  "操作区是否能做成独立预装模块，现场售后是否能整块替换？",
  "线束是否有编号、防呆插头、固定点、余量和防夹路径？",
  "断电、锁坏、网络异常时的应急开门路径是否明确？",
];

const workspaceData = loadWorkspace();
let nodes = workspaceData.nodes;
let links = workspaceData.links;
let canvasRenderFrame = 0;
let viewPersistTimer = 0;

const state = {
  offsetX: workspaceData.view?.offsetX ?? 0,
  offsetY: workspaceData.view?.offsetY ?? 0,
  scale: workspaceData.view?.scale ?? 1,
  selectedId: workspaceData.view?.selectedId ?? "product-parcel",
  dragging: null,
  panning: null,
  focus: "all",
  search: "",
  catalogLine: "all",
};

const viewport = document.getElementById("viewport");
const stage = document.getElementById("stage");
const grid = document.querySelector(".canvas-grid");
const selectionTitle = document.getElementById("selectionTitle");
const selectionType = document.getElementById("selectionType");
const selectionBody = document.getElementById("selectionBody");
const issueList = document.getElementById("issueList");
const videoBrief = document.getElementById("videoBrief");
const zoomLabel = document.getElementById("zoomLabel");
const reportModal = document.getElementById("reportModal");
const reportContent = document.getElementById("reportContent");
const commandModal = document.getElementById("commandModal");
const commandList = document.getElementById("commandList");
const commandSearchInput = document.getElementById("commandSearchInput");
const commandSummary = document.getElementById("commandSummary");
const statusText = document.getElementById("statusText");
const taskBoard = document.getElementById("taskBoard");
const taskSummary = document.getElementById("taskSummary");
const promptOutput = document.getElementById("promptOutput");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadWorkspace() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !Array.isArray(saved.nodes) || !Array.isArray(saved.links)) {
      throw new Error("Invalid workspace");
    }
    return {
      nodes: hydrateNodes(saved.nodes),
      links: saved.links,
      view: saved.view || null,
    };
  } catch {
    return {
      nodes: clone(defaultNodes),
      links: clone(defaultLinks),
      view: null,
    };
  }
}

function hydrateNodes(savedNodes) {
  return savedNodes.map((node) => {
    const defaults = defaultNodes.find((item) => item.id === node.id) || {};
    return {
      ...defaults,
      ...node,
      modules: node.modules || defaults.modules || [],
      tasks: node.tasks || defaults.tasks || [],
      category: node.category || defaults.category,
      owner: node.owner || defaults.owner,
      due: node.due || defaults.due,
      reviewTemplate: node.reviewTemplate || defaults.reviewTemplate,
      validation: node.validation || defaults.validation,
      question: node.question || defaults.question,
      impact: node.impact || defaults.impact,
      evidence: node.evidence || defaults.evidence || [],
      sourceReviewId: node.sourceReviewId || defaults.sourceReviewId,
      sourceProductId: node.sourceProductId || defaults.sourceProductId,
      reusableInsight: node.reusableInsight || defaults.reusableInsight,
      learningRows: node.learningRows || defaults.learningRows || [],
      persona: node.persona || defaults.persona,
      entryPoints: node.entryPoints || defaults.entryPoints || [],
      flowSteps: node.flowSteps || defaults.flowSteps || [],
      errorStates: node.errorStates || defaults.errorStates || [],
      uiChecklist: node.uiChecklist || defaults.uiChecklist || [],
      shotPlan: node.shotPlan || defaults.shotPlan || [],
      voiceover: node.voiceover || defaults.voiceover,
      videoPrompt: node.videoPrompt || defaults.videoPrompt,
      audience: node.audience || defaults.audience,
      duration: node.duration || defaults.duration,
      customerName: node.customerName || defaults.customerName,
      region: node.region || defaults.region,
      market: node.market || defaults.market,
      requestType: node.requestType || defaults.requestType,
      quantity: node.quantity || defaults.quantity,
      targetPrice: node.targetPrice || defaults.targetPrice,
      dueDate: node.dueDate || defaults.dueDate,
      requirements: node.requirements || defaults.requirements || [],
      changeRequests: node.changeRequests || defaults.changeRequests || [],
      versionRows: node.versionRows || defaults.versionRows || [],
      model: node.model || defaults.model,
      line: node.line || defaults.line,
      applications: node.applications || defaults.applications,
      doorCount: node.doorCount || defaults.doorCount,
      screen: node.screen || defaults.screen,
      payment: node.payment || defaults.payment,
      software: node.software || defaults.software,
      certifications: node.certifications || defaults.certifications,
      material: node.material || defaults.material,
      assetType: node.assetType || defaults.assetType,
      relatedProduct: node.relatedProduct || defaults.relatedProduct,
      usage: node.usage || defaults.usage,
      formats: node.formats || defaults.formats || [],
      tags: node.tags || defaults.tags || [],
      storagePath: node.storagePath || defaults.storagePath,
      assetOwner: node.assetOwner || defaults.assetOwner,
      assetVersion: node.assetVersion || defaults.assetVersion,
      source: node.source || defaults.source,
      approvalStatus: node.approvalStatus || defaults.approvalStatus,
      requiredAssets: node.requiredAssets || defaults.requiredAssets || [],
      missingAssets: node.missingAssets || defaults.missingAssets || [],
      fileRows: node.fileRows || defaults.fileRows || [],
    };
  });
}

function persistWorkspace(message = "已保存") {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      nodes,
      links,
      view: {
        offsetX: state.offsetX,
        offsetY: state.offsetY,
        scale: state.scale,
        selectedId: state.selectedId,
      },
      savedAt: new Date().toISOString(),
    }),
  );
  setStatus(message);
}

function setStatus(message) {
  statusText.textContent = message;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getSelectedNode() {
  return nodes.find((node) => node.id === state.selectedId) || nodes[0];
}

function classForNode(node) {
  return {
    product: "product-node",
    brief: "brief-node",
    flow: "flow-node",
    review: "review-node",
    knowledge: "knowledge-node",
    video: "video-node",
    asset: "asset-node",
  }[node.type];
}

function labelForNode(node) {
  return {
    product: "产品卡",
    brief: "需求卡",
    flow: "界面流程",
    review: "品审点",
    knowledge: "知识卡",
    video: "分镜卡",
    asset: "素材库",
  }[node.type];
}

function visibleNodes() {
  return nodes.filter((node) => {
    const focusMatch = state.focus === "all" || node.type === state.focus;
    const keyword = state.search.trim().toLowerCase();
    const searchMatch = !keyword || searchableNodeText(node).includes(keyword);
    return focusMatch && searchMatch;
  });
}

function searchableNodeText(node) {
  return [
    node.title,
    node.subtitle,
    node.status,
    node.model,
    node.line,
    node.applications,
    node.doorCount,
    node.screen,
    node.payment,
    node.software,
    node.certifications,
    node.material,
    node.assetType,
    node.relatedProduct,
    node.usage,
    node.storagePath,
    node.assetOwner,
    node.assetVersion,
    node.source,
    node.sourceUrl,
    node.sourceRepo,
    node.referenceProduct,
    node.phase,
    node.goal,
    node.buildScope,
    node.roleName,
    node.team,
    node.permissions,
    node.inputs,
    node.outputs,
    node.handoff,
    node.entityName,
    node.fields,
    node.storage,
    node.acceptance,
    node.moduleName,
    node.scope,
    node.build,
    node.workflowId,
    node.workflowOwner,
    node.trigger,
    node.creates,
    node.outcome,
    node.pattern,
    node.sourceProducts,
    node.matureMove,
    node.winnsenFeature,
    node.tonight,
    node.proof,
    node.signatureModule,
    node.slot,
    node.objective,
    node.action,
    node.acceptance,
    node.scenario,
    node.users,
    node.start,
    node.pass,
    node.gate,
    node.check,
    node.evidence,
    node.time,
    node.step,
    node.activity,
    node.observation,
    node.impact,
    node.response,
    node.score,
    node.result,
    node.next,
    node.priority,
    node.item,
    node.why,
    node.order,
    node.tool,
    node.track,
    node.firstAction,
    node.bestFor,
    node.success,
    node.approvalStatus,
    node.category,
    node.owner,
    node.due,
    node.reviewTemplate,
    node.validation,
    node.question,
    node.impact,
    node.sourceReviewId,
    node.sourceProductId,
    node.reusableInsight,
    node.persona,
    node.voiceover,
    node.videoPrompt,
    node.audience,
    node.duration,
    node.customerName,
    node.region,
    node.market,
    node.requestType,
    node.quantity,
    node.targetPrice,
    node.dueDate,
    ...(node.specs || []),
    ...(node.modules || []),
    ...(node.requirements || []),
    ...(node.changeRequests || []),
    ...(node.versionRows || []).flat(),
    ...(node.entryPoints || []),
    ...(node.flowSteps || []),
    ...(node.errorStates || []),
    ...(node.uiChecklist || []),
    ...(node.shotPlan || []),
    ...(node.formats || []),
    ...(node.tags || []),
    ...(node.requiredAssets || []),
    ...(node.missingAssets || []),
    ...(node.fileRows || []).flatMap((row) => (Array.isArray(row) ? row : Object.values(row || {}))),
    ...(node.evidence || []),
    ...(node.learningRows || []).flat(),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function statusPriority(status) {
  const normalized = String(status || "").toUpperCase();
  if (normalized.includes("P0")) return "P0";
  if (normalized.includes("P1")) return "P1";
  if (normalized.includes("P2")) return "P2";
  return "P3";
}

function renderCanvas() {
  const shown = visibleNodes();
  if (shown.length && !shown.some((node) => node.id === state.selectedId)) {
    state.selectedId = shown[0].id;
  }
  const shownIds = new Set(shown.map((node) => node.id));
  stage.innerHTML = "";

  links.forEach(([fromId, toId]) => {
    if (!shownIds.has(fromId) || !shownIds.has(toId)) return;
    const from = nodes.find((node) => node.id === fromId);
    const to = nodes.find((node) => node.id === toId);
    if (!from || !to) return;
    const x1 = from.x + 290;
    const y1 = from.y + 80;
    const x2 = to.x;
    const y2 = to.y + 80;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const connector = document.createElement("div");
    connector.className = "connector";
    connector.style.left = `${x1}px`;
    connector.style.top = `${y1}px`;
    connector.style.width = `${length}px`;
    connector.style.transform = `rotate(${angle}deg)`;
    stage.appendChild(connector);
  });

  shown.forEach((node) => {
    const card = document.createElement("article");
    card.className = `node ${classForNode(node)} ${node.id === state.selectedId ? "selected" : ""}`;
    card.style.left = `${node.x}px`;
    card.style.top = `${node.y}px`;
    card.dataset.id = node.id;
    card.innerHTML = nodeHtml(node);
    stage.appendChild(card);
  });

  applyTransform();
}

function scheduleCanvasRender() {
  if (canvasRenderFrame) return;
  canvasRenderFrame = requestAnimationFrame(() => {
    canvasRenderFrame = 0;
    renderCanvas();
  });
}

function scheduleViewPersist(message = "已保存视图") {
  clearTimeout(viewPersistTimer);
  viewPersistTimer = setTimeout(() => {
    persistWorkspace(message);
  }, 300);
}

function render() {
  renderCanvas();
  renderInspector();
  renderTasks();
  renderCounts();
  renderPilotLaunchTools();
  renderRolePlaybookTools();
  renderTrialAcceptanceTools();
  renderLiveFeedbackTools();
  renderMorningBriefTools();
  renderExecutionDispatchTools();
  renderCatalogs();
  renderOfficialSeedTools();
  renderReadinessTools();
  renderAssetTools();
  renderReviewTemplates();
  renderBriefTools();
  renderCustomerProjectTools();
  renderQuoteGateTools();
  renderKnowledgeTools();
  renderUiFlowTools();
  renderFileLedgerTools();
  renderRoadmapTools();
  renderTeamWorkflowTools();
  renderDeliverySpecTools();
  renderWorkflowLauncherTools();
  renderOvernightGoalTools();
  renderPilotPackTools();
  renderPilotSessionTools();
  renderGuidedStartTools();
  renderPilotFeedbackTools();
}

function nodeHtml(node) {
  const media =
    node.image
      ? `<img class="product-image" src="${escapeHtml(node.image)}" alt="${escapeHtml(node.title)}" />`
      : "";
  const specs = node.specs
    ? `<div class="spec-grid">${node.specs.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
    : "";
  const moduleRow = node.modules
    ? `<div class="module-row">${node.modules.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
    : "";
  const assets = node.assets
    ? `<div class="asset-strip">${node.assets.map((src) => `<img src="${escapeHtml(src)}" alt="素材缩略图" />`).join("")}</div>`
    : "";
  const metaPreview =
    node.type === "product" && (node.model || node.applications || node.software)
      ? `
        <div class="meta-preview">
          <span><strong>型号</strong>${escapeHtml(node.model || "待补充")}</span>
          <span><strong>场景</strong>${escapeHtml(node.applications || "待补充")}</span>
        </div>
      `
      : "";
  const assetPreview =
    node.type === "asset" && (node.assetType || node.relatedProduct || node.usage)
      ? `
        <div class="meta-preview">
          <span><strong>类型</strong>${escapeHtml(node.assetType || node.status || "素材")}</span>
          <span><strong>用途</strong>${escapeHtml(node.usage || "待补充")}</span>
          <span><strong>文件</strong>${escapeHtml(`${(node.fileRows || []).length} 项`)}</span>
          <span><strong>缺口</strong>${escapeHtml((node.missingAssets || []).join("、") || "待确认")}</span>
        </div>
      `
      : "";
  const reviewPreview =
    node.type === "review" && (node.category || node.validation)
      ? `
        <div class="meta-preview">
          <span><strong>类别</strong>${escapeHtml(node.category || "品审")}</span>
          <span><strong>验证</strong>${escapeHtml(node.validation || "待补充验证方式")}</span>
        </div>
      `
      : "";
  const knowledgePreview =
    node.type === "knowledge" && (node.category || node.reusableInsight)
      ? `
        <div class="meta-preview">
          <span><strong>类别</strong>${escapeHtml(node.category || "经验")}</span>
          <span><strong>复用</strong>${escapeHtml(node.reusableInsight || "待补充复用方式")}</span>
        </div>
      `
      : "";
  const briefPreview =
    node.type === "brief"
      ? `
        <div class="meta-preview">
          <span><strong>客户</strong>${escapeHtml(node.customerName || "待补充")}</span>
          <span><strong>版本</strong>${escapeHtml(node.requestType || node.status || "需求")}</span>
        </div>
        <div class="brief-preview">
          ${(node.requirements || [])
            .slice(0, 4)
            .map((item) => `<span>${escapeHtml(item)}</span>`)
            .join("")}
        </div>
      `
      : "";
  const flowPreview =
    node.type === "flow" && (node.flowSteps?.length || node.errorStates?.length)
      ? `
        <div class="flow-preview">
          ${(node.flowSteps || [])
            .slice(0, 4)
            .map((item, index) => `<span><strong>${String(index + 1).padStart(2, "0")}</strong>${escapeHtml(item)}</span>`)
            .join("")}
        </div>
      `
      : "";
  const videoPreview =
    node.type === "video" && node.shotPlan?.length
      ? `
        <div class="shot-preview">
          ${node.shotPlan
            .slice(0, 4)
            .map((item) => `<span>${escapeHtml(item)}</span>`)
            .join("")}
        </div>
      `
      : "";

  return `
    <div class="node-head">
      <div>
        <h3>${escapeHtml(node.title)}</h3>
        <p>${escapeHtml(node.subtitle)}</p>
      </div>
      <span class="badge ${escapeHtml(node.badge)}">${escapeHtml(node.status)}</span>
    </div>
    ${media}
    <div class="node-body">
      ${metaPreview}
      ${assetPreview}
      ${reviewPreview}
      ${knowledgePreview}
      ${briefPreview}
      ${flowPreview}
      ${videoPreview}
      ${specs}
      ${moduleRow}
      ${assets}
    </div>
  `;
}

function applyTransform() {
  const transform = `translate(${state.offsetX}px, ${state.offsetY}px) scale(${state.scale})`;
  stage.style.transform = transform;
  grid.style.transform = transform;
  grid.style.backgroundSize = `${32 * state.scale}px ${32 * state.scale}px`;
  zoomLabel.textContent = `${Math.round(state.scale * 100)}%`;
}

function renderInspector() {
  const selected = getSelectedNode();
  selectionTitle.textContent = selected.title;
  selectionType.textContent = labelForNode(selected);
  const details = selected.details || [
    ["状态", `${selected.status} · ${selected.subtitle}`],
    ["下一步", "补充产品图片、结构图、UI 截图和客户场景。"],
  ];
  const detailCards = details
    .map(
      ([title, body]) => `
        <div class="detail-card">
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(body)}</p>
        </div>
      `,
    )
    .join("");
  const productFields =
    selected.type === "product"
      ? `
        <div class="field-pair">
          <label class="field">
            <span>型号</span>
            <input name="model" value="${escapeHtml(selected.model || "")}" />
          </label>
          <label class="field">
            <span>产品线</span>
            <input name="line" value="${escapeHtml(selected.line || "")}" />
          </label>
        </div>
        <label class="field">
          <span>应用场景</span>
          <input name="applications" value="${escapeHtml(selected.applications || "")}" />
        </label>
        <label class="field">
          <span>门数 / 结构</span>
          <input name="doorCount" value="${escapeHtml(selected.doorCount || "")}" />
        </label>
        <label class="field">
          <span>屏幕 / 支付 / 软件</span>
          <input name="screen" value="${escapeHtml(selected.screen || "")}" placeholder="屏幕/扫码/打印机" />
          <input name="payment" value="${escapeHtml(selected.payment || "")}" placeholder="支付/账户/验证方式" />
          <input name="software" value="${escapeHtml(selected.software || "")}" placeholder="平台/API/系统集成" />
        </label>
        <label class="field">
          <span>材料 / 认证</span>
          <input name="material" value="${escapeHtml(selected.material || "")}" />
          <input name="certifications" value="${escapeHtml(selected.certifications || "")}" />
        </label>
      `
      : "";
  const assetFields =
    selected.type === "asset"
      ? `
        <div class="field-pair">
          <label class="field">
            <span>素材类型</span>
            <input name="assetType" value="${escapeHtml(selected.assetType || selected.status || "")}" />
          </label>
          <label class="field">
            <span>所属产品</span>
            <input name="relatedProduct" value="${escapeHtml(selected.relatedProduct || "")}" />
          </label>
        </div>
        <label class="field">
          <span>用途</span>
          <input name="usage" value="${escapeHtml(selected.usage || "")}" />
        </label>
        <label class="field">
          <span>格式</span>
          <input name="formats" value="${escapeHtml((selected.formats || []).join("，"))}" />
        </label>
        <label class="field">
          <span>素材标签</span>
          <input name="tags" value="${escapeHtml((selected.tags || []).join("，"))}" />
        </label>
        <div class="field-pair">
          <label class="field">
            <span>负责人</span>
            <input name="assetOwner" value="${escapeHtml(selected.assetOwner || "")}" />
          </label>
          <label class="field">
            <span>版本</span>
            <input name="assetVersion" value="${escapeHtml(selected.assetVersion || "")}" />
          </label>
        </div>
        <label class="field">
          <span>存储路径</span>
          <input name="storagePath" value="${escapeHtml(selected.storagePath || "")}" />
        </label>
        <div class="field-pair">
          <label class="field">
            <span>来源</span>
            <input name="source" value="${escapeHtml(selected.source || "")}" />
          </label>
          <label class="field">
            <span>审批状态</span>
            <input name="approvalStatus" value="${escapeHtml(selected.approvalStatus || "")}" />
          </label>
        </div>
        <label class="field">
          <span>必备素材</span>
          <textarea name="requiredAssets">${escapeHtml((selected.requiredAssets || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>缺口清单</span>
          <textarea name="missingAssets">${escapeHtml((selected.missingAssets || []).join("，"))}</textarea>
        </label>
      `
      : "";
  const briefFields =
    selected.type === "brief"
      ? `
        <div class="field-pair">
          <label class="field">
            <span>客户/项目</span>
            <input name="customerName" value="${escapeHtml(selected.customerName || "")}" />
          </label>
          <label class="field">
            <span>区域/市场</span>
            <input name="region" value="${escapeHtml(selected.region || "")}" />
          </label>
        </div>
        <label class="field">
          <span>应用市场</span>
          <input name="market" value="${escapeHtml(selected.market || "")}" />
        </label>
        <div class="field-pair">
          <label class="field">
            <span>需求类型</span>
            <input name="requestType" value="${escapeHtml(selected.requestType || "")}" />
          </label>
          <label class="field">
            <span>交期</span>
            <input name="dueDate" value="${escapeHtml(selected.dueDate || "")}" />
          </label>
        </div>
        <div class="field-pair">
          <label class="field">
            <span>数量</span>
            <input name="quantity" value="${escapeHtml(selected.quantity || "")}" />
          </label>
          <label class="field">
            <span>目标价/成本</span>
            <input name="targetPrice" value="${escapeHtml(selected.targetPrice || "")}" />
          </label>
        </div>
        <label class="field">
          <span>客户需求</span>
          <textarea name="requirements">${escapeHtml((selected.requirements || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>变更/差异点</span>
          <textarea name="changeRequests">${escapeHtml((selected.changeRequests || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>版本记录</span>
          <textarea name="versionRows">${escapeHtml(formatVersionRows(selected.versionRows || []))}</textarea>
        </label>
      `
      : "";
  const flowFields =
    selected.type === "flow"
      ? `
        <label class="field">
          <span>用户 / 角色</span>
          <input name="persona" value="${escapeHtml(selected.persona || "")}" />
        </label>
        <label class="field">
          <span>入口方式</span>
          <textarea name="entryPoints">${escapeHtml((selected.entryPoints || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>流程步骤</span>
          <textarea name="flowSteps">${escapeHtml((selected.flowSteps || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>异常状态</span>
          <textarea name="errorStates">${escapeHtml((selected.errorStates || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>界面检查点</span>
          <textarea name="uiChecklist">${escapeHtml((selected.uiChecklist || []).join("，"))}</textarea>
        </label>
      `
      : "";
  const videoFields =
    selected.type === "video"
      ? `
        <div class="field-pair">
          <label class="field">
            <span>时长</span>
            <input name="duration" value="${escapeHtml(selected.duration || "30s")}" />
          </label>
          <label class="field">
            <span>受众</span>
            <input name="audience" value="${escapeHtml(selected.audience || "客户/销售/代理商")}" />
          </label>
        </div>
        <label class="field">
          <span>镜头计划</span>
          <textarea name="shotPlan">${escapeHtml((selected.shotPlan || []).join("，"))}</textarea>
        </label>
        <label class="field">
          <span>旁白</span>
          <textarea name="voiceover">${escapeHtml(selected.voiceover || "")}</textarea>
        </label>
        <label class="field">
          <span>AI 视频 prompt</span>
          <textarea name="videoPrompt">${escapeHtml(selected.videoPrompt || "")}</textarea>
        </label>
      `
      : "";

  selectionBody.innerHTML = `
    <form class="editor-form" id="nodeEditor">
      <label class="field">
        <span>标题</span>
        <input name="title" value="${escapeHtml(selected.title)}" />
      </label>
      <label class="field">
        <span>说明</span>
        <input name="subtitle" value="${escapeHtml(selected.subtitle)}" />
      </label>
      <label class="field">
        <span>状态</span>
        <input name="status" value="${escapeHtml(selected.status)}" />
      </label>
      ${productFields}
      ${assetFields}
      ${briefFields}
      ${flowFields}
      ${videoFields}
      <label class="field">
        <span>标签 / 参数</span>
        <input name="specs" value="${escapeHtml((selected.specs || []).join("，"))}" />
      </label>
      <label class="field">
        <span>模块</span>
        <input name="modules" value="${escapeHtml((selected.modules || []).join("，"))}" />
      </label>
      <label class="field">
        <span>任务</span>
        <input name="tasks" value="${escapeHtml((selected.tasks || []).join("，"))}" />
      </label>
      <label class="field">
        <span>备注</span>
        <textarea name="note">${escapeHtml(details[0]?.[1] || "")}</textarea>
      </label>
      <div class="inspector-actions">
        <button type="submit">更新节点</button>
        <button type="button" data-action="linked-review">关联品审点</button>
        <button type="button" data-action="linked-video">生成分镜卡</button>
        <button type="button" data-action="knowledge-card">沉淀经验</button>
        <button class="danger" type="button" data-action="delete-node">删除</button>
      </div>
      <p class="editor-help">参数可用中文逗号或英文逗号分隔；更新后会保存到本机浏览器。</p>
    </form>
    ${productMetaHtml(selected)}
    ${assetMetaHtml(selected)}
    ${briefMetaHtml(selected)}
    ${reviewMetaHtml(selected)}
    ${knowledgeMetaHtml(selected)}
    ${flowMetaHtml(selected)}
    ${videoMetaHtml(selected)}
    ${detailCards}
  `;

  const issues = [
    "户外产品需统一防水等级、排水路径和线束入口检查。",
    "屏幕安装位要同步评审触控高度、维修空间和走线保护。",
    "锁控板、RFID、打印机、扫码器需进入同一版本记录。",
    "面向客户的视频素材要保留正面、45 度、开门、后台四类镜头。",
  ];
  issueList.innerHTML = issues
    .map((issue) => `<li><span class="issue-dot"></span><span>${escapeHtml(issue)}</span></li>`)
    .join("");

  const shots = videoBriefRowsForSelected(selected);
  videoBrief.innerHTML = shots
    .map(
      ([title, body]) => `
        <div class="shot">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(body)}</span>
        </div>
      `,
    )
    .join("") + `
      <div class="video-actions">
        <button type="button" data-video-action="plan">生成计划卡</button>
        <button type="button" data-video-action="prompt">填入提示词</button>
      </div>
    `;
}

function productMetaHtml(node) {
  if (node.type !== "product") return "";
  return metaPanelHtml("产品资料摘要", [
    ["型号", node.model],
    ["产品线", node.line],
    ["应用场景", node.applications],
    ["门数/结构", node.doorCount],
    ["屏幕", node.screen],
    ["支付", node.payment],
    ["软件/集成", node.software],
    ["材料", node.material],
    ["认证", node.certifications],
  ]);
}

function assetMetaHtml(node) {
  if (node.type !== "asset") return "";
  return metaPanelHtml("素材入库摘要", [
    ["类型", node.assetType || node.status],
    ["所属产品", node.relatedProduct],
    ["用途", node.usage],
    ["格式", (node.formats || []).join(" / ")],
    ["标签", (node.tags || []).join(" / ")],
    ["负责人", node.assetOwner],
    ["版本", node.assetVersion],
    ["存储路径", node.storagePath],
    ["来源", node.source],
    ["审批状态", node.approvalStatus],
    ["必备素材", (node.requiredAssets || []).join(" / ")],
    ["缺口清单", (node.missingAssets || []).join(" / ")],
  ]);
}

function briefMetaHtml(node) {
  if (node.type !== "brief") return "";
  const sourceProduct = nodes.find((item) => item.id === node.sourceProductId);
  return metaPanelHtml("客户需求摘要", [
    ["关联产品", sourceProduct?.title || node.subtitle],
    ["客户/项目", node.customerName],
    ["区域/市场", node.region],
    ["应用市场", node.market],
    ["需求类型", node.requestType],
    ["数量", node.quantity],
    ["目标价/成本", node.targetPrice],
    ["交期", node.dueDate],
    ["需求点", (node.requirements || []).join(" / ")],
    ["变更点", (node.changeRequests || []).join(" / ")],
  ]);
}

function reviewMetaHtml(node) {
  if (node.type !== "review" || !(node.validation || node.question || node.evidence?.length)) return "";
  return metaPanelHtml("品审模板摘要", [
    ["类别", node.category],
    ["负责人", node.owner],
    ["时间点", node.due],
    ["影响/风险", node.impact],
    ["验证方式", node.validation],
    ["工程师问题", node.question],
    ["所需资料", (node.evidence || []).join(" / ")],
  ]);
}

function knowledgeMetaHtml(node) {
  if (node.type !== "knowledge" || !(node.sourceReviewId || node.reusableInsight || node.learningRows?.length)) return "";
  const sourceReview = nodes.find((item) => item.id === node.sourceReviewId);
  const sourceProduct = nodes.find((item) => item.id === node.sourceProductId);
  return metaPanelHtml("知识库摘要", [
    ["类别", node.category],
    ["来源品审", sourceReview?.title || node.sourceReviewId],
    ["适用产品", sourceProduct?.title || node.subtitle],
    ["复用经验", node.reusableInsight],
    ["验证方式", node.validation],
    ["工程师问题", node.question],
    ["所需资料", (node.evidence || []).join(" / ")],
  ]);
}

function flowMetaHtml(node) {
  if (node.type !== "flow") return "";
  const sourceProduct = nodes.find((item) => item.id === node.sourceProductId);
  return metaPanelHtml("界面流程摘要", [
    ["适用产品", sourceProduct?.title || node.subtitle],
    ["用户/角色", node.persona],
    ["入口方式", (node.entryPoints || []).join(" / ")],
    ["关键步骤", (node.flowSteps || []).join(" / ")],
    ["异常状态", (node.errorStates || []).join(" / ")],
    ["检查点", (node.uiChecklist || []).join(" / ")],
  ]);
}

function videoMetaHtml(node) {
  if (node.type !== "video" || !(node.shotPlan?.length || node.voiceover || node.videoPrompt)) return "";
  const sourceProduct = nodes.find((item) => item.id === node.sourceProductId);
  return metaPanelHtml("视频计划摘要", [
    ["适用产品", sourceProduct?.title || "当前产品"],
    ["时长", node.duration || "30s"],
    ["受众", node.audience || "客户/销售/代理商"],
    ["镜头", (node.shotPlan || []).join(" / ")],
    ["旁白", node.voiceover],
    ["AI prompt", node.videoPrompt],
  ]);
}

function metaPanelHtml(title, rows) {
  const normalized = rows.map(([key, value]) => [key, value || "待补充"]);
  return `
    <div class="meta-panel">
      <strong>${escapeHtml(title)}</strong>
      ${normalized
        .map(
          ([key, value]) => `
            <div>
              <span>${escapeHtml(key)}</span>
              <p>${escapeHtml(value)}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCounts() {
  document.getElementById("productCount").textContent = nodes.filter((n) => n.type === "product").length;
  document.getElementById("briefCount").textContent = nodes.filter((n) => n.type === "brief").length;
  document.getElementById("flowCount").textContent = nodes.filter((n) => n.type === "flow").length;
  document.getElementById("issueCount").textContent = nodes.filter((n) => n.type === "review").length;
  document.getElementById("assetCount").textContent = nodes.filter((n) => n.type === "asset").length;
}

function pilotLaunchState() {
  const checks = [
    nodes.some((node) => node.type === "product" && node.source === "Winnsen 官网 Products"),
    nodes.some((node) => node.category === "资料补齐" && node.title === "内部资料补齐台"),
    nodes.some((node) => node.category === "内部试用" && node.title === "Winnsen Canvas 内部试用包") &&
      nodes.some((node) => node.category === "试用验收" && node.title === "Winnsen Canvas 内部试用验收清单"),
    nodes.some((node) => node.category === "试用会话" && node.title === "内部试用会话记录") &&
      nodes.some((node) => node.category === "试用行动" && node.title === "试用会后行动项"),
    nodes.some((node) => node.category === "试用反馈" && node.title === "内部试用反馈记录") &&
      nodes.some((node) => node.category === "迭代优先级" && node.title === "内部试用后迭代优先级"),
    nodes.some((node) => node.category === "试用启动" && node.title === "Apple 风格内部试用启动台"),
  ];
  const completed = checks.filter(Boolean).length;
  return {
    checks,
    completed,
    percent: Math.round((completed / checks.length) * 100),
  };
}

function pilotLaunchRows() {
  const launchState = pilotLaunchState();
  return pilotLaunchRecipes.map((item, index) => [
    item.step,
    item.title,
    item.action,
    item.creates,
    item.evidence,
    item.owner,
    launchState.checks[index] ? "已生成" : "待生成",
  ]);
}

function pilotLaunchNextStep() {
  const launchState = pilotLaunchState();
  const nextIndex = launchState.checks.findIndex((done) => !done);
  if (nextIndex === -1) {
    return {
      done: true,
      title: "内部试用工作区已就绪",
      action: "打开评审包或导出 Markdown 进入会议。",
      evidence: "6 步启动路径已完成，可进入真实内部试用。",
      button: "打开评审包",
    };
  }
  const item = pilotLaunchRecipes[nextIndex];
  return {
    done: false,
    index: nextIndex,
    title: `${item.step} · ${item.title}`,
    action: item.action,
    evidence: item.evidence,
    button: `执行 ${item.step}`,
  };
}

function runPilotLaunchStep(index) {
  const step = Number(index);
  if (step === 0) addOfficialProductSeedPackage();
  if (step === 1) addReadinessBoard();
  if (step === 2) {
    addInternalPilotPackage();
    addPilotAcceptanceChecklist();
  }
  if (step === 3) {
    addPilotSessionLog();
    addPilotSessionActions();
  }
  if (step === 4) {
    addPilotFeedbackLog();
    addPilotIterationBacklog();
  }
  if (step === 5) {
    addPilotLaunchMap();
    showReport();
  }
}

function renderPilotLaunchTools() {
  const pilotLaunchTools = document.getElementById("pilotLaunchTools");
  if (!pilotLaunchTools) return;
  const launchState = pilotLaunchState();
  const nextStep = pilotLaunchNextStep();
  const launchNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用启动");
  const productSeeds = nodes.filter((node) => node.type === "product" && node.source === "Winnsen 官网 Products");

  document.getElementById("pilotLaunchSummary").textContent = `${launchState.percent}%`;
  pilotLaunchTools.innerHTML = `
    <div class="pilot-launch-stat">
      <div>
        <span>完成度</span>
        <strong>${launchState.percent}%</strong>
      </div>
      <div>
        <span>产品种子</span>
        <strong>${productSeeds.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${launchNodes.length}</strong>
      </div>
    </div>
    <div class="pilot-launch-progress" aria-label="试用启动进度">
      <span style="width: ${launchState.percent}%"></span>
    </div>
    <div class="pilot-launch-next ${nextStep.done ? "is-complete" : ""}">
      <span>${nextStep.done ? "已就绪" : "下一步"}</span>
      <strong>${escapeHtml(nextStep.title)}</strong>
      <em>${escapeHtml(nextStep.action)}</em>
      <button type="button" data-launch-action="next" data-launch-step="${nextStep.done ? "report" : nextStep.index}">
        ${escapeHtml(nextStep.button)}
      </button>
    </div>
    <div class="pilot-launch-actions">
      <button type="button" data-launch-action="workspace">生成试用工作区</button>
      <button type="button" data-launch-action="meeting">生成会议闭环</button>
      <button type="button" data-launch-action="export">导出启动台</button>
    </div>
    <div class="pilot-launch-list">
      <span>推荐路径：真实产品种子 → 资料补齐 → 试用包 → 会话记录 → 反馈迭代 → 评审包。</span>
      ${pilotLaunchRecipes
        .slice(0, 4)
        .map(
          (item, index) => `
            <em>
              <strong>${escapeHtml(item.step)} · ${escapeHtml(item.title)}</strong>
              ${escapeHtml(launchState.checks[index] ? "已生成" : item.action)} · ${escapeHtml(item.owner)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function rolePlaybookState() {
  const checks = internalTrialRolePlaybooks.map((item) =>
    nodes.some((node) => node.category === "角色试用" && node.title === `${item.label}试用路线`),
  );
  const hasHub = nodes.some((node) => node.category === "角色试用" && node.title === "Winnsen 内部角色试用工作台");
  const completed = checks.filter(Boolean).length;
  return {
    checks,
    hasHub,
    completed,
    percent: Math.round(((completed + (hasHub ? 1 : 0)) / (internalTrialRolePlaybooks.length + 1)) * 100),
  };
}

function rolePlaybookRows() {
  const state = rolePlaybookState();
  return internalTrialRolePlaybooks.map((item, index) => [
    item.label,
    item.focus,
    item.reference,
    item.entry,
    item.deliverable,
    item.acceptance,
    state.checks[index] ? "已生成" : "待生成",
  ]);
}

function renderRolePlaybookTools() {
  const rolePlaybookTools = document.getElementById("rolePlaybookTools");
  if (!rolePlaybookTools) return;
  const playbookState = rolePlaybookState();

  document.getElementById("rolePlaybookSummary").textContent = `${playbookState.completed}/${internalTrialRolePlaybooks.length} 角色`;
  rolePlaybookTools.innerHTML = `
    <div class="role-playbook-stat">
      <div>
        <span>角色</span>
        <strong>${internalTrialRolePlaybooks.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${playbookState.completed}</strong>
      </div>
      <div>
        <span>完成度</span>
        <strong>${playbookState.percent}%</strong>
      </div>
    </div>
    <div class="role-playbook-actions">
      <button type="button" data-role-playbook-action="all">生成全部路线</button>
      <button type="button" data-role-playbook-action="export">导出角色手册</button>
    </div>
    <div class="role-playbook-list">
      ${internalTrialRolePlaybooks
        .map(
          (item, index) => `
            <button type="button" data-role-playbook="${escapeHtml(item.id)}">
              <strong>${escapeHtml(item.label)}</strong>
              <span>${escapeHtml(playbookState.checks[index] ? "已生成" : item.entry)}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function trialAcceptanceRows() {
  const launchState = pilotLaunchState();
  const playbookState = rolePlaybookState();
  const checks = [
    {
      gate: "成熟产品骨架",
      owner: "产品设计",
      evidence: "开源参考、成熟产品仿照矩阵和 Winnsen 特色模块齐备。",
      pass: openSourceReferenceCatalog.length >= 5 && matureProductPatterns.length >= 5 && winnsenSignatureModules.length >= 5,
    },
    {
      gate: "Apple 风格可视化",
      owner: "产品 / UI",
      evidence: "浅色磨砂面板、系统蓝主操作、顶部浮层、报告弹窗和角色路线按钮已统一。",
      pass: true,
    },
    {
      gate: "试用启动路径",
      owner: "产品设计",
      evidence: `启动台完成度 ${launchState.percent}%，6 步 recipe 覆盖资料、试用、会话、反馈和报告。`,
      pass: launchState.percent === 100,
    },
    {
      gate: "角色试用路线",
      owner: "产品 / 团队负责人",
      evidence: `角色路线 ${playbookState.completed}/${internalTrialRolePlaybooks.length}，覆盖产品、UI、品审、视频、知识库、图库模型库。`,
      pass: playbookState.completed === internalTrialRolePlaybooks.length && playbookState.hasHub,
    },
    {
      gate: "真实资料与补齐",
      owner: "产品 / 结构 / 市场",
      evidence: "官网资料种子、内部资料补齐台和责任矩阵进入画布。",
      pass:
        nodes.some((node) => node.type === "product" && node.source === "Winnsen 官网 Products") &&
        nodes.some((node) => node.category === "资料补齐" && node.title === "内部资料补齐台"),
    },
    {
      gate: "会议闭环与反馈",
      owner: "产品 / 知识库管理员",
      evidence: "试用会话、会后行动项、反馈记录和迭代优先级可追踪。",
      pass:
        nodes.some((node) => node.category === "试用会话" && node.title === "内部试用会话记录") &&
        nodes.some((node) => node.category === "试用行动" && node.title === "试用会后行动项") &&
        nodes.some((node) => node.category === "试用反馈" && node.title === "内部试用反馈记录") &&
        nodes.some((node) => node.category === "迭代优先级" && node.title === "内部试用后迭代优先级"),
    },
    {
      gate: "报告与知识库导出",
      owner: "产品 / 知识库管理员",
      evidence: "评审包、角色手册、启动台、试用包、反馈和素材/知识库 Markdown 均有导出入口。",
      pass: true,
    },
  ];
  return checks.map((item, index) => ({
    id: `gate-${index + 1}`,
    status: item.pass ? "通过" : "待补",
    ...item,
  }));
}

function trialAcceptanceState() {
  const rows = trialAcceptanceRows();
  const passed = rows.filter((row) => row.pass).length;
  return {
    rows,
    passed,
    total: rows.length,
    percent: Math.round((passed / rows.length) * 100),
  };
}

function renderTrialAcceptanceTools() {
  const trialAcceptanceTools = document.getElementById("trialAcceptanceTools");
  if (!trialAcceptanceTools) return;
  const acceptance = trialAcceptanceState();
  const acceptanceNodes = nodes.filter((node) => node.category === "试用验收中心");

  document.getElementById("trialAcceptanceSummary").textContent = `${acceptance.percent}%`;
  trialAcceptanceTools.innerHTML = `
    <div class="trial-acceptance-stat">
      <div>
        <span>通过</span>
        <strong>${acceptance.passed}</strong>
      </div>
      <div>
        <span>Gate</span>
        <strong>${acceptance.total}</strong>
      </div>
      <div>
        <span>证据</span>
        <strong>${acceptanceNodes.length}</strong>
      </div>
    </div>
    <div class="trial-acceptance-progress" aria-label="内部试用验收进度">
      <span style="width: ${acceptance.percent}%"></span>
    </div>
    <div class="trial-acceptance-actions">
      <button type="button" data-acceptance-action="workspace">生成验收工作区</button>
      <button type="button" data-acceptance-action="audit">生成验收证据</button>
      <button type="button" data-acceptance-action="export">导出验收表</button>
    </div>
    <div class="trial-acceptance-list">
      ${acceptance.rows
        .map(
          (item) => `
            <em class="${item.pass ? "is-pass" : ""}">
              <strong>${escapeHtml(item.gate)}</strong>
              ${escapeHtml(item.status)} · ${escapeHtml(item.owner)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function liveFeedbackNodes() {
  return nodes.filter((node) => node.category === "现场反馈");
}

function liveFeedbackRows() {
  return liveFeedbackNodes().map((node) => [
    node.createdAt || "待补充",
    node.feedbackRole || "待补充",
    node.feedbackScenario || "待补充",
    node.feedbackPriority || node.status || "P2",
    node.feedbackScore || "待评分",
    node.feedbackObservation || node.subtitle || "待补充",
    node.feedbackAction || "待补充",
  ]);
}

function renderLiveFeedbackTools() {
  const liveFeedbackTools = document.getElementById("liveFeedbackTools");
  if (!liveFeedbackTools) return;
  const feedback = liveFeedbackNodes();
  const urgentCount = feedback.filter((node) => ["P0", "P1"].includes(node.feedbackPriority || node.status)).length;
  const latest = feedback.slice(-4).reverse();

  document.getElementById("liveFeedbackSummary").textContent = `${feedback.length} 条`;
  liveFeedbackTools.innerHTML = `
    <div class="live-feedback-stat">
      <div>
        <span>反馈</span>
        <strong>${feedback.length}</strong>
      </div>
      <div>
        <span>P0/P1</span>
        <strong>${urgentCount}</strong>
      </div>
      <div>
        <span>角色</span>
        <strong>${internalTrialRolePlaybooks.length}</strong>
      </div>
    </div>
    <label class="live-feedback-field">
      <span>角色</span>
      <select id="liveFeedbackRoleInput">
        ${[...internalTrialRolePlaybooks.map((item) => item.label), "销售报价", "管理评审"]
          .map((role) => `<option value="${escapeHtml(role)}">${escapeHtml(role)}</option>`)
          .join("")}
      </select>
    </label>
    <label class="live-feedback-field">
      <span>场景</span>
      <select id="liveFeedbackScenarioInput">
        ${internalPilotScenarios
          .map((item) => `<option value="${escapeHtml(item.scenario)}">${escapeHtml(item.scenario)}</option>`)
          .join("")}
      </select>
    </label>
    <div class="live-feedback-grid">
      <label class="live-feedback-field">
        <span>优先级</span>
        <select id="liveFeedbackPriorityInput">
          <option value="P1">P1</option>
          <option value="P0">P0</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
      </label>
      <label class="live-feedback-field">
        <span>评分</span>
        <select id="liveFeedbackScoreInput">
          <option value="4">4 / 5</option>
          <option value="5">5 / 5</option>
          <option value="3">3 / 5</option>
          <option value="2">2 / 5</option>
          <option value="1">1 / 5</option>
        </select>
      </label>
    </div>
    <label class="live-feedback-field">
      <span>观察</span>
      <textarea id="liveFeedbackObservationInput" rows="3" placeholder="记录真实试用观察、卡点、建议或需要补齐的证据"></textarea>
    </label>
    <div class="live-feedback-actions">
      <button type="button" data-live-feedback-action="add">记录反馈</button>
      <button type="button" data-live-feedback-action="export">导出反馈</button>
    </div>
    <div class="live-feedback-list">
      ${
        latest.length
          ? latest
              .map(
                (node) => `
                  <em>
                    <strong>${escapeHtml(node.feedbackPriority || node.status)} · ${escapeHtml(node.feedbackRole || "角色")}</strong>
                    ${escapeHtml(node.feedbackObservation || node.subtitle)}
                  </em>
                `,
              )
              .join("")
          : `<span>试用时在这里记录真实反馈，生成后会进入画布、评审包和 Markdown。</span>`
      }
    </div>
  `;
}

function morningBriefDateLabel() {
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return `${tomorrow.toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })} 09:00`;
}

function morningBriefNodes() {
  return nodes.filter((node) => node.category === "明早晨会");
}

function morningBriefRiskRows() {
  const acceptance = trialAcceptanceState();
  const failedGates = acceptance.rows.filter((row) => !row.pass);
  const urgentFeedback = liveFeedbackNodes().filter((node) => ["P0", "P1"].includes(node.feedbackPriority || node.status));
  const weakScores = pilotGateScorecard.filter((item) => item.score < 80);
  const priorityMaterials = readinessProductRows().filter((row) => ["P0", "P1"].includes(row[3])).slice(0, 4);
  const rows = [
    ...failedGates.map((item) => ["P0", "验收 Gate", item.owner, `${item.gate}待补`, item.evidence]),
    ...urgentFeedback.map((node) => [
      node.feedbackPriority || node.status || "P1",
      "现场反馈",
      node.feedbackRole || "产品负责人",
      node.feedbackObservation || node.subtitle || "待补充观察",
      node.feedbackAction || "转成下一轮动作",
    ]),
    ...weakScores.map((item) => ["P1", "Gate 评分", "产品负责人", `${item.gate} · ${item.score} 分`, item.next]),
    ...priorityMaterials.map((row) => [row[3], "资料补齐", row[2], `${row[0]} · ${row[1]}`, `${row[4]} · ${row[5]}`]),
  ];

  return rows.length
    ? rows
    : [["P2", "保持节奏", "产品负责人", "暂无阻塞风险", "明早按 60 分钟试用路线继续收集真实反馈"]];
}

function morningBriefRows() {
  const acceptance = trialAcceptanceState();
  const feedback = liveFeedbackNodes();
  const risks = morningBriefRiskRows();
  const urgentRiskCount = risks.filter((row) => ["P0", "P1"].includes(row[0])).length;
  const urgentBacklog = pilotIterationBacklog.filter((item) => ["P0", "P1"].includes(item.priority));
  const highPriorityMaterials = readinessProductRows().filter((row) => ["P0", "P1"].includes(row[3]));
  return [
    ["P0", "开场对齐", "产品负责人", `明早 ${morningBriefDateLabel()} 确认试用对象和成功标准`, "团队知道今天先验证哪条路线"],
    ["P0", "风险先看", "产品 / 结构 / 市场", `${urgentRiskCount} 个 P0/P1 风险需要先处理`, "每个风险有负责人和下一步"],
    ["P1", "现场反馈复盘", "知识库管理员", `${feedback.length} 条真实现场反馈进入画布`, "口头意见转成可追踪记录和 Markdown"],
    ["P1", "验收 Gate", "产品设计", `${acceptance.passed}/${acceptance.total} 个 Gate 通过`, "确认是否可以进入第一轮内部试用"],
    ["P1", "资料补齐", "产品 / 市场", `${highPriorityMaterials.length} 个高优先资料包待补`, "图片、结构、认证、软件和素材路径有人负责"],
    ["P1", "下一轮开发", "产品 / 开发", `${urgentBacklog.length} 个 P0/P1 backlog`, "拆成 issue、负责人和验收标准"],
    ["P2", "汇报沉淀", "知识库管理员", "导出评审包、晨会包和反馈记录", "明早会议材料可直接进入知识库"],
  ];
}

function morningBriefOwnerRows() {
  return morningBriefRows().map((row) => [row[2], row[0], row[1], row[3], row[4]]);
}

function morningBriefState() {
  const acceptance = trialAcceptanceState();
  const launch = pilotLaunchState();
  const playbook = rolePlaybookState();
  const feedback = liveFeedbackNodes();
  const rows = morningBriefRows();
  const risks = morningBriefRiskRows();
  const playbookPercent = Math.round((playbook.completed / internalTrialRolePlaybooks.length) * 100);
  const readyScore = Math.min(
    100,
    Math.round(
      acceptance.percent * 0.35 +
        launch.percent * 0.2 +
        playbookPercent * 0.15 +
        Math.min(feedback.length, 3) * 5 +
        Math.min(morningBriefNodes().length, 4) * 5 +
        10,
    ),
  );
  return {
    rows,
    risks,
    feedback,
    readyScore,
    p0p1: [...rows, ...risks].filter((row) => ["P0", "P1"].includes(row[0])).length,
    generated: morningBriefNodes().length,
  };
}

function renderMorningBriefTools() {
  const morningBriefTools = document.getElementById("morningBriefTools");
  if (!morningBriefTools) return;
  const brief = morningBriefState();
  const latestRisks = brief.risks.slice(0, 4);

  document.getElementById("morningBriefSummary").textContent = `${brief.readyScore}%`;
  morningBriefTools.innerHTML = `
    <div class="morning-brief-stat">
      <div>
        <span>就绪</span>
        <strong>${brief.readyScore}%</strong>
      </div>
      <div>
        <span>P0/P1</span>
        <strong>${brief.p0p1}</strong>
      </div>
      <div>
        <span>节点</span>
        <strong>${brief.generated}</strong>
      </div>
    </div>
    <div class="morning-brief-progress" aria-label="明早晨会包就绪度">
      <span style="width: ${brief.readyScore}%"></span>
    </div>
    <div class="morning-brief-actions">
      <button type="button" data-morning-brief-action="workspace">生成晨会包</button>
      <button type="button" data-morning-brief-action="refresh">刷新证据</button>
      <button type="button" data-morning-brief-action="export">导出晨会包</button>
    </div>
    <div class="morning-brief-list">
      ${latestRisks
        .map(
          (row) => `
            <em>
              <strong>${escapeHtml(row[0])} · ${escapeHtml(row[1])}</strong>
              ${escapeHtml(row[2])}：${escapeHtml(row[3])}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function executionDueLabel(priority, index = 0) {
  const date = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const day = date.toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" });
  if (priority === "P0") return `${day} 12:00`;
  if (priority === "P1") return `${day} 18:00`;
  return `${day} +${index + 1} 天`;
}

function executionDispatchNodes() {
  return nodes.filter((node) => node.category === "执行派单");
}

function executionTaskRows() {
  const riskRows = morningBriefRiskRows()
    .filter((row) => ["P0", "P1"].includes(row[0]))
    .slice(0, 8)
    .map((row, index) => ({
      id: `risk-${index}`,
      priority: row[0],
      title: row[3],
      source: row[1],
      owner: row[2],
      due: executionDueLabel(row[0], index),
      acceptance: row[4],
      status: "待派单",
    }));
  const backlogRows = pilotIterationBacklog
    .filter((item) => ["P0", "P1"].includes(item.priority))
    .map((item, index) => ({
      id: `backlog-${item.id}`,
      priority: item.priority,
      title: item.item,
      source: "迭代 backlog",
      owner: item.owner,
      due: executionDueLabel(item.priority, index),
      acceptance: item.acceptance,
      status: "待开发",
    }));
  const sessionRows = pilotSessionRecords
    .filter((item) => item.due.includes("当天") || item.due.includes("1 个工作日") || item.due.includes("会前"))
    .map((item, index) => ({
      id: `session-${item.id}`,
      priority: index === 0 ? "P0" : "P1",
      title: item.action,
      source: `试用会话 · ${item.stage}`,
      owner: item.owner,
      due: item.due,
      acceptance: item.acceptance,
      status: "待跟进",
    }));
  const seen = new Set();
  return [...riskRows, ...backlogRows, ...sessionRows].filter((row) => {
    const key = `${row.priority}-${row.title}-${row.owner}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function executionDispatchState() {
  const rows = executionTaskRows();
  const generatedTasks = executionDispatchNodes().filter((node) => node.type === "review");
  return {
    rows,
    p0: rows.filter((row) => row.priority === "P0").length,
    p1: rows.filter((row) => row.priority === "P1").length,
    generated: generatedTasks.length,
    total: rows.length,
  };
}

function renderExecutionDispatchTools() {
  const executionDispatchTools = document.getElementById("executionDispatchTools");
  if (!executionDispatchTools) return;
  const state = executionDispatchState();
  const generatedText = state.generated ? `${state.generated}/${state.total}` : "0";

  document.getElementById("executionDispatchSummary").textContent = `${state.total} 项`;
  executionDispatchTools.innerHTML = `
    <div class="execution-dispatch-stat">
      <div>
        <span>P0</span>
        <strong>${state.p0}</strong>
      </div>
      <div>
        <span>P1</span>
        <strong>${state.p1}</strong>
      </div>
      <div>
        <span>已派</span>
        <strong>${generatedText}</strong>
      </div>
    </div>
    <div class="execution-dispatch-actions">
      <button type="button" data-execution-action="workspace">生成派单看板</button>
      <button type="button" data-execution-action="sync">同步任务</button>
      <button type="button" data-execution-action="export">导出派单</button>
    </div>
    <div class="execution-dispatch-list">
      ${state.rows
        .slice(0, 5)
        .map(
          (row) => `
            <em>
              <strong>${escapeHtml(row.priority)} · ${escapeHtml(row.owner)}</strong>
              ${escapeHtml(row.title)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReviewTemplates() {
  const reviewTemplateList = document.getElementById("reviewTemplateList");
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected.title : "当前产品";

  reviewTemplateList.innerHTML = `
    <div class="template-intro">
      <span>应用到：${escapeHtml(target)}</span>
      <button type="button" data-review-template-all="true">整套品审</button>
    </div>
    ${reviewTemplateLibrary
      .map(
        (item) => `
          <article class="review-template-card">
            <div class="template-head">
              <strong>${escapeHtml(item.title)}</strong>
              <span class="${escapeHtml(item.priority.toLowerCase())}">${escapeHtml(item.priority)}</span>
            </div>
            <p>${escapeHtml(item.summary)}</p>
            <div class="catalog-meta">
              <span>${escapeHtml(item.category)}</span>
              <span>${escapeHtml(item.owner)}</span>
            </div>
            <button type="button" data-review-template="${escapeHtml(item.id)}">添加品审点</button>
          </article>
        `,
      )
      .join("")}
  `;
}

function renderBriefTools() {
  const briefTools = document.getElementById("briefTools");
  const briefs = nodes.filter((node) => node.type === "brief");
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithBrief = new Set(briefs.map((node) => node.sourceProductId).filter(Boolean));
  const missingProducts = products.filter((node) => !productIdsWithBrief.has(node.id));
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected : productForWorkNode(selected);
  const openChanges = briefs.reduce((count, node) => count + (node.changeRequests || []).length, 0);

  document.getElementById("briefSummary").textContent = `${briefs.length} 条`;
  briefTools.innerHTML = `
    <div class="brief-stat">
      <div>
        <span>需求卡</span>
        <strong>${briefs.length}</strong>
      </div>
      <div>
        <span>变更点</span>
        <strong>${openChanges}</strong>
      </div>
    </div>
    <div class="brief-actions">
      <button type="button" data-brief-action="current">当前产品需求</button>
      <button type="button" data-brief-action="batch">批量生成</button>
      <button type="button" data-brief-action="export">导出需求</button>
    </div>
    <div class="brief-list">
      <span>${escapeHtml(target?.title || "选择产品后生成需求")}</span>
      ${(briefs.length ? briefs.slice(0, 5).map((node) => node.title) : [`待补产品 ${missingProducts.length}`])
        .map((name) => `<em>${escapeHtml(name)}</em>`)
        .join("")}
    </div>
  `;
}

function renderCustomerProjectTools() {
  const customerProjectTools = document.getElementById("customerProjectTools");
  const projects = customerProjectCatalog;
  const p1Projects = projects.filter((project) => project.priority === "P1");
  const materialGaps = projects.reduce((count, project) => count + project.requiredMaterials.length, 0);

  document.getElementById("customerProjectSummary").textContent = `${projects.length} 个项目`;
  customerProjectTools.innerHTML = `
    <div class="project-stat">
      <div>
        <span>项目模板</span>
        <strong>${projects.length}</strong>
      </div>
      <div>
        <span>P1</span>
        <strong>${p1Projects.length}</strong>
      </div>
      <div>
        <span>资料缺口</span>
        <strong>${materialGaps}</strong>
      </div>
    </div>
    <div class="project-actions">
      <button type="button" data-project-action="map">项目地图</button>
      <button type="button" data-project-action="export">导出项目</button>
    </div>
    <div class="project-list">
      ${projects
        .map((project) => {
          const product = productCatalogItemForProject(project);
          return `
            <article class="project-card">
              <div class="project-head">
                <div>
                  <strong>${escapeHtml(project.title)}</strong>
                  <span>${escapeHtml(project.customerName)} · ${escapeHtml(project.region)}</span>
                </div>
                <em class="${escapeHtml(project.priority.toLowerCase())}">${escapeHtml(project.priority)}</em>
              </div>
              <p>${escapeHtml(product?.model || project.productId)} · ${escapeHtml(project.stage)} · ${escapeHtml(project.quantity)}</p>
              <div class="catalog-meta">
                <span>${escapeHtml(project.requestType)}</span>
                <span>${escapeHtml(project.dueDate)}</span>
              </div>
              <div class="project-gaps">
                ${(project.risks || []).slice(0, 2).map((risk) => `<span>${escapeHtml(risk)}</span>`).join("")}
              </div>
              <div class="project-card-actions">
                <button type="button" data-project-brief="${escapeHtml(project.id)}">需求卡</button>
                <button type="button" data-project-package="${escapeHtml(project.id)}">项目包</button>
                <button type="button" data-project-gate="${escapeHtml(project.id)}">Gate</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function quoteGateForProject(project) {
  const item = productCatalogItemForProject(project);
  const checks = [
    {
      key: "客户场景",
      owner: "销售/产品",
      passed: Boolean(project.customerName && project.region && project.quantity),
      note: `${project.customerName} · ${project.region} · ${project.quantity}`,
    },
    {
      key: "产品适配",
      owner: "产品",
      passed: Boolean(item?.model && project.productId),
      note: `${item?.model || "待选型号"} · ${item?.line || "待选产品线"}`,
    },
    {
      key: "配置差异",
      owner: "产品/结构",
      passed: project.changeRequests.length <= 4,
      note: project.changeRequests.join(" / ") || "待补充",
    },
    {
      key: "软件/支付",
      owner: "软件/产品",
      passed: !project.risks.some((risk) => risk.includes("API") || risk.includes("支付") || risk.includes("权限字段")),
      note: project.requirements.filter((itemText) => /API|支付|RFID|权限|报表|UI|二维码|扫码/i.test(itemText)).join(" / ") || "待确认",
    },
    {
      key: "结构/安装",
      owner: "结构",
      passed: !project.risks.some((risk) => risk.includes("结构") || risk.includes("安装") || risk.includes("防撬") || risk.includes("保温")),
      note: project.risks.filter((risk) => /结构|安装|防撬|保温|冷凝水|打印机/.test(risk)).join(" / ") || "常规结构",
    },
    {
      key: "合规/认证",
      owner: "产品/质量",
      passed: !project.changeRequests.some((itemText) => /认证|合规|FCC|RoHS|温控/.test(itemText)),
      note: project.changeRequests.filter((itemText) => /认证|合规|FCC|RoHS|温控/.test(itemText)).join(" / ") || "按常规资料整理",
    },
    {
      key: "素材资料",
      owner: "市场/产品",
      passed: project.requiredMaterials.length <= 5,
      note: project.requiredMaterials.join(" / ") || "待补充",
    },
    {
      key: "交期边界",
      owner: "销售/项目",
      passed: !/本周|10 天|2 周/.test(project.dueDate) || project.priority !== "P1",
      note: project.dueDate,
    },
  ];
  const passed = checks.filter((check) => check.passed).length;
  const score = Math.round((passed / checks.length) * 100);
  const blockerCount = checks.length - passed;
  const decision =
    score >= 88
      ? "可进入报价"
      : score >= 70
        ? "补资料后报价"
        : score >= 55
          ? "先技术评审"
          : "暂缓报价";
  const badge = score >= 88 ? "green" : score >= 70 ? "amber" : "red";
  const missing = checks.filter((check) => !check.passed);
  return {
    project,
    product: item,
    checks,
    passed,
    score,
    blockerCount,
    decision,
    badge,
    missing,
  };
}

function quoteGateEvaluations() {
  return customerProjectCatalog.map(quoteGateForProject);
}

function renderQuoteGateTools() {
  const quoteGateTools = document.getElementById("quoteGateTools");
  const gates = quoteGateEvaluations();
  const quoteReady = gates.filter((gate) => gate.decision === "可进入报价").length;
  const techReview = gates.filter((gate) => gate.decision === "先技术评审" || gate.decision === "暂缓报价").length;
  const existingGateNodes = nodes.filter((node) => node.type === "review" && node.category === "报价决策门").length;

  document.getElementById("quoteGateSummary").textContent = `${gates.length} 项`;
  quoteGateTools.innerHTML = `
    <div class="quote-gate-stat">
      <div>
        <span>项目</span>
        <strong>${gates.length}</strong>
      </div>
      <div>
        <span>可报价</span>
        <strong>${quoteReady}</strong>
      </div>
      <div>
        <span>需评审</span>
        <strong>${techReview}</strong>
      </div>
    </div>
    <div class="quote-gate-actions">
      <button type="button" data-gate-action="batch">生成全部 Gate</button>
      <button type="button" data-gate-action="export">导出 Gate</button>
    </div>
    <div class="quote-gate-list">
      ${gates
        .map(
          (gate) => `
            <article class="quote-gate-card">
              <div class="quote-gate-head">
                <div>
                  <strong>${escapeHtml(gate.project.title)}</strong>
                  <span>${escapeHtml(gate.product?.model || gate.project.productId)} · ${escapeHtml(gate.project.region)}</span>
                </div>
                <em class="${escapeHtml(gate.badge)}">${gate.score}%</em>
              </div>
              <div class="quote-decision ${escapeHtml(gate.badge)}">${escapeHtml(gate.decision)} · ${gate.blockerCount} 项待确认</div>
              <div class="quote-missing">
                ${(gate.missing.length ? gate.missing.slice(0, 3) : [{ key: "报价资料", note: "可进入报价资料整理" }])
                  .map((item) => `<span><strong>${escapeHtml(item.key)}</strong>${escapeHtml(item.note)}</span>`)
                  .join("")}
              </div>
              <button type="button" data-gate-project="${escapeHtml(gate.project.id)}">生成 Gate 节点</button>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="quote-gate-foot">已生成 Gate 节点：${existingGateNodes}</div>
  `;
}

function renderKnowledgeTools() {
  const knowledgeTools = document.getElementById("knowledgeTools");
  const knowledge = nodes.filter((node) => node.type === "knowledge");
  const reviews = nodes.filter((node) => node.type === "review");
  const capturedReviewIds = new Set(knowledge.map((node) => node.sourceReviewId).filter(Boolean));
  const pendingReviews = reviews.filter((node) => !capturedReviewIds.has(node.id));
  const categoryCounts = knowledge.reduce((counts, node) => {
    const key = node.category || "通用经验";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});

  document.getElementById("knowledgeSummary").textContent = `${knowledge.length} 条`;
  knowledgeTools.innerHTML = `
    <div class="knowledge-stat">
      <div>
        <span>已沉淀</span>
        <strong>${knowledge.length}</strong>
      </div>
      <div>
        <span>待沉淀品审</span>
        <strong>${pendingReviews.length}</strong>
      </div>
    </div>
    <div class="knowledge-actions">
      <button type="button" data-knowledge-action="current">当前品审</button>
      <button type="button" data-knowledge-action="batch">批量沉淀</button>
      <button type="button" data-knowledge-action="export">导出知识库</button>
    </div>
    <div class="knowledge-tags">
      ${Object.entries(categoryCounts)
        .slice(0, 6)
        .map(([category, count]) => `<span>${escapeHtml(category)} · ${count}</span>`)
        .join("") || "<span>等待品审结论</span>"}
    </div>
  `;
}

function renderUiFlowTools() {
  const uiFlowTools = document.getElementById("uiFlowTools");
  const flows = nodes.filter((node) => node.type === "flow");
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithFlow = new Set(flows.map((node) => node.sourceProductId).filter(Boolean));
  const missingProducts = products.filter((node) => !productIdsWithFlow.has(node.id));
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected : productForWorkNode(selected);
  const flowNames = flows.slice(0, 5).map((node) => node.title);

  document.getElementById("uiFlowSummary").textContent = `${flows.length} 条`;
  uiFlowTools.innerHTML = `
    <div class="flow-stat">
      <div>
        <span>已生成</span>
        <strong>${flows.length}</strong>
      </div>
      <div>
        <span>待补产品</span>
        <strong>${missingProducts.length}</strong>
      </div>
    </div>
    <div class="flow-actions">
      <button type="button" data-flow-action="current">当前产品流程</button>
      <button type="button" data-flow-action="batch">批量生成</button>
      <button type="button" data-flow-action="export">导出 UI 清单</button>
    </div>
    <div class="flow-lane">
      <span>${escapeHtml(target?.title || "选择产品后生成流程")}</span>
      ${(flowNames.length ? flowNames : ["等待界面流程"])
        .map((name) => `<em>${escapeHtml(name)}</em>`)
        .join("")}
    </div>
  `;
}

function catalogLineOptions() {
  return [...new Set(productCatalog.map((item) => item.line).filter(Boolean))].sort();
}

function filteredProductCatalog() {
  if (state.catalogLine === "all") return productCatalog;
  return productCatalog.filter((item) => item.line === state.catalogLine);
}

function catalogCountsByLine(items = productCatalog) {
  return items.reduce((counts, item) => {
    counts[item.line] = (counts[item.line] || 0) + 1;
    return counts;
  }, {});
}

function renderCatalogInsights(items) {
  const catalogInsights = document.getElementById("catalogInsights");
  const counts = catalogCountsByLine(productCatalog);
  const visibleLines = Object.entries(counts)
    .slice(0, 6)
    .map(([line, count]) => `<span>${escapeHtml(line)} <strong>${count}</strong></span>`)
    .join("");
  const selectedText = state.catalogLine === "all" ? "全部产品线" : state.catalogLine;
  catalogInsights.innerHTML = `
    <div class="catalog-stat">
      <div><strong>${productCatalog.length}</strong><span>资料库型号</span></div>
      <div><strong>${catalogLineOptions().length}</strong><span>产品线</span></div>
      <div><strong>${items.length}</strong><span>当前筛选</span></div>
    </div>
    <div class="catalog-line-summary">
      <em>当前：${escapeHtml(selectedText)}</em>
      ${visibleLines}
    </div>
  `;
}

function renderCatalogs() {
  const productCatalogList = document.getElementById("productCatalogList");
  const assetCatalogList = document.getElementById("assetCatalogList");
  const catalogLineFilter = document.getElementById("catalogLineFilter");
  const visibleCatalog = filteredProductCatalog();

  document.getElementById("catalogSummary").textContent = `${visibleCatalog.length} / ${productCatalog.length} 个型号`;
  catalogLineFilter.innerHTML = [
    `<option value="all"${state.catalogLine === "all" ? " selected" : ""}>全部产品线</option>`,
    ...catalogLineOptions().map(
      (line) => `<option value="${escapeHtml(line)}"${state.catalogLine === line ? " selected" : ""}>${escapeHtml(line)}</option>`,
    ),
  ].join("");
  renderCatalogInsights(visibleCatalog);

  productCatalogList.innerHTML = visibleCatalog
    .map(
      (item) => `
        <article class="catalog-card">
          <div class="catalog-main">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
            <div>
              <strong>${escapeHtml(item.line)}</strong>
              <span>${escapeHtml(item.model)}</span>
              <small>${escapeHtml(item.title)}</small>
            </div>
          </div>
          <p>${escapeHtml(item.subtitle)}</p>
          <div class="catalog-meta">
            <span>${escapeHtml(item.doors)}</span>
            <span>${escapeHtml(item.scenario)}</span>
            <span>${escapeHtml(item.software)}</span>
          </div>
          <div class="catalog-actions">
            <button type="button" data-catalog-product="${escapeHtml(item.id)}">加入画布</button>
            <button type="button" data-catalog-package="${escapeHtml(item.id)}">资料包</button>
          </div>
        </article>
      `,
    )
    .join("");

  assetCatalogList.innerHTML = assetCatalog
    .map(
      (item) => `
        <article class="asset-card">
          <img src="${escapeHtml(item.thumbnail)}" alt="${escapeHtml(item.title)}" />
          <div>
            <div class="asset-title">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.type)}</span>
            </div>
            <p>${escapeHtml(item.usage)}</p>
            <div class="catalog-meta">
              <span>${escapeHtml(item.productLine)}</span>
              <span>${escapeHtml(item.formats.join(" / "))}</span>
            </div>
            <button type="button" data-asset-catalog="${escapeHtml(item.id)}">添加素材卡</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOfficialSeedTools() {
  const officialSeedTools = document.getElementById("officialSeedTools");
  if (!officialSeedTools) return;
  const importedSeedNodes = nodes.filter((node) => node.type === "product" && node.source === "Winnsen 官网 Products");
  const sourceLines = [...new Set(publicProductSeedRows.map((row) => row.line))];

  document.getElementById("officialSeedSummary").textContent = `${publicProductSeedRows.length} 个公开产品`;
  officialSeedTools.innerHTML = `
    <div class="official-seed-stat">
      <div>
        <span>公开产品</span>
        <strong>${publicProductSeedRows.length}</strong>
      </div>
      <div>
        <span>产品线</span>
        <strong>${sourceLines.length}</strong>
      </div>
      <div>
        <span>已导入</span>
        <strong>${importedSeedNodes.length}</strong>
      </div>
    </div>
    <div class="official-seed-actions">
      <button type="button" data-official-seed-action="generate">生成官网资料包</button>
      <button type="button" data-official-seed-action="csv">下载官网 CSV</button>
      <button type="button" data-official-seed-action="export">导出资料源</button>
    </div>
    <div class="official-seed-list">
      <span>官网公开产品线：${escapeHtml(sourceLines.join(" / "))}</span>
      ${publicProductSeedRows
        .slice(0, 5)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.model)} · ${escapeHtml(item.line)}</strong>
              ${escapeHtml(item.title)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReadinessTools() {
  const readinessTools = document.getElementById("readinessTools");
  if (!readinessTools) return;
  const productRows = readinessProductRows();
  const gapRows = readinessGapRows();
  const readinessNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "资料补齐");
  const p1Products = productRows.filter((row) => row[3] === "P1");

  document.getElementById("readinessSummary").textContent = `${gapRows.length} 项`;
  readinessTools.innerHTML = `
    <div class="readiness-stat">
      <div>
        <span>产品种子</span>
        <strong>${productRows.length}</strong>
      </div>
      <div>
        <span>待补资料</span>
        <strong>${gapRows.length}</strong>
      </div>
      <div>
        <span>已上画布</span>
        <strong>${readinessNodes.length}</strong>
      </div>
    </div>
    <div class="readiness-actions">
      <button type="button" data-readiness-action="board">生成补齐任务</button>
      <button type="button" data-readiness-action="export">导出补齐表</button>
    </div>
    <div class="readiness-list">
      <span>P1 试用优先：${escapeHtml(p1Products.map((row) => row[0]).join(" / "))}</span>
      ${productRows
        .slice(0, 5)
        .map(
          (row) => `
            <em>
              <strong>${escapeHtml(row[0])} · ${escapeHtml(row[3])}</strong>
              ${escapeHtml(row[1])} · ${escapeHtml(row[2])} · ${escapeHtml(row[4])}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAssetTools() {
  const assetTools = document.getElementById("assetTools");
  const assets = nodes.filter((node) => node.type === "asset");
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithAsset = new Set(assets.map((node) => node.sourceProductId).filter(Boolean));
  const missingProductPacks = products.filter((node) => !productIdsWithAsset.has(node.id));
  const missingAssets = assets.flatMap((node) => node.missingAssets || []);
  const modelAssets = assets.filter((node) =>
    String(node.assetType || "").toLowerCase().includes("3d") ||
    (node.formats || []).some((format) => ["STEP", "GLB", "OBJ"].includes(String(format).toUpperCase())),
  );
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected : productForWorkNode(selected);

  document.getElementById("assetSummary").textContent = `${assets.length} 项`;
  assetTools.innerHTML = `
    <div class="asset-stat">
      <div>
        <span>素材包</span>
        <strong>${assets.length}</strong>
      </div>
      <div>
        <span>缺口</span>
        <strong>${missingAssets.length}</strong>
      </div>
      <div>
        <span>3D/模型</span>
        <strong>${modelAssets.length}</strong>
      </div>
    </div>
    <div class="asset-actions">
      <button type="button" data-asset-action="current">当前产品素材</button>
      <button type="button" data-asset-action="batch">批量补缺口</button>
      <button type="button" data-asset-action="export">导出素材库</button>
    </div>
    <div class="asset-gaps">
      <span>${escapeHtml(target?.title || "选择产品后生成素材包")}</span>
      ${(missingAssets.length ? missingAssets.slice(0, 6) : [`待补产品 ${missingProductPacks.length}`])
        .map((name) => `<em>${escapeHtml(name)}</em>`)
        .join("")}
    </div>
  `;
}

function normalizedFileRowsForAsset(asset) {
  const rows = asset.fileRows?.length
    ? asset.fileRows
    : assetFileRowsForProduct(
        {
          model: asset.relatedProduct || asset.title,
          line: asset.relatedProduct || "General",
          title: asset.title,
        },
        asset.requiredAssets || asset.missingAssets || [],
      );
  return rows.map((row) => {
    const values = Array.isArray(row)
      ? row
      : [row.name, row.kind, row.formats, row.owner, row.path, row.status, row.usage, row.visibility];
    return {
      assetId: asset.id,
      assetTitle: asset.title,
      productId: asset.sourceProductId,
      productTitle: nodes.find((node) => node.id === asset.sourceProductId)?.title || asset.relatedProduct || "通用素材",
      name: values[0] || "素材文件",
      kind: values[1] || assetKindForName(values[0]),
      formats: values[2] || assetFormatsForKind(assetKindForName(values[0])),
      owner: values[3] || asset.assetOwner || "待分配",
      path: values[4] || asset.storagePath || "待补充",
      status: values[5] || "待入库",
      usage: values[6] || asset.usage || "产品资料",
      visibility: values[7] || "内部",
    };
  });
}

function fileLedgerRows() {
  return nodes.filter((node) => node.type === "asset").flatMap(normalizedFileRowsForAsset);
}

function renderFileLedgerTools() {
  const fileLedgerTools = document.getElementById("fileLedgerTools");
  const rows = fileLedgerRows();
  const missingRows = rows.filter((row) => /缺口|待|补/.test(row.status));
  const approvalRows = rows.filter((row) => /审核|审批|授权/.test(`${row.visibility} ${row.status}`));
  const modelRows = rows.filter((row) => row.kind === "3D" || row.kind === "Structure");
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected : productForWorkNode(selected);
  const visibleRows = target?.id ? rows.filter((row) => row.productId === target.id).slice(0, 6) : rows.slice(0, 6);
  const previewRows = visibleRows.length ? visibleRows : rows.slice(0, 6);

  document.getElementById("fileLedgerSummary").textContent = `${rows.length} 文件`;
  fileLedgerTools.innerHTML = `
    <div class="file-ledger-stat">
      <div>
        <span>文件</span>
        <strong>${rows.length}</strong>
      </div>
      <div>
        <span>待补</span>
        <strong>${missingRows.length}</strong>
      </div>
      <div>
        <span>结构/3D</span>
        <strong>${modelRows.length}</strong>
      </div>
      <div>
        <span>待审核</span>
        <strong>${approvalRows.length}</strong>
      </div>
    </div>
    <div class="file-ledger-actions">
      <button type="button" data-file-action="current">当前产品文件</button>
      <button type="button" data-file-action="projects">项目文件包</button>
      <button type="button" data-file-action="export">导出台账</button>
    </div>
    <div class="file-ledger-list">
      <span>${escapeHtml(target?.title || "文件入库清单")}</span>
      ${(previewRows.length ? previewRows : [{ name: "等待素材包", kind: "File", status: "待生成", owner: "产品/市场" }])
        .map(
          (row) => `
            <em>
              <strong>${escapeHtml(row.name)}</strong>
              ${escapeHtml([row.kind, row.status, row.owner].filter(Boolean).join(" · "))}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRoadmapTools() {
  const roadmapTools = document.getElementById("roadmapTools");
  if (!roadmapTools) return;
  const referenceNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "开源参考");
  const evidenceNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "GitHub 参考证据");
  const roadmapNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "产品路线");
  const p1Milestones = productRoadmapMilestones.filter((item) => item.phase.includes("P1") || item.phase.includes("P2"));

  document.getElementById("roadmapSummary").textContent = `${productRoadmapMilestones.length} 阶段`;
  roadmapTools.innerHTML = `
    <div class="roadmap-stat">
      <div>
        <span>参考</span>
        <strong>${openSourceReferenceCatalog.length}</strong>
      </div>
      <div>
        <span>路线</span>
        <strong>${productRoadmapMilestones.length}</strong>
      </div>
      <div>
        <span>已上画布</span>
        <strong>${referenceNodes.length + evidenceNodes.length + roadmapNodes.length}</strong>
      </div>
    </div>
    <div class="roadmap-actions">
      <button type="button" data-roadmap-action="references">参考图谱</button>
      <button type="button" data-roadmap-action="evidence">GitHub 证据</button>
      <button type="button" data-roadmap-action="plan">产品路线</button>
      <button type="button" data-roadmap-action="export">导出路线</button>
    </div>
    <div class="roadmap-list">
      <span>下一步重点：${escapeHtml(p1Milestones.map((item) => item.goal).join(" / "))}</span>
      ${openSourceReferenceCatalog
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.product)}</strong>
              ${escapeHtml(item.role)} · ${escapeHtml(item.stars)} stars · ${escapeHtml(item.license)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTeamWorkflowTools() {
  const teamWorkflowTools = document.getElementById("teamWorkflowTools");
  if (!teamWorkflowTools) return;
  const roleNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "团队角色");
  const handoffNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "交接流程");
  const coreRoles = teamRoleCatalog.filter((role) => /产品|品审|图库|视频|销售/.test(role.role));

  document.getElementById("teamWorkflowSummary").textContent = `${teamRoleCatalog.length} 角色`;
  teamWorkflowTools.innerHTML = `
    <div class="team-workflow-stat">
      <div>
        <span>角色</span>
        <strong>${teamRoleCatalog.length}</strong>
      </div>
      <div>
        <span>交接</span>
        <strong>${teamHandoffStages.length}</strong>
      </div>
      <div>
        <span>已上画布</span>
        <strong>${roleNodes.length + handoffNodes.length}</strong>
    </div>
    <div class="team-workflow-actions">
      <button type="button" data-team-action="roles">角色矩阵</button>
      <button type="button" data-team-action="handoff">交接流程</button>
      <button type="button" data-team-action="export">导出协作</button>
    </div>
    <div class="team-workflow-list">
      <span>核心协作：${escapeHtml(coreRoles.map((item) => item.role).join(" / "))}</span>
      ${teamRoleCatalog
        .slice(0, 6)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.role)}</strong>
              ${escapeHtml(item.team)} · ${escapeHtml(item.outputs)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDeliverySpecTools() {
  const deliverySpecTools = document.getElementById("deliverySpecTools");
  if (!deliverySpecTools) return;
  const schemaNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "数据模型");
  const specNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "MVP规格");
  const p0Modules = mvpDeliveryCatalog.filter((item) => item.priority === "P0");

  document.getElementById("deliverySpecSummary").textContent = `${mvpDeliveryCatalog.length} 模块`;
  deliverySpecTools.innerHTML = `
    <div class="delivery-spec-stat">
      <div>
        <span>实体</span>
        <strong>${dataModelCatalog.length}</strong>
      </div>
      <div>
        <span>MVP</span>
        <strong>${mvpDeliveryCatalog.length}</strong>
      </div>
      <div>
        <span>已上画布</span>
        <strong>${schemaNodes.length + specNodes.length}</strong>
      </div>
    </div>
    <div class="delivery-spec-actions">
      <button type="button" data-delivery-action="schema">数据模型</button>
      <button type="button" data-delivery-action="mvp">MVP 规格</button>
      <button type="button" data-delivery-action="export">导出规格</button>
    </div>
    <div class="delivery-spec-list">
      <span>P0 开发重点：${escapeHtml(p0Modules.map((item) => item.module).join(" / "))}</span>
      ${dataModelCatalog
        .slice(0, 6)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.entity)}</strong>
              ${escapeHtml(item.purpose)} · ${escapeHtml(item.owner)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderWorkflowLauncherTools() {
  const workflowLauncherTools = document.getElementById("workflowLauncherTools");
  if (!workflowLauncherTools) return;
  const workflowNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "工作流启动");
  const products = nodes.filter((node) => node.type === "product");
  const selected = getSelectedNode();
  const target = selected.type === "product" ? selected : productForWorkNode(selected);

  document.getElementById("workflowLauncherSummary").textContent = `${workflowLauncherCatalog.length} 个入口`;
  workflowLauncherTools.innerHTML = `
    <div class="workflow-launcher-stat">
      <div>
        <span>入口</span>
        <strong>${workflowLauncherCatalog.length}</strong>
      </div>
      <div>
        <span>产品卡</span>
        <strong>${products.length}</strong>
      </div>
      <div>
        <span>已启动</span>
        <strong>${workflowNodes.length}</strong>
      </div>
    </div>
    <div class="workflow-launcher-actions">
      ${workflowLauncherCatalog
        .map((item) => `<button type="button" data-workflow-launch="${escapeHtml(item.id)}">${escapeHtml(item.title)}</button>`)
        .join("")}
      <button type="button" data-workflow-action="export">导出启动器</button>
    </div>
    <div class="workflow-launcher-list">
      <span>当前对象：${escapeHtml(target?.title || "选择产品卡后启动")}</span>
      ${workflowLauncherCatalog
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.title)}</strong>
              ${escapeHtml(item.owner)} · ${escapeHtml(item.outcome)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOvernightGoalTools() {
  const overnightGoalTools = document.getElementById("overnightGoalTools");
  if (!overnightGoalTools) return;
  const overnightNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "今夜执行");
  const imitationNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "成熟产品仿照");

  document.getElementById("overnightGoalSummary").textContent = `${overnightRunQueue.length} 步`;
  overnightGoalTools.innerHTML = `
    <div class="overnight-goal-stat">
      <div>
        <span>参考产品</span>
        <strong>${openSourceReferenceCatalog.length}</strong>
      </div>
      <div>
        <span>特色模块</span>
        <strong>${winnsenSignatureModules.length}</strong>
      </div>
      <div>
        <span>今夜队列</span>
        <strong>${overnightRunQueue.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${overnightNodes.length + imitationNodes.length}</strong>
      </div>
    </div>
    <div class="overnight-goal-actions">
      <button type="button" data-overnight-action="imitate">生成仿照矩阵</button>
      <button type="button" data-overnight-action="plan">生成今夜任务</button>
      <button type="button" data-overnight-action="export">导出目标</button>
    </div>
    <div class="overnight-goal-list">
      <span>长目标：仿照成熟产品骨架，做 Winnsen 专属产品工作台。</span>
      ${overnightRunQueue
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.slot)} · ${escapeHtml(item.objective)}</strong>
              ${escapeHtml(item.action)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPilotPackTools() {
  const pilotPackTools = document.getElementById("pilotPackTools");
  if (!pilotPackTools) return;
  const pilotNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "内部试用");
  const gateNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用验收");

  document.getElementById("pilotPackSummary").textContent = `${internalPilotChecklist.length} Gate`;
  pilotPackTools.innerHTML = `
    <div class="pilot-pack-stat">
      <div>
        <span>场景</span>
        <strong>${internalPilotScenarios.length}</strong>
      </div>
      <div>
        <span>Gate</span>
        <strong>${internalPilotChecklist.length}</strong>
      </div>
      <div>
        <span>议程</span>
        <strong>${internalPilotAgenda.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${pilotNodes.length + gateNodes.length}</strong>
      </div>
    </div>
    <div class="pilot-pack-actions">
      <button type="button" data-pilot-action="package">生成试用包</button>
      <button type="button" data-pilot-action="checklist">生成验收清单</button>
      <button type="button" data-pilot-action="export">导出试用包</button>
    </div>
    <div class="pilot-pack-list">
      <span>内部试用目标：用真实产品和客户项目跑通产品、品审、UI、素材、视频和报告。</span>
      ${internalPilotScenarios
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.scenario)}</strong>
              ${escapeHtml(item.users)} · ${escapeHtml(item.pass)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPilotSessionTools() {
  const pilotSessionTools = document.getElementById("pilotSessionTools");
  if (!pilotSessionTools) return;
  const sessionNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用会话");
  const actionNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用行动");

  document.getElementById("pilotSessionSummary").textContent = `${pilotSessionRecords.length} 条`;
  pilotSessionTools.innerHTML = `
    <div class="pilot-session-stat">
      <div>
        <span>会话</span>
        <strong>${pilotSessionRecords.length}</strong>
      </div>
      <div>
        <span>决策</span>
        <strong>${pilotSessionRecords.length}</strong>
      </div>
      <div>
        <span>行动项</span>
        <strong>${pilotSessionRecords.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${sessionNodes.length + actionNodes.length}</strong>
      </div>
    </div>
    <div class="pilot-session-actions">
      <button type="button" data-session-action="log">生成会话记录</button>
      <button type="button" data-session-action="actions">生成行动项</button>
      <button type="button" data-session-action="export">导出纪要</button>
    </div>
    <div class="pilot-session-list">
      <span>会后闭环：决策、证据、行动项、负责人、验收标准。</span>
      ${pilotSessionRecords
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.stage)} · ${escapeHtml(item.owner)}</strong>
              ${escapeHtml(item.decision)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderGuidedStartTools() {
  const guidedStartTools = document.getElementById("guidedStartTools");
  if (!guidedStartTools) return;
  const guideNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用导航");

  document.getElementById("guidedStartSummary").textContent = `${guidedStartSteps.length} 步`;
  guidedStartTools.innerHTML = `
    <div class="guided-start-stat">
      <div>
        <span>步骤</span>
        <strong>${guidedStartSteps.length}</strong>
      </div>
      <div>
        <span>路线</span>
        <strong>${guidedStartTracks.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${guideNodes.length}</strong>
      </div>
    </div>
    <div class="guided-start-actions">
      <button type="button" data-guided-action="guide">生成起步路线</button>
      <button type="button" data-guided-action="export">导出导航</button>
    </div>
    <div class="guided-start-list">
      <span>推荐试用路径：先选路线，再选产品，启动工作流，导出评审包，记录反馈。</span>
      ${guidedStartSteps
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.order)} · ${escapeHtml(item.title)}</strong>
              ${escapeHtml(item.tool)} · ${escapeHtml(item.result)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPilotFeedbackTools() {
  const pilotFeedbackTools = document.getElementById("pilotFeedbackTools");
  if (!pilotFeedbackTools) return;
  const feedbackNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "试用反馈");
  const iterationNodes = nodes.filter((node) => node.type === "knowledge" && node.category === "迭代优先级");
  const avgScore = Math.round(pilotGateScorecard.reduce((sum, item) => sum + item.score, 0) / pilotGateScorecard.length);

  document.getElementById("pilotFeedbackSummary").textContent = `${pilotFeedbackSignals.length} 条`;
  pilotFeedbackTools.innerHTML = `
    <div class="pilot-feedback-stat">
      <div>
        <span>反馈</span>
        <strong>${pilotFeedbackSignals.length}</strong>
      </div>
      <div>
        <span>均分</span>
        <strong>${avgScore}</strong>
      </div>
      <div>
        <span>Backlog</span>
        <strong>${pilotIterationBacklog.length}</strong>
      </div>
      <div>
        <span>已生成</span>
        <strong>${feedbackNodes.length + iterationNodes.length}</strong>
      </div>
    </div>
    <div class="pilot-feedback-actions">
      <button type="button" data-feedback-action="feedback">生成反馈记录</button>
      <button type="button" data-feedback-action="iteration">生成迭代优先级</button>
      <button type="button" data-feedback-action="export">导出反馈</button>
    </div>
    <div class="pilot-feedback-list">
      <span>反馈闭环：试用观察 → Gate 评分 → 下一轮迭代任务。</span>
      ${pilotIterationBacklog
        .slice(0, 4)
        .map(
          (item) => `
            <em>
              <strong>${escapeHtml(item.priority)} · ${escapeHtml(item.item)}</strong>
              ${escapeHtml(item.why)}
            </em>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTasks() {
  const taskItems = [];
  nodes.forEach((node) => {
    if (node.type === "review") {
      taskItems.push({
        priority: statusPriority(node.status),
        title: node.title,
        subtitle: `${node.category || "品审"} · ${node.owner || "待分配"} · ${node.due || "待定"}`,
      });
    }
    (node.tasks || []).forEach((task) => {
      taskItems.push({
        priority: node.type === "product" ? "P2" : "P3",
        title: task,
        subtitle: node.title,
      });
    });
  });

  const priorityRank = { P0: 0, P1: 1, P2: 2, P3: 3 };
  taskItems.sort((a, b) => (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9));
  taskSummary.textContent = `${taskItems.length} 项`;
  taskBoard.innerHTML = taskItems
    .slice(0, 8)
    .map(
      (task) => `
        <div class="task-item">
          <span class="task-priority ${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
          <div>
            <strong>${escapeHtml(task.title)}</strong>
            <span>${escapeHtml(task.subtitle)}</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function productNodeFromCatalog(item) {
  return {
    type: "product",
    title: item.title,
    subtitle: item.subtitle,
    status: "资料库",
    badge: "blue",
    image: item.image,
    ...catalogFields(item.id),
    specs: clone(item.specs),
    modules: clone(item.modules),
    tasks: clone(item.tasks),
    details: [
      ["应用场景", item.scenario],
      ["资料字段", `${item.model} · ${item.doors} · ${item.screen} · ${item.software}`],
      ["下一步", "补齐产品结构图、安装图、UI 截图、报价差异项和客户版本记录。"],
    ],
  };
}

function productNodeFromCsv(record, index = 0) {
  const title = record.title || record.model || "CSV Product";
  const line = record.line || "Imported Product";
  const subtitle = record.subtitle || record.applications || "从产品资料表导入";
  const image = record.image || productImageForLine(line);
  const tasks = splitList(record.tasks || "");
  return {
    type: "product",
    title,
    subtitle,
    status: "CSV资料",
    badge: "green",
    image,
    catalogId: record.model || `csv-${Date.now()}-${index}`,
    model: record.model || title,
    line,
    applications: record.applications || subtitle,
    doorCount: record.doorCount || "待补充",
    material: record.material || "待补充",
    screen: record.screen || "待补充",
    payment: record.payment || "待补充",
    software: record.software || "待补充",
    certifications: record.certifications || "待补充",
    source: record.source || "产品资料 CSV",
    sourceUrl: record.sourceUrl || "",
    specs: splitList(record.specs || record.tags || ""),
    modules: splitList(record.modules || ""),
    tasks: tasks.length ? tasks : ["补齐产品图片/结构图", "确认客户场景", "建立品审清单"],
    details: [
      ["导入来源", [record.source || "产品资料 CSV", record.sourceUrl].filter(Boolean).join(" · ")],
      ["资料字段", `${record.model || "无型号"} · ${line} · ${record.screen || "屏幕待补充"} · ${record.software || "软件待补充"}`],
      ["下一步", "补充结构图、安装图、UI 截图、素材包和客户版本记录。"],
    ],
  };
}

function productCatalogItemForProject(project) {
  return productCatalog.find((item) => item.id === project.productId) || productCatalog[0];
}

function productNodeForProject(project, index = 0) {
  const item = productCatalogItemForProject(project);
  return {
    ...productNodeFromCatalog(item),
    status: project.stage || "客户项目",
    details: [
      ["客户项目", project.title],
      ["客户/区域", `${project.customerName} · ${project.region}`],
      ["数量/目标价", `${project.quantity} · ${project.targetPrice}`],
      ["下一步", project.nextActions.join(" / ")],
    ],
    tasks: [...item.tasks, ...project.nextActions.slice(0, 3)],
    x: 150 + index * 24,
    y: 120 + index * 24,
  };
}

function customerProjectBriefNode(project, sourceProductId, index = 0) {
  const item = productCatalogItemForProject(project);
  return {
    type: "brief",
    title: `${project.title} 报价前需求卡`,
    subtitle: `${project.region} · ${item.model} · ${project.stage}`,
    status: project.stage,
    badge: project.priority === "P1" ? "red" : "amber",
    sourceProductId,
    projectId: project.id,
    customerName: project.customerName,
    region: project.region,
    market: project.region,
    requestType: project.requestType,
    quantity: project.quantity,
    targetPrice: project.targetPrice,
    dueDate: project.dueDate,
    requirements: clone(project.requirements),
    changeRequests: clone(project.changeRequests),
    versionRows: [
      ["V0 客户需求版", "确认客户场景、数量、目标价、交期、定制项和资料缺口", project.stage],
      ["V1 报价方案版", "输出配置差异、结构品审、UI 流程、素材清单和视频方向", "准备中"],
      ["V2 样机/试点版", "按确认范围进入样机、试点或批量报价", "待评审"],
    ],
    modules: ["客户项目", "报价前评审", "版本差异", "资料缺口", "跨部门任务"],
    tasks: clone(project.nextActions),
    details: [
      ["客户目标", `把 ${project.title} 转成可报价、可评审、可分工的项目资料包。`],
      ["产品", `${item.model} · ${item.title}`],
      ["风险", project.risks.join(" / ")],
      ["所需资料", project.requiredMaterials.join(" / ")],
    ],
    x: 520 + index * 24,
    y: 120 + index * 24,
  };
}

function projectReviewNode(project, sourceProductId, index = 0) {
  const item = productCatalogItemForProject(project);
  return {
    type: "review",
    title: `${project.title} 报价前风险评审`,
    subtitle: "客户需求、配置差异、交期、成本、认证和资料缺口",
    status: project.priority,
    badge: "red",
    sourceProductId,
    projectId: project.id,
    category: "报价前评审",
    owner: "产品/销售/结构/软件/市场",
    due: project.dueDate,
    validation: "销售确认客户范围，产品确认配置差异，结构/软件确认风险，市场补齐素材。",
    question: "哪些定制项会影响报价、结构、软件、交期、认证和售后？",
    impact: project.risks.join("；"),
    evidence: clone(project.requiredMaterials),
    details: [
      ["客户/区域", `${project.customerName} · ${project.region}`],
      ["产品", `${item.model} · ${item.title}`],
      ["目标价/数量", `${project.targetPrice} · ${project.quantity}`],
      ["下一步", project.nextActions.join(" / ")],
    ],
    x: 900 + index * 24,
    y: 120 + index * 24,
  };
}

function productImageForLine(line) {
  const normalized = String(line || "").toLowerCase();
  if (normalized.includes("laundry")) return productImages.laundry;
  if (normalized.includes("flower")) return productImages.flower;
  if (normalized.includes("charging")) return productImages.charging;
  if (normalized.includes("food") || normalized.includes("pharmacy") || normalized.includes("vending")) return productImages.flower;
  return productImages.parcelIndoor;
}

function splitList(value) {
  return String(value || "")
    .split(/[;；、|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function productSeedCsv(rows = publicProductSeedRows) {
  const columns = [
    "model",
    "line",
    "title",
    "subtitle",
    "applications",
    "doorCount",
    "material",
    "screen",
    "payment",
    "software",
    "certifications",
    "image",
    "specs",
    "modules",
    "tasks",
    "source",
    "sourceUrl",
  ];
  return [
    columns.join(","),
    ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(",")),
  ].join("\n");
}

function splitEntryList(value) {
  return String(value || "")
    .split(/[,，;；、|\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatVersionRows(rows) {
  return (rows || []).map((row) => row.join(" | ")).join("\n");
}

function parseVersionRows(value) {
  return String(value || "")
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map((item) => item.trim()).filter(Boolean);
      if (parts.length >= 3) return parts.slice(0, 3);
      if (parts.length === 2) return [parts[0], parts[1], "待确认"];
      return [parts[0], "补充版本差异", "待确认"];
    });
}

function assetNodeFromCatalog(item) {
  const requiredAssets = ["缩略图", "原始文件", "用途说明", "产品线标签", "版本记录"];
  return {
    type: "asset",
    title: item.title,
    subtitle: `${item.productLine} · ${item.usage}`,
    status: item.status,
    badge: "violet",
    assets: [item.thumbnail],
    assetType: item.type,
    relatedProduct: item.productLine,
    usage: item.usage,
    formats: clone(item.formats),
    tags: clone(item.tags),
    storagePath: `Winnsen/Assets/${String(item.productLine || "General").replace(/\s+/g, "-")}/`,
    assetOwner: item.type === "3D" ? "结构/产品" : "市场/产品",
    assetVersion: "v1",
    source: "素材库模板",
    approvalStatus: item.status || "待确认",
    requiredAssets,
    missingAssets: item.status === "可复用" ? [] : ["原始文件路径", "审批记录", "版本说明"],
    fileRows: assetFileRowsForProduct(
      {
        model: item.id,
        line: item.productLine,
        title: item.title,
      },
      requiredAssets,
      item.status === "可复用" ? "已入库" : "待入库",
    ),
    specs: [item.type, item.productLine, ...item.formats.slice(0, 2)],
    details: [
      ["素材用途", item.usage],
      ["格式", item.formats.join(" / ")],
      ["标签", item.tags.join(" / ")],
      ["入库", "补齐存储路径、负责人、版本、审批状态和复用范围。"],
    ],
  };
}

function assetKindForName(name) {
  const value = String(name || "").toLowerCase();
  if (/3d|glb|step|模型|model/.test(value)) return "3D";
  if (/ui|figma|截图|screen/.test(value)) return "UI";
  if (/结构|pdf|dwg|安装|尺寸|图纸|认证|合规/.test(value)) return "Structure";
  if (/视频|镜头|开门|动作|mp4|video/.test(value)) return "Video";
  if (/客户|场景|案例|安装/.test(value)) return "Scene";
  return "Image";
}

function assetFormatsForKind(kind) {
  return {
    Image: "JPG/PNG/WebP",
    UI: "PNG/Figma",
    Structure: "PDF/DWG/STEP",
    Video: "MP4/Prompt/SRT",
    "3D": "STEP/GLB/OBJ",
    Scene: "JPG/PNG/MP4",
  }[kind] || "JPG/PNG";
}

function assetOwnerForKind(kind) {
  return {
    Image: "市场",
    UI: "产品/UI",
    Structure: "结构",
    Video: "市场/产品",
    "3D": "结构/产品",
    Scene: "市场/销售",
  }[kind] || "产品/市场";
}

function assetFolderForKind(kind) {
  return {
    Image: "Photos",
    UI: "UI",
    Structure: "Structure",
    Video: "Video",
    "3D": "3D",
    Scene: "Scenes",
  }[kind] || "Files";
}

function assetVisibilityForKind(kind) {
  return {
    Image: "可公开审核",
    UI: "内部",
    Structure: "内部脱敏",
    Video: "可公开审核",
    "3D": "内部脱敏",
    Scene: "客户授权后公开",
  }[kind] || "内部";
}

function assetStatusForName(name, fallback = "待入库") {
  const value = String(name || "");
  if (/缺口|待补|待确认/.test(value)) return "缺口";
  if (/原始文件|审批|版本/.test(value)) return "待补齐";
  return fallback;
}

function cleanAssetName(name) {
  return String(name || "素材文件").replace(/\s+/g, " ").trim();
}

function assetFileRowsForProduct(product = {}, names = [], fallbackStatus = "待入库") {
  const model = product.model || product.title || "Product";
  const line = product.line || "Product";
  return names.map((name) => {
    const cleanName = cleanAssetName(name);
    const kind = assetKindForName(cleanName);
    return [
      cleanName,
      kind,
      assetFormatsForKind(kind),
      assetOwnerForKind(kind),
      `Winnsen/Assets/${String(line).replace(/\s+/g, "-")}/${String(model).replace(/\s+/g, "-")}/${assetFolderForKind(kind)}/`,
      assetStatusForName(cleanName, fallbackStatus),
      assetUsageForKind(kind),
      assetVisibilityForKind(kind),
    ];
  });
}

function assetUsageForKind(kind) {
  return {
    Image: "官网/报价/方案页",
    UI: "界面设计/软件对齐",
    Structure: "结构品审/工程确认",
    Video: "视频脚本/镜头生成",
    "3D": "模型库/结构拆解/视频",
    Scene: "客户案例/安装场景",
  }[kind] || "产品资料";
}

function assetNeedNodeForProduct(product) {
  const model = product.model || product.title || "Product";
  const requiredAssets = ["产品正面图", "45度图", "开门动作", "结构图/PDF", "UI 截图", "3D 模型", "客户场景", "视频镜头"];
  return {
    type: "asset",
    title: `${model} 素材需求`,
    subtitle: `${product.line || "产品线"} · 产品图、结构图、UI 截图、3D 模型、视频镜头`,
    status: "待补齐",
    badge: "violet",
    assets: product.image ? [product.image] : [],
    assetType: "Asset Pack",
    relatedProduct: product.title,
    sourceProductId: product.id,
    usage: "产品设计、结构评审、客户方案、报价资料和视频生成",
    formats: ["JPG", "PNG", "PDF", "STEP", "GLB", "MP4", "Prompt"],
    tags: ["产品主图", "45度图", "结构图", "UI 截图", "安装场景", "3D 模型", "视频镜头"],
    storagePath: `Winnsen/Assets/${String(product.line || "Product").replace(/\s+/g, "-")}/${model}/`,
    assetOwner: "产品/市场/结构",
    assetVersion: "v0",
    source: "项目素材需求",
    approvalStatus: "待补齐",
    requiredAssets,
    missingAssets: clone(requiredAssets),
    fileRows: assetFileRowsForProduct(product, requiredAssets),
    specs: ["Asset Pack", product.line || "Product", "结构评审", "视频生成"],
    tasks: [
      "补齐产品正面/45度/开门图片",
      "补齐结构图和安装场景",
      "整理 UI 截图和视频镜头素材",
    ],
    details: [
      ["素材范围", "产品主图、安装图、结构局部、UI 截图、3D 模型、客户场景、视频镜头。"],
      ["命名建议", `${model}-front / ${model}-structure / ${model}-ui / ${model}-scene。`],
      ["下一步", "把素材路径、版本、用途和客户国家标签补进图库/模型库。"],
    ],
  };
}

function csvImportOptions() {
  return {
    createReviews: document.getElementById("csvAutoReviews")?.checked ?? true,
    createFlows: document.getElementById("csvAutoFlows")?.checked ?? true,
    createAssets: document.getElementById("csvAutoAssets")?.checked ?? true,
  };
}

function addCatalogProduct(id) {
  const item = productCatalog.find((entry) => entry.id === id);
  if (!item) return;
  addNode(productNodeFromCatalog(item));
  setStatus("已加入产品资料");
}

function addCatalogPackage(id) {
  const item = productCatalog.find((entry) => entry.id === id);
  if (!item) return;
  const baseX = 130 - state.offsetX / state.scale;
  const baseY = 120 - state.offsetY / state.scale;
  const stamp = Date.now();
  const productId = `product-catalog-${stamp}`;
  const briefId = `brief-catalog-${stamp}`;
  const reviewId = `review-catalog-${stamp}`;
  const flowId = `flow-catalog-${stamp}`;
  const assetId = `asset-catalog-${stamp}`;
  const videoId = `video-catalog-${stamp}`;

  nodes.push(
    {
      ...productNodeFromCatalog(item),
      id: productId,
      status: "立项资料",
      x: baseX,
      y: baseY,
    },
    {
      id: briefId,
      ...customerBriefNodeForProduct({ ...item, id: productId, model: item.model, line: item.line, applications: item.scenario, x: baseX, y: baseY }),
      x: baseX + 780,
      y: baseY,
    },
    {
      id: reviewId,
      type: "review",
      title: `${item.model} 资料与结构品审`,
      subtitle: "检查参数、结构模块、素材缺口、客户场景和验证问题",
      status: "P1",
      badge: "red",
      x: baseX + 390,
      y: baseY,
      owner: "产品/结构/市场",
      due: "本周",
      category: "资料完整性/结构品审",
      details: [
        ["资料缺口", "产品结构图、门数配置表、屏幕/支付/API 说明、认证资料、安装场景图。"],
        ["结构问题", engineerQuestions.slice(0, 4).join("；")],
      ],
    },
    {
      id: flowId,
      ...uiFlowNodeForProduct({ ...item, id: productId, model: item.model, line: item.line, x: baseX, y: baseY }),
      x: baseX + 390,
      y: baseY + 300,
    },
    {
      ...assetNodeFromCatalog({
        id: `${item.id}-asset-need`,
        title: `${item.model} 素材需求清单`,
        type: "Asset Pack",
        productLine: item.line,
        usage: "产品图、结构图、UI 截图、3D 模型、视频镜头统一入库",
        formats: ["JPG", "PNG", "PDF", "STEP", "GLB", "MP4"],
        tags: ["产品主图", "结构图", "安装图", "UI", "视频素材"],
        thumbnail: item.image,
        status: "待补齐",
      }),
      id: assetId,
      sourceProductId: productId,
      relatedProduct: item.title,
      x: baseX,
      y: baseY + 560,
    },
    {
      id: videoId,
      ...videoNodeForProduct({ ...item, id: productId, model: item.model, line: item.line, x: baseX, y: baseY }),
      x: baseX + 390,
      y: baseY + 560,
    },
  );

  links.push(
    [productId, briefId],
    [briefId, reviewId],
    [briefId, flowId],
    [productId, reviewId],
    [productId, flowId],
    [productId, assetId],
    [flowId, videoId],
    [reviewId, videoId],
    [assetId, videoId],
  );
  state.selectedId = productId;
  persistWorkspace("已生成产品资料包");
  render();
}

function addCatalogPortfolioMap() {
  const items = filteredProductCatalog();
  if (!items.length) {
    setStatus("当前产品线无资料");
    return;
  }
  const baseX = 110 - state.offsetX / state.scale;
  const baseY = 100 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-product-portfolio-${stamp}`;
  const lineSummary = Object.entries(catalogCountsByLine(items))
    .map(([line, count]) => `${line}: ${count}`)
    .join(" / ");
  const roadmapRows = productPortfolioRows(items);

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: state.catalogLine === "all" ? "Winnsen 产品组合地图" : `${state.catalogLine} 产品组合地图`,
    subtitle: "产品线、应用场景、核心模块、品审重点和素材缺口的规划入口",
    status: "组合规划",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "产品组合",
    reusableInsight: "把官网产品线和内部型号资料转成可复用的产品规划画布。",
    learningRows: roadmapRows,
    tags: ["产品资料库", "产品组合", "路线图", state.catalogLine === "all" ? "All Lines" : state.catalogLine],
    details: [
      ["产品线", lineSummary],
      ["用途", "用于报价前方案选择、产品品审排期、UI/素材/视频任务规划。"],
      ["下一步", "给重点产品补齐结构图、客户案例、报价差异、UI 截图和素材包。"],
    ],
  });

  items.forEach((item, index) => {
    const id = `product-portfolio-${item.id}-${stamp}-${index}`;
    nodes.push({
      id,
      ...productNodeFromCatalog(item),
      status: "组合规划",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 320,
      details: [
        ["产品线", item.line],
        ["应用场景", item.scenario],
        ["关键模块", item.modules.join(" / ")],
        ["组合规划", "可继续生成客户需求卡、界面流程、结构品审、素材需求和视频脚本。"],
      ],
    });
    links.push([mapId, id]);
  });

  state.selectedId = mapId;
  persistWorkspace(`已生成 ${items.length} 个产品的组合画布`);
  render();
}

function productPortfolioRows(items = productCatalog) {
  return items.map((item) => [
    item.line,
    item.model,
    `${item.scenario}；${item.software}`,
  ]);
}

function buildProductCatalogMarkdown(items = filteredProductCatalog()) {
  return [
    "# Winnsen 产品资料库",
    "",
    `筛选：${state.catalogLine === "all" ? "全部产品线" : state.catalogLine}`,
    `型号数：${items.length}`,
    "",
    "| 产品线 | 型号 | 产品 | 场景 | 结构/门数 | 屏幕/支付 | 软件 | 下一步 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...items.map((item) =>
      [
        item.line,
        item.model,
        item.title,
        item.scenario,
        item.doors,
        [item.screen, item.payment].join(" / "),
        item.software,
        item.tasks.join("；"),
      ]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 产品线统计",
    "",
    ...Object.entries(catalogCountsByLine(items)).map(([line, count]) => `- ${line}: ${count} 个型号`),
    "",
    "## 使用建议",
    "",
    "- 资料包：从单个型号生成产品卡、客户 brief、品审点、UI 流程、素材需求和视频脚本。",
    "- 组合画布：把当前筛选结果转成产品规划地图，用于产品线会议、报价前方案选择和任务拆分。",
    "- 后续接入真实数据时，可把型号、门数、屏幕、支付、软件接口、认证、素材路径作为固定字段维护。",
  ].join("\n");
}

function exportProductCatalogMarkdown() {
  const items = filteredProductCatalog();
  if (!items.length) {
    setStatus("当前无可导出产品");
    return;
  }
  const suffix = state.catalogLine === "all" ? "all-lines" : state.catalogLine.replace(/[^\w-]+/g, "-").toLowerCase();
  downloadText(buildProductCatalogMarkdown(items), `winnsen-product-catalog-${suffix}.md`, "text/markdown");
  setStatus("已导出产品资料库");
}

function addCustomerProjectBrief(projectId) {
  const project = customerProjectCatalog.find((item) => item.id === projectId);
  if (!project) return;
  const item = productCatalogItemForProject(project);
  let product = nodes.find((node) => node.type === "product" && node.catalogId === item.id);
  if (!product) {
    const productId = `product-project-anchor-${project.id}-${Date.now()}`;
    product = {
      id: productId,
      ...productNodeForProject(project),
      x: 160 - state.offsetX / state.scale,
      y: 140 - state.offsetY / state.scale,
    };
    nodes.push(product);
  }
  const existing = nodes.find((node) => node.type === "brief" && node.projectId === project.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该客户项目已有需求卡");
    render();
    return;
  }
  const briefId = `brief-project-${project.id}-${Date.now()}`;
  nodes.push({
    id: briefId,
    ...customerProjectBriefNode(project, product.id),
    x: product.x + 390,
    y: product.y,
  });
  links.push([product.id, briefId]);
  state.selectedId = briefId;
  persistWorkspace("已生成客户项目需求卡");
  render();
}

function addCustomerProjectPackage(projectId) {
  const project = customerProjectCatalog.find((item) => item.id === projectId);
  if (!project) return;
  const item = productCatalogItemForProject(project);
  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 120 - state.offsetY / state.scale;
  const stamp = Date.now();
  const productId = `product-project-${project.id}-${stamp}`;
  const briefId = `brief-project-${project.id}-${stamp}`;
  const reviewId = `review-project-${project.id}-${stamp}`;
  const flowId = `flow-project-${project.id}-${stamp}`;
  const assetId = `asset-project-${project.id}-${stamp}`;
  const videoId = `video-project-${project.id}-${stamp}`;
  const productForGenerators = { ...item, id: productId, model: item.model, line: item.line, applications: item.scenario, image: item.image, x: baseX, y: baseY };

  nodes.push(
    {
      id: productId,
      ...productNodeForProject(project),
      x: baseX,
      y: baseY,
    },
    {
      id: briefId,
      ...customerProjectBriefNode(project, productId),
      x: baseX + 390,
      y: baseY,
    },
    {
      id: reviewId,
      ...projectReviewNode(project, productId),
      x: baseX + 780,
      y: baseY,
    },
    {
      id: flowId,
      ...uiFlowNodeForProduct(productForGenerators),
      x: baseX + 390,
      y: baseY + 330,
    },
    {
      id: assetId,
      ...assetNeedNodeForProduct(productForGenerators),
      title: `${item.model} 项目素材缺口`,
      missingAssets: clone(project.requiredMaterials),
      requiredAssets: clone(project.requiredMaterials),
      fileRows: assetFileRowsForProduct(productForGenerators, project.requiredMaterials),
      x: baseX,
      y: baseY + 620,
    },
    {
      id: videoId,
      ...videoNodeForProduct(productForGenerators),
      title: `${project.title} 产品视频计划`,
      subtitle: "客户场景、报价方案、产品操作和项目素材镜头",
      x: baseX + 390,
      y: baseY + 620,
    },
  );

  links.push(
    [productId, briefId],
    [briefId, reviewId],
    [briefId, flowId],
    [productId, reviewId],
    [productId, flowId],
    [productId, assetId],
    [reviewId, videoId],
    [flowId, videoId],
    [assetId, videoId],
  );
  state.selectedId = briefId;
  persistWorkspace("已生成客户项目资料包");
  render();
}

function addCustomerProjectMap() {
  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 100 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-customer-project-map-${stamp}`;

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "Winnsen 客户项目报价前地图",
    subtitle: "客户、区域、产品线、数量、目标价、交期、风险和资料缺口",
    status: "项目地图",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "客户项目",
    reusableInsight: "用客户项目地图统一驱动报价前评审、产品方案、UI、素材和视频任务。",
    learningRows: customerProjectCatalog.map((project) => [project.customerName, project.title, project.stage]),
    tags: ["客户项目", "报价前评审", "产品方案", "Winnsen"],
    details: [
      ["用途", "把销售输入转成产品设计和跨部门评审任务。"],
      ["项目数", `${customerProjectCatalog.length} 个客户项目模板`],
      ["下一步", "逐个项目生成资料包，补齐配置差异、结构资料、UI 流程、素材和视频脚本。"],
    ],
  });

  customerProjectCatalog.forEach((project, index) => {
    const item = productCatalogItemForProject(project);
    const briefId = `brief-project-map-${project.id}-${stamp}-${index}`;
    nodes.push({
      id: briefId,
      ...customerProjectBriefNode(project, "", index),
      subtitle: `${item.model} · ${project.region} · ${project.stage}`,
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 300,
    });
    links.push([mapId, briefId]);
  });

  state.selectedId = mapId;
  persistWorkspace(`已生成 ${customerProjectCatalog.length} 个客户项目地图`);
  render();
}

function buildCustomerProjectMarkdown(projects = customerProjectCatalog) {
  return [
    "# Winnsen 客户项目与报价前评审",
    "",
    "| 项目 | 客户/区域 | 产品 | 阶段 | 数量 | 目标价/报价边界 | 交期 | 风险 | 所需资料 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...projects.map((project) => {
      const item = productCatalogItemForProject(project);
      return [
        project.title,
        `${project.customerName} / ${project.region}`,
        `${item.model} ${item.title}`,
        project.stage,
        project.quantity,
        project.targetPrice,
        project.dueDate,
        project.risks.join("；"),
        project.requiredMaterials.join("；"),
      ]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
    "## 项目动作",
    "",
    ...projects.flatMap((project) => [
      `### ${project.title}`,
      "",
      `- 客户/区域：${project.customerName} / ${project.region}`,
      `- 阶段：${project.stage} / ${project.priority}`,
      `- 需求：${project.requirements.join("；")}`,
      `- 变更点：${project.changeRequests.join("；")}`,
      `- 下一步：${project.nextActions.join("；")}`,
      "",
    ]),
  ].join("\n");
}

function exportCustomerProjectMarkdown() {
  downloadText(buildCustomerProjectMarkdown(), "winnsen-customer-projects.md", "text/markdown");
  setStatus("已导出客户项目");
}

function quoteGateNodeFromEvaluation(gate, sourceProductId = "") {
  const missingText = gate.missing.map((item) => `${item.key}: ${item.note}`).join("；") || "关键资料已满足报价前检查。";
  return {
    type: "review",
    title: `${gate.project.title} 报价决策门`,
    subtitle: `${gate.decision} · ${gate.score}% · ${gate.blockerCount} 项待确认`,
    status: gate.decision,
    badge: gate.badge,
    sourceProductId,
    projectId: gate.project.id,
    category: "报价决策门",
    owner: "销售/产品/结构/软件/市场",
    due: gate.project.dueDate,
    validation: `Gate 结论：${gate.decision}。通过 ${gate.passed}/${gate.checks.length} 项检查。`,
    question: "是否可以进入报价，还是需要补资料、技术评审或暂缓？",
    impact: missingText,
    evidence: [...gate.project.requiredMaterials, ...gate.missing.map((item) => item.key)],
    tasks: gate.missing.length
      ? gate.missing.map((item) => `${item.owner}确认：${item.key}`)
      : ["销售整理正式报价输入", "产品输出配置差异说明", "市场补齐报价素材"],
    details: [
      ["客户/区域", `${gate.project.customerName} · ${gate.project.region}`],
      ["产品", `${gate.product?.model || gate.project.productId} · ${gate.product?.title || "待选产品"}`],
      ["数量/目标价", `${gate.project.quantity} · ${gate.project.targetPrice}`],
      ["Gate 分数", `${gate.score}% · ${gate.decision}`],
      ["待确认", missingText],
      ["下一步", gate.project.nextActions.join(" / ")],
    ],
  };
}

function productAnchorForProject(project, index = 0) {
  const item = productCatalogItemForProject(project);
  const existing = nodes.find((node) => node.type === "product" && node.catalogId === item.id);
  if (existing) return existing;
  const id = `product-gate-anchor-${project.id}-${Date.now()}-${index}`;
  const product = {
    id,
    ...productNodeForProject(project, index),
    x: 140 - state.offsetX / state.scale + index * 18,
    y: 130 - state.offsetY / state.scale + index * 18,
  };
  nodes.push(product);
  return product;
}

function addQuoteGateForProject(projectId) {
  const project = customerProjectCatalog.find((item) => item.id === projectId);
  if (!project) return;
  const existing = nodes.find((node) => node.type === "review" && node.category === "报价决策门" && node.projectId === project.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该项目已有报价 Gate");
    render();
    return;
  }
  const product = productAnchorForProject(project);
  const gate = quoteGateForProject(project);
  const id = `review-gate-${project.id}-${Date.now()}`;
  nodes.push({
    id,
    ...quoteGateNodeFromEvaluation(gate, product.id),
    x: product.x + 390,
    y: product.y,
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成报价 Gate");
  render();
}

function addAllQuoteGates() {
  const existingProjectIds = new Set(
    nodes
      .filter((node) => node.type === "review" && node.category === "报价决策门")
      .map((node) => node.projectId)
      .filter(Boolean),
  );
  const gates = quoteGateEvaluations().filter((gate) => !existingProjectIds.has(gate.project.id));
  if (!gates.length) {
    setStatus("所有项目已有报价 Gate");
    return;
  }
  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 110 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-quote-gate-map-${stamp}`;

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "Winnsen 报价决策门总览",
    subtitle: "可报价、补资料、技术评审和暂缓项目的统一判断",
    status: "Gate 总览",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "报价决策门",
    reusableInsight: "用 Gate 总览把客户项目从销售输入推进到报价、技术评审或暂缓。",
    learningRows: gates.map((gate) => [gate.project.title, `${gate.score}%`, gate.decision]),
    tags: ["报价前", "决策门", "客户项目", "Winnsen"],
    details: [
      ["可报价", `${gates.filter((gate) => gate.decision === "可进入报价").length} 个项目`],
      ["需补资料/评审", `${gates.filter((gate) => gate.decision !== "可进入报价").length} 个项目`],
      ["下一步", "逐项补齐 Gate 待确认内容，再进入报价或技术评审。"],
    ],
  });

  gates.forEach((gate, index) => {
    const id = `review-gate-${gate.project.id}-${stamp}-${index}`;
    nodes.push({
      id,
      ...quoteGateNodeFromEvaluation(gate),
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 290,
    });
    links.push([mapId, id]);
  });
  state.selectedId = mapId;
  persistWorkspace(`已生成 ${gates.length} 个报价 Gate`);
  render();
}

function buildQuoteGateMarkdown(gates = quoteGateEvaluations()) {
  return [
    "# Winnsen 报价决策门",
    "",
    "| 项目 | 产品 | 分数 | 结论 | 待确认 | 下一步 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...gates.map((gate) =>
      [
        gate.project.title,
        `${gate.product?.model || gate.project.productId} ${gate.product?.title || ""}`,
        `${gate.score}%`,
        gate.decision,
        gate.missing.map((item) => `${item.key}:${item.owner}`).join("；") || "可进入报价资料整理",
        gate.project.nextActions.join("；"),
      ]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## Gate 检查项",
    "",
    ...gates.flatMap((gate) => [
      `### ${gate.project.title} · ${gate.decision} · ${gate.score}%`,
      "",
      ...gate.checks.map((check) => `- ${check.passed ? "OK" : "TODO"} ${check.key}｜${check.owner}｜${check.note}`),
      "",
    ]),
  ].join("\n");
}

function exportQuoteGateMarkdown() {
  downloadText(buildQuoteGateMarkdown(), "winnsen-quote-gates.md", "text/markdown");
  setStatus("已导出报价 Gate");
}

function addAssetFromCatalog(id) {
  const item = assetCatalog.find((entry) => entry.id === id);
  if (!item) return;
  addNode(assetNodeFromCatalog(item));
  setStatus("已添加素材卡");
}

async function importCatalogCsvFile(file) {
  try {
    const records = parseCatalogCsv(await file.text());
    if (!records.length) {
      setStatus("CSV 无产品数据");
      return;
    }
    addCsvProducts(records, csvImportOptions());
  } catch {
    setStatus("CSV 导入失败");
  }
}

function parseCatalogCsv(text) {
  const rows = parseCsvRows(text).filter((row) => row.some((cell) => cell.trim()));
  if (rows.length < 2) return [];
  const headers = rows[0].map(normalizeCsvHeader);
  return rows.slice(1).map((row) => {
    const record = {};
    headers.forEach((key, index) => {
      if (!key) return;
      record[key] = String(row[index] || "").trim();
    });
    return record;
  }).filter((record) => record.model || record.title || record.line);
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  const source = String(text || "").replace(/^\uFEFF/, "");

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  rows.push(row);
  return rows;
}

function normalizeCsvHeader(header) {
  const raw = String(header || "").trim().replace(/^\uFEFF/, "");
  if (csvHeaderAliases[raw]) return csvHeaderAliases[raw];
  const compact = raw.toLowerCase().replace(/[\s_-]/g, "");
  const normalized = {
    model: "model",
    line: "line",
    productline: "line",
    title: "title",
    name: "title",
    subtitle: "subtitle",
    applications: "applications",
    scenario: "applications",
    doorcount: "doorCount",
    doors: "doorCount",
    material: "material",
    screen: "screen",
    payment: "payment",
    software: "software",
    certifications: "certifications",
    certification: "certifications",
    image: "image",
    specs: "specs",
    tags: "specs",
    modules: "modules",
    tasks: "tasks",
    source: "source",
    sourceurl: "sourceUrl",
  };
  return normalized[compact] || raw;
}

function addCsvProducts(records, options = csvImportOptions()) {
  const baseX = 130 - state.offsetX / state.scale;
  const baseY = 120 - state.offsetY / state.scale;
  const stamp = Date.now();
  const createdProductIds = [];
  const createdReviewIds = [];
  const createdFlowIds = [];
  const createdAssetIds = [];
  const projectMode = options.createReviews || options.createFlows || options.createAssets;
  const projectRowHeight = options.createReviews ? 1040 : options.createFlows ? 650 : 330;

  records.forEach((record, index) => {
    const id = `product-csv-${stamp}-${index}`;
    const productNode = {
      id,
      ...productNodeFromCsv(record, index),
      x: projectMode ? baseX : baseX + (index % 2) * 360,
      y: projectMode ? baseY + index * projectRowHeight : baseY + Math.floor(index / 2) * 330,
    };
    nodes.push(productNode);
    createdProductIds.push(id);

    if (options.createReviews) {
      reviewTemplateLibrary.forEach((template, templateIndex) => {
        const reviewId = `review-csv-${template.id}-${stamp}-${index}`;
        nodes.push({
          id: reviewId,
          ...reviewNodeFromTemplate(template, productNode, templateIndex),
        });
        links.push([id, reviewId]);
        createdReviewIds.push(reviewId);
      });
    }

    if (options.createFlows) {
      const flowId = `flow-csv-${stamp}-${index}`;
      nodes.push({
        id: flowId,
        ...uiFlowNodeForProduct(productNode),
        x: productNode.x + 390,
        y: productNode.y + (options.createReviews ? 610 : 300),
      });
      links.push([id, flowId]);
      createdFlowIds.push(flowId);
    }

    if (options.createAssets) {
      const assetId = `asset-csv-${stamp}-${index}`;
      nodes.push({
        id: assetId,
        ...assetNeedNodeForProduct(productNode),
        x: projectMode ? productNode.x : productNode.x + 390,
        y: productNode.y + (options.createReviews ? (options.createFlows ? 820 : 610) : options.createFlows ? 520 : 300),
      });
      links.push([id, assetId]);
      createdAssetIds.push(assetId);
    }
  });

  state.selectedId = createdProductIds[0] || state.selectedId;
  const extras = [];
  if (createdReviewIds.length) extras.push(`${createdReviewIds.length} 个品审点`);
  if (createdFlowIds.length) extras.push(`${createdFlowIds.length} 个界面流程`);
  if (createdAssetIds.length) extras.push(`${createdAssetIds.length} 个素材需求`);
  persistWorkspace(`已导入 ${createdProductIds.length} 个产品${extras.length ? `，生成 ${extras.join("、")}` : ""}`);
  render();
  return {
    products: createdProductIds,
    reviews: createdReviewIds,
    flows: createdFlowIds,
    assets: createdAssetIds,
  };
}

function downloadCatalogSample() {
  downloadText(catalogCsvSample, "winnsen-product-catalog-sample.csv", "text/csv");
  setStatus("已下载 CSV 样例");
}

function officialSeedRows() {
  return publicProductSeedRows.map((item) => [
    item.model,
    item.line,
    item.title,
    item.applications,
    item.screen,
    item.software,
    item.sourceUrl,
  ]);
}

function officialSeedLineRows() {
  const counts = publicProductSeedRows.reduce((acc, item) => {
    acc[item.line] = (acc[item.line] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).map(([line, count]) => {
    const rows = publicProductSeedRows.filter((item) => item.line === line);
    return [line, `${count} 个公开标题`, rows.map((item) => item.model).join(" / "), rows[0]?.sourceUrl || "https://www.winnsen.com/products.html"];
  });
}

function addOfficialProductSeedPackage() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "官网资料" && node.title === "Winnsen 官网公开产品资料种子包");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("官网资料种子包已存在");
    render();
    return;
  }

  const records = parseCatalogCsv(catalogCsvSample);
  const result = addCsvProducts(records, { createReviews: true, createFlows: true, createAssets: true });
  const baseX = 90 - state.offsetX / state.scale;
  const baseY = 80 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-official-product-seed-${stamp}`;
  const lineRows = officialSeedLineRows();

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "Winnsen 官网公开产品资料种子包",
    subtitle: "从官网公开产品标题整理的 10 个内部试用种子型号",
    status: "官网资料",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "官网资料",
    source: "Winnsen 官网 Products",
    sourceUrl: "https://www.winnsen.com/products.html",
    reusableInsight: "用官网公开产品线作为内部试用的真实资料起点，再由团队补齐内部型号、结构图、文件路径和认证资料。",
    validation: "种子包导入后必须能生成产品卡、品审点、UI 流程、素材需求和文件台账任务。",
    learningRows: officialSeedRows(),
    tags: ["官网资料", "真实产品资料", "CSV", "内部试用"],
    tasks: ["用内部真实型号替换临时代码", "补齐产品图片和结构图路径", "确认每个产品线的负责人和资料缺口"],
    details: [
      ["来源", "Winnsen 官网公开 Products 页面及产品分页。"],
      ["覆盖", lineRows.map((row) => row[0]).join(" / ")],
      ["下一步", "把官网公开标题与内部型号、BOM、结构图、UI 截图、认证和报价差异表对应起来。"],
    ],
  });

  result.products.forEach((productId) => links.push([mapId, productId]));
  lineRows.forEach((row, index) => {
    const id = `knowledge-official-product-line-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${row[0]} 官网资料线索`,
      subtitle: `${row[1]} · ${row[2]}`,
      status: "资料线索",
      badge: index % 2 === 0 ? "green" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 245,
      category: "官网资料",
      source: "Winnsen 官网 Products",
      sourceUrl: row[3],
      line: row[0],
      reusableInsight: `将 ${row[0]} 官网公开标题转成内部产品资料、素材和试用工作流。`,
      validation: "补齐真实内部型号、资料路径和负责人后才能作为正式产品库。",
      learningRows: [["产品线", row[0]], ["数量", row[1]], ["型号", row[2]], ["来源", row[3]]],
      tags: ["官网资料", row[0]],
      tasks: [`核对 ${row[0]} 的内部型号`, "补齐图片/结构/认证/软件资料"],
      details: [
        ["来源链接", row[3]],
        ["种子型号", row[2]],
        ["下一步", "将公开标题与内部资料路径绑定。"],
      ],
    });
    links.push([mapId, id]);
  });

  state.selectedId = mapId;
  persistWorkspace("已生成官网公开资料种子包");
  render();
}

function downloadOfficialSeedCsv() {
  downloadText(productSeedCsv(publicProductSeedRows), "winnsen-official-product-seed.csv", "text/csv");
  setStatus("已下载官网公开产品 CSV");
}

function buildOfficialSeedMarkdown() {
  return [
    "# Winnsen 官网公开产品资料种子包",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 产品种子",
    "",
    "| 型号 | 产品线 | 公开标题 | 场景 | 屏幕 | 软件 | 来源 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...officialSeedRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 产品线覆盖",
    "",
    "| 产品线 | 数量 | 种子型号 | 来源 |",
    "| --- | --- | --- | --- |",
    ...officialSeedLineRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 使用方式",
    "",
    "- 用官网公开标题作为内部试用起点，不直接视为最终内部型号。",
    "- 试用后补齐真实型号、图片、结构图、UI 截图、3D、认证、报价差异和文件路径。",
    "- 产品资料进入画布后，可继续启动产品设计冲刺、素材视频准备和报价前评审。",
  ].join("\n");
}

function exportOfficialSeedMarkdown() {
  downloadText(buildOfficialSeedMarkdown(), "winnsen-official-product-seed.md", "text/markdown");
  setStatus("已导出官网资料源");
}

function readinessPriorityForLine(line) {
  const normalized = String(line || "").toLowerCase();
  if (normalized.includes("parcel") || normalized.includes("laundry") || normalized.includes("flower")) return "P1";
  if (normalized.includes("refrigerator") || normalized.includes("mini mart") || normalized.includes("charging")) return "P2";
  return "P3";
}

function readinessLeadForLine(line) {
  const normalized = String(line || "").toLowerCase();
  if (normalized.includes("parcel")) return "产品设计 + 结构品审";
  if (normalized.includes("laundry")) return "产品设计 + 软件/API";
  if (normalized.includes("flower") || normalized.includes("refrigerator")) return "产品设计 + 视频生成";
  if (normalized.includes("mini mart")) return "销售报价 + 图库模型";
  if (normalized.includes("charging")) return "界面设计 + 结构品审";
  return "产品设计";
}

function readinessProductRows() {
  return publicProductSeedRows.map((item) => [
    item.model,
    item.line,
    readinessLeadForLine(item.line),
    readinessPriorityForLine(item.line),
    `${materialReadinessRequirements.length} 类资料`,
    item.title,
    item.sourceUrl,
  ]);
}

function readinessRoleRows() {
  return materialReadinessRequirements.map((item) => [
    item.area,
    item.owner,
    item.output,
    item.evidence,
    item.acceptance,
  ]);
}

function readinessGapRows() {
  return publicProductSeedRows.flatMap((product) =>
    materialReadinessRequirements.map((requirement) => [
      product.model,
      product.line,
      readinessPriorityForLine(product.line),
      requirement.area,
      requirement.owner,
      requirement.output,
      requirement.evidence,
      requirement.acceptance,
    ]),
  );
}

function addReadinessBoard() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "资料补齐" && node.title === "内部资料补齐台");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("内部资料补齐台已存在");
    render();
    return;
  }

  const stamp = Date.now();
  const baseX = 80 - state.offsetX / state.scale;
  const baseY = 80 - state.offsetY / state.scale;
  const boardId = `knowledge-readiness-board-${stamp}`;
  const productRows = readinessProductRows();
  const roleRows = readinessRoleRows();
  const gapRows = readinessGapRows();

  nodes.push({
    id: boardId,
    type: "knowledge",
    title: "内部资料补齐台",
    subtitle: `${productRows.length} 个官网种子产品 · ${gapRows.length} 项内部资料待补齐`,
    status: "内部试用",
    badge: "blue",
    x: baseX,
    y: baseY,
    category: "资料补齐",
    source: "官网公开资料种子包",
    reusableInsight: "把公开产品标题转成可分工的内部资料补齐任务，产品、结构、UI、素材、视频和报价各自有明确交付物。",
    validation: "每个 P1 产品至少完成产品资料、结构/BOM、UI/软件、图库模型、视频素材和报价认证 6 类资料。",
    learningRows: productRows,
    tags: ["内部试用", "资料补齐", "责任矩阵", "产品库"],
    tasks: gapRows
      .filter((row) => row[2] === "P1")
      .slice(0, 18)
      .map((row) => `${row[0]} · ${row[4]} 补齐 ${row[3]}：${row[6]}`),
    details: [
      ["产品种子", `${productRows.length} 个`],
      ["资料项", `${gapRows.length} 项`],
      ["责任角色", roleRows.map((row) => row[1]).join(" / ")],
    ],
  });

  roleRows.forEach((row, index) => {
    const id = `knowledge-readiness-role-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${row[0]} 责任卡`,
      subtitle: `${row[1]} · ${row[2]}`,
      status: "责任矩阵",
      badge: index % 2 === 0 ? "blue" : "green",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 230,
      category: "资料补齐",
      source: "内部资料补齐台",
      reusableInsight: `${row[1]} 负责将 ${row[0]} 从“待补齐”推进到可评审、可复用、可导出的资料资产。`,
      validation: row[4],
      learningRows: [["资料域", row[0]], ["负责人", row[1]], ["交付物", row[2]], ["证据", row[3]], ["验收", row[4]]],
      tags: ["资料补齐", row[0], row[1]],
      tasks: publicProductSeedRows
        .filter((product) => readinessPriorityForLine(product.line) !== "P3")
        .map((product) => `${product.model}：${row[3]}`),
      details: [
        ["交付物", row[2]],
        ["完成证据", row[3]],
        ["验收标准", row[4]],
      ],
    });
    links.push([boardId, id]);
  });

  publicProductSeedRows.forEach((product, index) => {
    const id = `knowledge-readiness-product-${product.model}-${stamp}`;
    const priority = readinessPriorityForLine(product.line);
    const importedProduct = nodes.find((node) => node.type === "product" && node.model === product.model);
    nodes.push({
      id,
      type: "knowledge",
      title: `${product.model} 内部资料补齐`,
      subtitle: `${product.line} · ${priority} · ${materialReadinessRequirements.length} 类资料`,
      status: priority,
      badge: priority === "P1" ? "red" : priority === "P2" ? "blue" : "green",
      x: baseX + (index % 2) * 390,
      y: baseY + 760 + Math.floor(index / 2) * 245,
      category: "资料补齐",
      source: "Winnsen 官网 Products",
      sourceUrl: product.sourceUrl,
      line: product.line,
      model: product.model,
      reusableInsight: `${product.title} 需要从官网公开标题补齐为内部可报价、可品审、可出视频的产品资料包。`,
      validation: "完成 6 类资料后，才能进入内部产品库、报价 Gate、素材库和视频生成流程。",
      learningRows: materialReadinessRequirements.map((item) => [item.area, item.owner, item.output, "待补齐"]),
      tags: ["资料补齐", product.line, product.model, priority],
      tasks: materialReadinessRequirements.map((item) => `${item.owner} 补齐 ${item.area}：${item.evidence}`),
      details: [
        ["公开标题", product.title],
        ["牵头角色", readinessLeadForLine(product.line)],
        ["来源链接", product.sourceUrl],
        ["内部验收", "补齐真实型号、文件路径、负责人和可复用资料后进入产品库。"],
      ],
    });
    links.push([boardId, id]);
    if (importedProduct) links.push([importedProduct.id, id]);
  });

  state.selectedId = boardId;
  persistWorkspace("已生成内部资料补齐任务");
  render();
}

function buildReadinessMarkdown() {
  return [
    "# Winnsen 内部资料补齐台",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 产品补齐队列",
    "",
    "| 型号 | 产品线 | 牵头 | 优先级 | 资料包 | 公开标题 | 来源 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...readinessProductRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 责任矩阵",
    "",
    "| 资料域 | 负责人 | 交付物 | 完成证据 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...readinessRoleRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 资料缺口明细",
    "",
    "| 型号 | 产品线 | 优先级 | 资料域 | 负责人 | 交付物 | 完成证据 | 验收 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...readinessGapRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
  ].join("\n");
}

function exportReadinessMarkdown() {
  downloadText(buildReadinessMarkdown(), "winnsen-material-readiness.md", "text/markdown");
  setStatus("已导出内部资料补齐表");
}

function currentProductTarget() {
  const selected = getSelectedNode();
  if (selected?.type === "product") return selected;
  const linkedProductId = links.find(([, to]) => to === selected?.id)?.[0];
  const linkedProduct = nodes.find((node) => node.id === linkedProductId && node.type === "product");
  return linkedProduct || nodes.find((node) => node.type === "product") || selected;
}

function productForWorkNode(workNode) {
  if (!workNode) return nodes.find((node) => node.type === "product");
  if (workNode.type === "product") return workNode;
  if (workNode.sourceProductId) {
    const direct = nodes.find((node) => node.id === workNode.sourceProductId && node.type === "product");
    if (direct) return direct;
  }
  const linkedFrom = links.find(([, to]) => to === workNode.id)?.[0];
  const productFromLink = nodes.find((node) => node.id === linkedFrom && node.type === "product");
  if (productFromLink) return productFromLink;
  const linkedTo = links.find(([from]) => from === workNode.id)?.[1];
  const productToLink = nodes.find((node) => node.id === linkedTo && node.type === "product");
  return productToLink || nodes.find((node) => node.type === "product");
}

function productForReview(review) {
  return productForWorkNode(review);
}

function valueFromDetails(node, key) {
  const detail = (node.details || []).find(([title]) => title === key);
  return detail?.[1] || "";
}

function flowProfileForProduct(product = {}) {
  const source = `${product.line || ""} ${product.title || ""} ${product.subtitle || ""}`.toLowerCase();
  if (source.includes("laundry")) {
    return {
      title: "洗衣柜投递/取回流程",
      subtitle: "会员识别 → 投递/取回 → 门格联动 → 状态通知",
      persona: "洗衣客户 / 店员 / 运营管理员",
      entryPoints: ["会员账户", "二维码", "RFID", "后台订单"],
      flowSteps: ["待机欢迎页", "选择投递或取回", "识别会员/订单", "打印或确认衣物标签", "指定门格开锁", "关门确认", "短信/邮件状态通知"],
      errorStates: ["会员未匹配", "打印机缺纸", "RFID 读取失败", "门未关闭", "第三方 API 离线"],
      uiChecklist: ["投递/取回入口清晰", "订单状态可追溯", "打印机维护提示", "异常门格重试", "后台与屏幕状态一致"],
      shots: ["酒店/健身房场景", "会员扫码或 RFID", "投递门打开", "打印标签细节", "后台订单状态"],
    };
  }
  if (source.includes("flower") || source.includes("food") || source.includes("pharmacy") || source.includes("vending")) {
    return {
      title: "售卖机购买流程",
      subtitle: "选品 → 支付 → 出货/开门 → 取货 → 售后提示",
      persona: "消费者 / 补货员 / 运营管理员",
      entryPoints: ["触摸屏选品", "扫码支付", "银行卡", "优惠券"],
      flowSteps: ["待机广告页", "浏览商品", "查看详情和库存", "支付确认", "出货或开门", "取货提醒", "订单完成/小票"],
      errorStates: ["支付失败", "商品缺货", "货道卡滞", "温控报警", "门未关闭"],
      uiChecklist: ["商品图清晰", "价格/库存同步", "支付状态明确", "取货位置提示", "温控/缺货告警", "补货员模式入口"],
      shots: ["商场/机场使用场景", "商品陈列和屏幕选品", "移动支付特写", "出货或开门动作", "温控/库存后台"],
    };
  }
  if (source.includes("charging")) {
    return {
      title: "充电柜租借流程",
      subtitle: "扫码 → 选择仓位 → 放入手机 → 充电/取回",
      persona: "手机用户 / 门店人员 / 运营管理员",
      entryPoints: ["扫码支付", "会员账户", "免费模式", "广告屏引导"],
      flowSteps: ["广告待机页", "扫码进入", "选择空仓位", "仓门开锁", "放入手机并开始充电", "取回验证", "订单结束"],
      errorStates: ["支付失败", "仓位已占用", "充电线异常", "门未关闭", "超时未取回"],
      uiChecklist: ["空仓位状态", "充电协议提示", "隐私和安全文案", "广告屏素材规格", "超时提醒"],
      shots: ["公共场景", "扫码租借", "仓门开合", "充电线细节", "广告屏播放"],
    };
  }
  return {
    title: "智能取件柜取件流程",
    subtitle: "验证码/扫码 → 开门 → 取件 → 关门确认",
    persona: "取件人 / 快递员 / 物业管理员",
    entryPoints: ["短信验证码", "二维码", "后台远程开门", "可选支付"],
    flowSteps: ["待机欢迎页", "输入或扫码取件码", "订单校验", "柜门开锁", "取件提示", "关门确认", "完成通知"],
    errorStates: ["验证码错误", "门未打开", "门未关闭", "网络离线", "锁控板异常"],
    uiChecklist: ["触控高度与视角", "门号高亮", "多语言文案", "弱网提示", "操作日志", "摄像头提示"],
    shots: ["社区/校园场景", "屏幕扫码/输入验证码", "柜门自动打开", "取件动作", "后台远程监控"],
  };
}

function uiFlowNodeForProduct(product, index = 0) {
  const profile = flowProfileForProduct(product);
  const model = product.model || product.title || "Product";
  return {
    type: "flow",
    title: `${model} ${profile.title}`,
    subtitle: profile.subtitle,
    status: "UI流程",
    badge: "blue",
    x: (product.x || 120) + 390,
    y: (product.y || 120) + 300 + index * 20,
    sourceProductId: product.id,
    persona: profile.persona,
    entryPoints: clone(profile.entryPoints),
    flowSteps: clone(profile.flowSteps),
    errorStates: clone(profile.errorStates),
    uiChecklist: clone(profile.uiChecklist),
    specs: ["UI Flow", product.line || "Winnsen", product.screen || "Touch screen"],
    modules: ["屏幕", "扫码/识别", "门锁联动", "后台状态", "异常提示"],
    tasks: ["补齐关键页面线框", "确认异常状态文案", "用样机验证屏幕流程和门锁状态"],
    details: [
      ["流程目标", "让产品设计、结构、电子和软件在同一张流程卡上确认入口、状态和异常。"],
      ["结构关联", "屏幕安装、扫码/摄像头角度、门号提示、锁控板状态和维护入口需要一起评审。"],
      ["下一步", "补充 UI 截图、页面状态、后台日志字段和客户语言版本。"],
    ],
  };
}

function videoPlanForProduct(product = {}) {
  const profile = flowProfileForProduct(product);
  const model = product.model || product.title || "Winnsen Product";
  const applications = product.applications || product.subtitle || "self-service scenarios";
  const specs = product.specs?.length ? product.specs.join(", ") : "remote management, customizable modules, touch screen operation";
  const shotPlan = [
    `${applications} 使用场景`,
    `${model} 产品全景和 45 度外观`,
    `${profile.flowSteps.slice(0, 3).join(" → ")} 屏幕流程`,
    `${(product.modules || profile.shots).slice(0, 3).join(" / ")} 结构细节`,
    `${product.software || "remote management platform"} 后台或运营画面`,
  ];
  return {
    duration: "30s",
    audience: "海外客户 / 销售 / 代理商",
    shotPlan,
    voiceover: `${model} supports ${applications}, combining ${specs} with reliable self-service operation and remote management.`,
    videoPrompt: `Create a clean product video for ${model}. Show ${applications}, product front and 45-degree view, touchscreen flow, door or vending action, module close-ups, and remote management dashboard. Professional industrial design lighting, realistic scene, clear Winnsen product details.`,
  };
}

function videoNodeForProduct(product, index = 0) {
  const plan = videoPlanForProduct(product);
  const model = product.model || product.title || "Product";
  return {
    type: "video",
    title: `${model} 视频生成计划`,
    subtitle: "卖点、镜头、旁白、字幕和 AI 视频 prompt",
    status: "脚本",
    badge: "amber",
    x: (product.x || 120) + 780,
    y: (product.y || 120) + 300 + index * 20,
    sourceProductId: product.id,
    duration: plan.duration,
    audience: plan.audience,
    shotPlan: plan.shotPlan,
    voiceover: plan.voiceover,
    videoPrompt: plan.videoPrompt,
    specs: ["Video", "Prompt", "Voiceover", product.line || "Winnsen"],
    tasks: ["补齐产品正面/45度/开门素材", "准备 UI 截图和后台画面", "生成英文旁白和字幕"],
    details: [
      ["镜头计划", plan.shotPlan.join("；")],
      ["旁白", plan.voiceover],
      ["AI 视频 prompt", plan.videoPrompt],
    ],
  };
}

function briefProfileForProduct(product = {}) {
  const source = `${product.line || ""} ${product.title || ""} ${product.subtitle || ""}`.toLowerCase();
  if (source.includes("laundry")) {
    return {
      requestType: "ODM 定制 / 系统集成",
      market: "酒店、健身房、医院、社区洗衣服务",
      requirements: ["投递/取回双流程", "RFID 或二维码识别", "打印衣物标签", "第三方系统 API", "短信/邮件提醒"],
      changeRequests: ["确认打印机维护方式", "确认 API 订单状态字段", "确认户外防水是否进入本版本"],
    };
  }
  if (source.includes("flower") || source.includes("food") || source.includes("pharmacy") || source.includes("vending")) {
    return {
      requestType: "售卖方案 / 支付与货道定制",
      market: "商场、机场、办公室、社区、医院或药房",
      requirements: ["商品展示与库存同步", "支付方式确认", "出货/开门动作", "温控或补货告警", "运营后台报表"],
      changeRequests: ["确认支付国家/币种", "确认货道或货格适配范围", "确认温控/冷藏资料和认证"],
    };
  }
  if (source.includes("charging")) {
    return {
      requestType: "共享充电 / 广告屏定制",
      market: "商场、酒吧、展会、公共服务点",
      requirements: ["扫码租借", "仓位状态显示", "充电协议确认", "广告屏素材", "超时提醒和远程状态"],
      changeRequests: ["确认充电线规格", "确认广告屏尺寸和素材比例", "确认免费/付费运营模式"],
    };
  }
  return {
    requestType: "ODM 定制 / 门数配置",
    market: "公寓、社区、校园、写字楼、物业服务",
    requirements: ["门数配置", "验证码/扫码取件", "远程管理平台", "摄像头或日志记录", "客户安装场景"],
    changeRequests: ["确认门数和柜体尺寸", "确认户外防水等级", "确认认证和安装资料"],
  };
}

function customerBriefNodeForProduct(product, index = 0) {
  const profile = briefProfileForProduct(product);
  const model = product.model || product.title || "Product";
  const market = product.applications || profile.market;
  return {
    type: "brief",
    title: `${model} 客户需求卡`,
    subtitle: `${product.line || "Winnsen"} · ${profile.requestType}`,
    status: "需求整理",
    badge: "amber",
    x: (product.x || 120) + 780,
    y: (product.y || 120) + 80 + index * 20,
    sourceProductId: product.id,
    customerName: `${product.line || "Winnsen"} 客户项目`,
    region: "国家/地区待确认",
    market,
    requestType: profile.requestType,
    quantity: "首批数量待确认",
    targetPrice: "按配置、结构、软件和认证范围核算",
    dueDate: "本周整理需求，下周进入方案评审",
    requirements: clone(profile.requirements),
    changeRequests: clone(profile.changeRequests),
    versionRows: [
      ["V0 需求版", "确认客户场景、门数/货道、屏幕、支付、软件、认证和素材范围", "待客户确认"],
      ["V1 方案版", "输出结构品审、UI 流程、素材清单、报价差异和视频方向", "准备中"],
    ],
    specs: ["Customer Brief", product.line || "Winnsen", product.model || "Model"],
    modules: ["客户需求", "版本差异", "报价范围", "品审输入", "素材输入"],
    tasks: ["确认客户场景和国家", "整理版本差异表", "输出方案评审包"],
    details: [
      ["客户目标", `把 ${model} 的客户场景、版本差异、报价边界和评审输入统一记录。`],
      ["版本重点", "把结构、UI、软件、素材、认证和成本影响拆成可确认的变更点。"],
      ["下一步", "用这张卡驱动品审清单、UI 流程、素材需求和视频脚本。"],
    ],
  };
}

function videoBriefRowsForSelected(selected) {
  const product = productForWorkNode(selected) || currentProductTarget();
  if (selected?.type === "video" && selected.shotPlan?.length) {
    return selected.shotPlan.slice(0, 5).map((item, index) => [`${String(index + 1).padStart(2, "0")} 镜头`, item]);
  }
  if (selected?.type === "flow" && selected.flowSteps?.length) {
    return [
      ["01 流程", selected.flowSteps.slice(0, 4).join(" → ")],
      ["02 异常", (selected.errorStates || []).slice(0, 4).join("、") || "补充异常状态"],
      ["03 素材", "需要屏幕截图、门/货道动作、后台状态和客户场景镜头。"],
    ];
  }
  const plan = videoPlanForProduct(product);
  return [
    ["01 场景", plan.shotPlan[0]],
    ["02 流程", plan.shotPlan[2]],
    ["03 细节", plan.shotPlan[3]],
    ["04 后台", plan.shotPlan[4]],
  ];
}

function knowledgeNodeFromReview(review, index = 0) {
  const product = productForReview(review) || {};
  const risk = review.impact || valueFromDetails(review, "风险") || review.subtitle || "待补充风险描述。";
  const action = valueFromDetails(review, "动作") || "把本次评审结论转为下次项目可复用的检查点。";
  const validation = review.validation || valueFromDetails(review, "验证方式") || "需要结构工程师、样机或供应商确认。";
  const question = review.question || valueFromDetails(review, "工程师问题") || "需要继续补充工程师验证问题。";
  const evidence = review.evidence?.length ? review.evidence : splitList(valueFromDetails(review, "所需资料"));
  const reusableInsight = `${review.category || "结构经验"}：${action}`;
  const learningRows = [
    ["产品类型", product.title || "适用于 Winnsen 智能柜/自助终端"],
    ["柜体结构", product.modules?.includes("柜体") || product.modules?.includes("冷藏柜体") ? "柜体模块需要记录加强、喷涂、安装和维护影响。" : "按项目补充柜体结构。"],
    ["门板结构", review.category?.includes("门") ? risk : "记录门板、门缝、开门角度和外观一致性经验。"],
    ["铰链方式", review.category?.includes("铰链") ? question : "按结构图补充铰链类型、调节方式和更换路径。"],
    ["锁具方式", review.category?.includes("锁") ? validation : "记录锁舌啮合、公差、应急开启和锁具更换方式。"],
    ["操作区安装", review.category?.includes("屏幕") || review.category?.includes("操作") ? risk : "记录屏幕、扫码器、摄像头、读卡器和线束出口经验。"],
    ["电子模块", review.category?.includes("电控") ? risk : "记录主板、电源、锁控板和电子托盘的维护方向。"],
    ["线束方式", review.category?.includes("线束") ? validation : "记录编号、防呆、固定点、余量和防夹路径。"],
    ["主要装配顺序", "优先沉淀预装模块、同向装配、统一螺丝、自定位和检查点。"],
    ["外观风险", review.category?.includes("外观") || review.category?.includes("钣金") ? risk : "记录门缝、大面变形、外露紧固件和喷涂影响。"],
    ["装配风险", review.category?.includes("装配") ? risk : "记录盲装、翻柜、换工具、返工和调试风险。"],
    ["维修风险", "记录锁、屏幕、电源、线束、打印机或冷藏模块是否可独立拆换。"],
    ["可复用经验", reusableInsight],
    ["需要继续确认", question],
  ];

  return {
    type: "knowledge",
    title: `${review.category || review.title}经验卡`,
    subtitle: `${product.title || "通用产品"} · ${review.title}`,
    status: "经验",
    badge: "green",
    x: (review.x || 120) + 390,
    y: (review.y || 120) + index * 18,
    category: review.category || "结构经验",
    sourceReviewId: review.id,
    sourceProductId: product.id,
    reusableInsight,
    validation,
    question,
    impact: risk,
    evidence,
    learningRows,
    tags: [review.category || "结构经验", product.line || "Winnsen", "品审沉淀"],
    details: [
      ["来源品审", review.title],
      ["风险", risk],
      ["复用经验", reusableInsight],
      ["验证方式", validation],
      ["工程师问题", question],
      ["所需资料", evidence.join("、") || "待补充资料。"],
    ],
  };
}

function reviewNodeFromTemplate(template, product, index = 0) {
  return {
    type: "review",
    title: `${template.title}评审`,
    subtitle: `${product.title || "产品"} · ${template.summary}`,
    status: template.priority,
    badge: template.priority === "P1" ? "red" : "amber",
    x: (product.x || 120) + 390 + (index % 2) * 360,
    y: (product.y || 120) + Math.floor(index / 2) * 190,
    owner: template.owner,
    due: template.due,
    category: template.category,
    reviewTemplate: template.id,
    validation: template.validation,
    question: template.question,
    impact: template.risk,
    evidence: clone(template.evidence),
    tasks: [`${template.title}：${template.validation}`],
    details: [
      ["风险", template.risk],
      ["动作", template.action],
      ["验证方式", template.validation],
      ["工程师问题", template.question],
      ["所需资料", template.evidence.join("、")],
    ],
  };
}

function addReviewTemplate(id) {
  const template = reviewTemplateLibrary.find((item) => item.id === id);
  const product = currentProductTarget();
  if (!template || !product) return;
  const idCreated = addNode(reviewNodeFromTemplate(template, product));
  links.push([product.id, idCreated]);
  persistWorkspace("已添加品审模板");
  render();
}

function addFullReviewChecklist() {
  const product = currentProductTarget();
  if (!product) return;
  const stamp = Date.now();
  const createdIds = [];

  reviewTemplateLibrary.forEach((template, index) => {
    const id = `review-template-${template.id}-${stamp}`;
    nodes.push({
      id,
      ...reviewNodeFromTemplate(template, product, index),
    });
    links.push([product.id, id]);
    createdIds.push(id);
  });

  state.selectedId = createdIds[0] || product.id;
  persistWorkspace("已生成整套品审清单");
  render();
}

function addKnowledgeFromReview(review) {
  if (!review || review.type !== "review") return null;
  const existing = nodes.find((node) => node.type === "knowledge" && node.sourceReviewId === review.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该品审已沉淀");
    render();
    return existing.id;
  }
  const id = `knowledge-review-${review.id}-${Date.now()}`;
  const knowledgeNode = {
    id,
    ...knowledgeNodeFromReview(review),
  };
  nodes.push(knowledgeNode);
  links.push([review.id, id]);
  state.selectedId = id;
  persistWorkspace("已沉淀经验卡");
  render();
  return id;
}

function addKnowledgeFromCurrentReview() {
  const selected = getSelectedNode();
  if (selected?.type === "review") {
    addKnowledgeFromReview(selected);
    return;
  }
  const firstPending = nodes.find(
    (node) => node.type === "review" && !nodes.some((item) => item.type === "knowledge" && item.sourceReviewId === node.id),
  );
  if (firstPending) {
    addKnowledgeFromReview(firstPending);
    return;
  }
  setStatus("暂无待沉淀品审");
}

function addKnowledgeFromAllReviews() {
  const reviews = nodes.filter((node) => node.type === "review");
  const existingReviewIds = new Set(nodes.filter((node) => node.type === "knowledge").map((node) => node.sourceReviewId).filter(Boolean));
  const pendingReviews = reviews.filter((review) => !existingReviewIds.has(review.id));
  if (!pendingReviews.length) {
    setStatus("暂无待沉淀品审");
    return;
  }
  const createdIds = [];
  pendingReviews.forEach((review, index) => {
    const id = `knowledge-review-${review.id}-${Date.now()}-${index}`;
    nodes.push({
      id,
      ...knowledgeNodeFromReview(review, index),
    });
    links.push([review.id, id]);
    createdIds.push(id);
  });
  state.selectedId = createdIds[0];
  persistWorkspace(`已沉淀 ${createdIds.length} 条经验`);
  render();
}

function addCustomerBriefForProduct(product, index = 0) {
  if (!product || product.type !== "product") return null;
  const existing = nodes.find((node) => node.type === "brief" && node.sourceProductId === product.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该产品已有客户需求卡");
    render();
    return existing.id;
  }
  const id = `brief-product-${product.id}-${Date.now()}-${index}`;
  nodes.push({
    id,
    ...customerBriefNodeForProduct(product, index),
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成客户需求卡");
  render();
  return id;
}

function addCustomerBriefForCurrentProduct() {
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  if (!product || product.type !== "product") {
    setStatus("请先选择产品卡");
    return;
  }
  addCustomerBriefForProduct(product);
}

function addCustomerBriefsForAllProducts() {
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithBrief = new Set(nodes.filter((node) => node.type === "brief").map((node) => node.sourceProductId).filter(Boolean));
  const pending = products.filter((product) => !productIdsWithBrief.has(product.id));
  if (!pending.length) {
    setStatus("所有产品已有客户需求卡");
    return;
  }
  const createdIds = [];
  pending.forEach((product, index) => {
    const id = `brief-product-${product.id}-${Date.now()}-${index}`;
    nodes.push({
      id,
      ...customerBriefNodeForProduct(product, index),
    });
    links.push([product.id, id]);
    createdIds.push(id);
  });
  state.selectedId = createdIds[0];
  persistWorkspace(`已生成 ${createdIds.length} 张客户需求卡`);
  render();
}

function addAssetPackForProduct(product, index = 0) {
  if (!product || product.type !== "product") return null;
  const existing = nodes.find((node) => node.type === "asset" && node.sourceProductId === product.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该产品已有素材包");
    render();
    return existing.id;
  }
  const id = `asset-product-${product.id}-${Date.now()}-${index}`;
  nodes.push({
    id,
    ...assetNeedNodeForProduct(product),
    x: (product.x || 120) + 780,
    y: (product.y || 120) + 520 + index * 20,
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成素材需求包");
  render();
  return id;
}

function addAssetPackForCurrentProduct() {
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  if (!product || product.type !== "product") {
    setStatus("请先选择产品卡");
    return;
  }
  addAssetPackForProduct(product);
}

function addAssetPacksForAllProducts() {
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithAsset = new Set(nodes.filter((node) => node.type === "asset").map((node) => node.sourceProductId).filter(Boolean));
  const pending = products.filter((product) => !productIdsWithAsset.has(product.id));
  if (!pending.length) {
    setStatus("所有产品已有素材包");
    return;
  }
  const createdIds = [];
  pending.forEach((product, index) => {
    const id = `asset-product-${product.id}-${Date.now()}-${index}`;
    nodes.push({
      id,
      ...assetNeedNodeForProduct(product),
      x: (product.x || 120) + 780,
      y: (product.y || 120) + 520 + index * 20,
    });
    links.push([product.id, id]);
    createdIds.push(id);
  });
  state.selectedId = createdIds[0];
  persistWorkspace(`已生成 ${createdIds.length} 个素材包`);
  render();
}

function addFileLedgerForCurrentProduct() {
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  if (!product || product.type !== "product") {
    setStatus("请先选择产品卡");
    return;
  }
  const existing = nodes.find(
    (node) => node.type === "asset" && node.sourceProductId === product.id && String(node.assetType || "").includes("File Ledger"),
  );
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该产品已有文件台账");
    render();
    return;
  }
  const base = assetNeedNodeForProduct(product);
  const id = `asset-file-ledger-${product.id}-${Date.now()}`;
  nodes.push({
    id,
    ...base,
    title: `${product.model || product.title} 文件入库台账`,
    subtitle: `${product.line || "产品线"} · 图片、结构、UI、3D、视频、客户资料`,
    status: "入库台账",
    assetType: "File Ledger",
    approvalStatus: "待逐项审核",
    x: (product.x || 120) + 820,
    y: (product.y || 120) + 680,
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成文件入库台账");
  render();
}

function addProjectFileLedgerPack() {
  const existing = nodes.find((node) => node.type === "asset" && node.assetType === "Project File Ledger");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("已有客户项目文件总台账");
    render();
    return;
  }
  const rows = customerProjectCatalog.flatMap((project) => {
    const product = productCatalogItemForProject(project);
    return assetFileRowsForProduct(
      {
        model: product.model,
        line: product.line,
        title: product.title,
      },
      project.requiredMaterials,
    ).map((row) => [
      `${project.title} / ${row[0]}`,
      row[1],
      row[2],
      row[3],
      row[4],
      row[5],
      `${project.customerName} · ${project.region} · ${row[6]}`,
      row[7],
    ]);
  });
  const id = `asset-project-file-ledger-${Date.now()}`;
  nodes.push({
    id,
    type: "asset",
    title: "客户项目文件入库总台账",
    subtitle: "报价前项目所需图片、结构、UI、3D、视频和客户资料",
    status: "项目台账",
    badge: "violet",
    x: 140 - state.offsetX / state.scale,
    y: 160 - state.offsetY / state.scale,
    assetType: "Project File Ledger",
    relatedProduct: "Customer Projects",
    usage: "报价前资料准备、素材入库、项目评审、视频生成",
    formats: ["JPG", "PNG", "PDF", "DWG", "STEP", "GLB", "MP4", "Figma"],
    tags: ["客户项目", "报价前", "文件台账", "素材入库"],
    storagePath: "Winnsen/Projects/Customer-Files/",
    assetOwner: "产品/市场/销售/结构",
    assetVersion: "v0",
    source: "客户项目库",
    approvalStatus: "待逐项审核",
    requiredAssets: rows.map((row) => row[0]),
    missingAssets: rows.filter((row) => /待|缺口|补/.test(row[5])).map((row) => row[0]),
    fileRows: rows,
    specs: ["Project File Ledger", `${customerProjectCatalog.length} projects`, `${rows.length} files`],
    tasks: ["补齐客户项目资料路径", "确认公开/内部/脱敏等级", "按项目输出文件缺口清单"],
    details: [
      ["项目数", `${customerProjectCatalog.length} 个客户项目模板`],
      ["文件数", `${rows.length} 个文件条目`],
      ["下一步", "把真实文件路径、版本、审批状态和负责人补齐。"],
    ],
  });
  state.selectedId = id;
  persistWorkspace("已生成客户项目文件总台账");
  render();
}

function buildFileLedgerMarkdown(rows = fileLedgerRows()) {
  return [
    "# Winnsen 文件入库台账",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 产品/项目 | 素材包 | 文件 | 类型 | 格式 | 负责人 | 路径 | 状态 | 用途 | 公开等级 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...rows.map((row) =>
      [
        row.productTitle,
        row.assetTitle,
        row.name,
        row.kind,
        row.formats,
        row.owner,
        row.path,
        row.status,
        row.usage,
        row.visibility,
      ]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 使用建议",
    "",
    "- 路径：按产品线 / 型号 / 文件类型维护，避免项目资料散落在聊天记录或个人电脑。",
    "- 状态：缺口、待入库、待审核、已入库四类足够支撑报价前评审。",
    "- 公开等级：结构图和 3D 模型默认内部脱敏，客户案例和视频素材需确认授权。",
  ].join("\n");
}

function exportFileLedgerMarkdown() {
  const rows = fileLedgerRows();
  if (!rows.length) {
    setStatus("暂无文件台账可导出");
    return;
  }
  downloadText(buildFileLedgerMarkdown(rows), "winnsen-file-ledger.md", "text/markdown");
  setStatus("已导出文件台账");
}

function openSourceReferenceRows() {
  return openSourceReferenceCatalog.map((item) => [
    item.product,
    item.role,
    item.borrow,
    item.winnsenUse,
    item.buildScope,
    item.risk,
  ]);
}

function githubReferenceEvidenceRows() {
  return openSourceReferenceCatalog.map((item) => [
    item.product,
    item.repo,
    `${item.stars} stars / ${item.forks} forks`,
    item.activity,
    item.license,
    item.maturitySignal,
    item.adoptDecision,
    item.licenseAction,
  ]);
}

function roadmapRows() {
  return productRoadmapMilestones.map((item) => [
    item.phase,
    item.goal,
    item.scope,
    item.owner,
    item.evidence,
  ]);
}

function addOpenSourceReferenceMap() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "开源参考" && node.title === "GitHub 开源无限画布参考图谱");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("参考图谱已存在");
    render();
    return;
  }

  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 120 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-open-source-reference-${stamp}`;

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "GitHub 开源无限画布参考图谱",
    subtitle: "tldraw / Excalidraw / AFFiNE / AppFlowy 借鉴点与 Winnsen 内部落地差异",
    status: "参考",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "开源参考",
    reusableInsight: "借鉴开源产品的画布、导出、知识库和项目管理能力，但产品定位聚焦 Winnsen 报价前、品审、素材和视频工作流。",
    validation: "每个参考产品只抽取可迁移模式，正式技术选型前复核 license、数据安全和团队协作成本。",
    sourceRepo: openSourceReferenceCatalog.map((item) => item.repo).join(" / "),
    learningRows: openSourceReferenceRows(),
    tags: ["GitHub", "无限画布", "开源参考", "产品路线"],
    tasks: ["确认技术选型边界", "把开源参考转为 Winnsen 自定义节点 schema", "评估授权、协作、导出和本地数据策略"],
    details: [
      ["产品定位", "不做通用白板，而是做 Winnsen 产品设计、界面设计、品审、知识库、图库模型库和视频生成的业务画布。"],
      ["仿照方式", "借鉴交互与架构模式，不复制授权受限代码或品牌资产。"],
      ["优先验证", "自定义节点、JSON 工作区、报告导出、素材文件台账和 AI 生成节点。"],
    ],
  });

  openSourceReferenceCatalog.forEach((item, index) => {
    const id = `knowledge-reference-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.product} 借鉴点`,
      subtitle: `${item.repo} · ${item.role}`,
      status: "参考",
      badge: index % 2 === 0 ? "green" : "violet",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 300,
      category: "开源参考",
      referenceProduct: item.product,
      sourceRepo: item.repo,
      sourceUrl: item.url,
      reusableInsight: item.winnsenUse,
      validation: item.buildScope,
      impact: item.risk,
      evidence: [item.url, item.repo, item.role],
      learningRows: [
        ["参考产品", item.product],
        ["GitHub", item.repo],
        ["借鉴能力", item.borrow],
        ["Winnsen 用途", item.winnsenUse],
        ["实现范围", item.buildScope],
        ["风险", item.risk],
      ],
      tags: ["开源参考", item.product, item.role],
      tasks: [`评估 ${item.product} 对 Winnsen Canvas 的可借鉴实现`, "整理授权与技术边界", "把借鉴点转为内部需求"],
      details: [
        ["GitHub", item.url],
        ["可借鉴", item.borrow],
        ["Winnsen 落地", item.winnsenUse],
        ["实现范围", item.buildScope],
        ["风险", item.risk],
      ],
    });
    links.push([mapId, id]);
  });

  state.selectedId = mapId;
  persistWorkspace("已生成开源参考图谱");
  render();
}

function addGitHubReferenceEvidenceBoard() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "GitHub 参考证据" && node.title === "GitHub 成熟产品参考证据台");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("GitHub 参考证据台已存在");
    render();
    return;
  }

  const baseX = 150 - state.offsetX / state.scale;
  const baseY = 150 - state.offsetY / state.scale;
  const stamp = Date.now();
  const boardId = `knowledge-github-reference-evidence-${stamp}`;

  nodes.push({
    id: boardId,
    type: "knowledge",
    title: "GitHub 成熟产品参考证据台",
    subtitle: "把 tldraw、Excalidraw、AFFiNE、AppFlowy、draw.io 的成熟信号转成 Winnsen 仿照决策",
    status: "证据台",
    badge: "violet",
    x: baseX,
    y: baseY,
    category: "GitHub 参考证据",
    reusableInsight: "内部评审不仅要说仿照谁，还要说清楚成熟信号、授权边界、可借鉴能力和 Winnsen 落地动作。",
    validation: "每个参考产品都有 GitHub repo、成熟信号、license 动作和 Winnsen 采纳决策。",
    sourceRepo: openSourceReferenceCatalog.map((item) => item.repo).join(" / "),
    learningRows: githubReferenceEvidenceRows(),
    tags: ["GitHub", "成熟产品", "参考证据", "技术边界"],
    tasks: ["把参考证据写入评审包", "确认 license 和商用边界", "把采纳决策转为 P1/P2 开发验证任务"],
    details: [
      ["核对日期", "2026-06-08"],
      ["证据来源", "GitHub 仓库 README、About、license 信息和 GitHub API repo 元数据。"],
      ["采纳原则", "优先借鉴产品模式和信息架构；不复制品牌、素材、授权受限代码或模板资产。"],
    ],
  });

  openSourceReferenceCatalog.forEach((item, index) => {
    const id = `knowledge-github-evidence-${item.id}-${stamp}`;
    const needsLicenseCheck = /AGPL|自定义|mixed|unknown|额外条款/i.test(item.license) || /需|复核|确认/.test(item.licenseAction);
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.product} GitHub 证据卡`,
      subtitle: `${item.repo} · ${item.stars} stars · ${item.license}`,
      status: needsLicenseCheck ? "需复核" : "可参考",
      badge: needsLicenseCheck ? "amber" : "green",
      x: baseX + 420 + (index % 2) * 430,
      y: baseY + Math.floor(index / 2) * 285,
      category: "GitHub 参考证据",
      referenceProduct: item.product,
      sourceRepo: item.repo,
      sourceUrl: item.url,
      repoStats: `${item.stars} stars / ${item.forks} forks`,
      license: item.license,
      activity: item.activity,
      maturitySignal: item.maturitySignal,
      adoptDecision: item.adoptDecision,
      reusableInsight: item.adoptDecision,
      validation: item.licenseAction,
      impact: item.maturitySignal,
      evidence: [item.url, item.repo, item.activity, item.license],
      learningRows: [
        ["参考产品", item.product],
        ["GitHub", item.repo],
        ["成熟信号", `${item.stars} stars / ${item.forks} forks；${item.activity}`],
        ["License", item.license],
        ["可借鉴证据", item.maturitySignal],
        ["Winnsen 决策", item.adoptDecision],
        ["边界动作", item.licenseAction],
      ],
      tags: ["GitHub 证据", item.product, item.license],
      tasks: [item.licenseAction, item.adoptDecision, `把 ${item.role} 转成 Winnsen 内部试用验收项`],
      details: [
        ["GitHub", item.url],
        ["成熟信号", `${item.stars} stars / ${item.forks} forks；${item.activity}`],
        ["License", item.license],
        ["可借鉴证据", item.maturitySignal],
        ["采纳决策", item.adoptDecision],
        ["边界动作", item.licenseAction],
      ],
    });
    links.push([boardId, id]);
  });

  state.selectedId = boardId;
  persistWorkspace("已生成 GitHub 参考证据台");
  render();
}

function addWinnsenRoadmap() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "产品路线" && node.title === "Winnsen Product Canvas 产品路线图");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("产品路线图已存在");
    render();
    return;
  }

  const baseX = 140 - state.offsetX / state.scale;
  const baseY = 180 - state.offsetY / state.scale;
  const stamp = Date.now();
  const roadmapId = `knowledge-winnsen-roadmap-${stamp}`;

  nodes.push({
    id: roadmapId,
    type: "knowledge",
    title: "Winnsen Product Canvas 产品路线图",
    subtitle: "从静态原型到 Winnsen 内部产品工作流系统",
    status: "路线",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "产品路线",
    reusableInsight: "先把产品资料、报价前评审和素材台账跑通，再升级为协作、AI 和企业集成。",
    validation: "每个阶段必须有真实资料、真实项目或真实会议使用记录作为进入下一阶段的证据。",
    learningRows: roadmapRows(),
    tags: ["产品路线", "Winnsen Canvas", "MVP", "内部工具"],
    tasks: ["用真实产品资料跑 P1", "选择画布引擎", "定义团队协作和文件权限", "确定 AI 工作流接入顺序"],
    details: [
      ["核心用户", "产品设计、界面设计、产品品审、销售、市场、结构和软件协作人员。"],
      ["核心对象", "产品型号、客户项目、需求版本、品审问题、UI 流程、素材文件、知识卡和视频脚本。"],
      ["判断标准", "能否减少报价前资料混乱、重复沟通、素材缺口和评审遗漏。"],
    ],
  });

  productRoadmapMilestones.forEach((item, index) => {
    const id = `knowledge-roadmap-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.phase} · ${item.goal}`,
      subtitle: item.scope,
      status: item.phase,
      badge: index < 2 ? "amber" : "blue",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 270,
      category: "产品路线",
      phase: item.phase,
      goal: item.goal,
      reusableInsight: item.scope,
      validation: item.evidence,
      owner: item.owner,
      learningRows: [
        ["阶段", item.phase],
        ["目标", item.goal],
        ["范围", item.scope],
        ["负责人", item.owner],
        ["完成证据", item.evidence],
      ],
      tags: ["产品路线", item.phase, item.goal],
      tasks: [`推进 ${item.phase}：${item.goal}`, item.evidence],
      details: [
        ["阶段", item.phase],
        ["目标", item.goal],
        ["范围", item.scope],
        ["负责人", item.owner],
        ["完成证据", item.evidence],
      ],
    });
    links.push([roadmapId, id]);
  });

  state.selectedId = roadmapId;
  persistWorkspace("已生成产品路线图");
  render();
}

function buildRoadmapMarkdown() {
  return [
    "# Winnsen Product Canvas 开源参考与产品路线",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## GitHub 开源参考",
    "",
    "| 产品 | Repo | 借鉴定位 | 可借鉴能力 | Winnsen 落地 | 实现范围 | 风险 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...openSourceReferenceCatalog.map((item) =>
      [
        item.product,
        item.repo,
        item.role,
        item.borrow,
        item.winnsenUse,
        item.buildScope,
        item.risk,
      ]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## GitHub 参考证据",
    "",
    "| 产品 | Repo | 成熟度 | 活跃信号 | License | 可借鉴证据 | Winnsen 采纳决策 | 边界动作 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...githubReferenceEvidenceRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## Winnsen 产品路线",
    "",
    "| 阶段 | 目标 | 范围 | 负责人 | 完成证据 |",
    "| --- | --- | --- | --- | --- |",
    ...productRoadmapMilestones.map((item) =>
      [item.phase, item.goal, item.scope, item.owner, item.evidence]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 产品结论",
    "",
    "- tldraw：更像未来画布引擎或 SDK 候选。",
    "- Excalidraw：借鉴轻量表达、低学习成本和开放导出。",
    "- AFFiNE：借鉴文档、画布、数据库和知识库合一的组织方式。",
    "- AppFlowy：借鉴项目、任务、Wiki 和数据控制权。",
    "- draw.io：借鉴成熟图表模板和企业流程表达，但模板资产和协作边界要单独复核。",
    "- Winnsen 版本：重点不是通用白板，而是产品资料、客户项目、报价 Gate、品审、素材、文件台账、知识库和视频生成的闭环。",
  ].join("\n");
}

function exportRoadmapMarkdown() {
  downloadText(buildRoadmapMarkdown(), "winnsen-product-canvas-roadmap.md", "text/markdown");
  setStatus("已导出产品路线");
}

function teamRoleRows() {
  return teamRoleCatalog.map((item) => [
    item.role,
    item.team,
    item.permissions,
    item.inputs,
    item.outputs,
    item.handoff,
  ]);
}

function teamHandoffRows() {
  return teamHandoffStages.map((item) => [
    item.phase,
    item.owner,
    item.trigger,
    item.deliverable,
    item.next,
  ]);
}

function addTeamRoleMatrix() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "团队角色" && node.title === "Winnsen 团队角色与权限矩阵");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("团队角色矩阵已存在");
    render();
    return;
  }

  const baseX = 160 - state.offsetX / state.scale;
  const baseY = 140 - state.offsetY / state.scale;
  const stamp = Date.now();
  const matrixId = `knowledge-team-role-matrix-${stamp}`;

  nodes.push({
    id: matrixId,
    type: "knowledge",
    title: "Winnsen 团队角色与权限矩阵",
    subtitle: "产品设计、UI、品审、图库模型、视频、销售、软件和管理评审的协作边界",
    status: "协作",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "团队角色",
    reusableInsight: "把角色权限、输入、输出和交接对象固定下来，避免报价前资料散落、职责不清和重复沟通。",
    validation: "用真实客户项目跑一轮，检查每个角色是否能从画布拿到输入并交付输出。",
    learningRows: teamRoleRows(),
    tags: ["团队协作", "权限矩阵", "角色", "Winnsen"],
    tasks: ["确认每个角色的真实负责人", "把权限矩阵映射到未来账号权限", "用一个客户项目试跑交接"],
    details: [
      ["使用场景", "报价前会议、产品品审、素材准备、视频生成、客户方案和管理决策。"],
      ["权限原则", "销售可创建需求，产品维护路线和评审，结构维护品审，市场维护素材和视频，管理查看 Gate 和路线。"],
      ["下一步", "把角色矩阵转成账号权限、评论权限、文件可见性和审批流。"],
    ],
  });

  teamRoleCatalog.forEach((item, index) => {
    const id = `knowledge-team-role-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.role}工作台`,
      subtitle: `${item.team} · ${item.outputs}`,
      status: "角色",
      badge: index % 2 === 0 ? "blue" : "green",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 260,
      category: "团队角色",
      roleName: item.role,
      team: item.team,
      permissions: item.permissions,
      inputs: item.inputs,
      outputs: item.outputs,
      handoff: item.handoff,
      reusableInsight: `${item.role}：${item.outputs}`,
      validation: item.permissions,
      learningRows: [
        ["角色", item.role],
        ["团队", item.team],
        ["权限", item.permissions],
        ["输入", item.inputs],
        ["输出", item.outputs],
        ["交接", item.handoff],
      ],
      tags: ["团队角色", item.role, item.team],
      tasks: [`确认 ${item.role} 负责人`, `定义 ${item.role} 的可编辑字段和审批权限`],
      details: [
        ["团队", item.team],
        ["权限", item.permissions],
        ["输入", item.inputs],
        ["输出", item.outputs],
        ["交接", item.handoff],
      ],
    });
    links.push([matrixId, id]);
  });

  state.selectedId = matrixId;
  persistWorkspace("已生成团队角色矩阵");
  render();
}

function addTeamHandoffWorkflow() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "交接流程" && node.title === "Winnsen 报价前团队交接流程");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("团队交接流程已存在");
    render();
    return;
  }

  const baseX = 170 - state.offsetX / state.scale;
  const baseY = 190 - state.offsetY / state.scale;
  const stamp = Date.now();
  const workflowId = `knowledge-team-handoff-workflow-${stamp}`;
  const createdIds = [];

  nodes.push({
    id: workflowId,
    type: "knowledge",
    title: "Winnsen 报价前团队交接流程",
    subtitle: "从客户机会到知识库复盘的 7 步协作闭环",
    status: "流程",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "交接流程",
    reusableInsight: "把客户机会、Gate、品审、UI、素材、视频和知识库复盘串成固定流程。",
    validation: "每一步必须有交付物和下一步负责人，才允许进入报价或客户方案。",
    learningRows: teamHandoffRows(),
    tags: ["团队协作", "交接流程", "报价前", "Winnsen"],
    tasks: ["把 7 步流程用于一个真实客户项目", "定义每一步的完成状态", "补充自动提醒和审批节点"],
    details: [
      ["流程目的", "减少报价前漏项、重复追资料、跨部门口头确认和评审结论丢失。"],
      ["进入条件", "销售或产品创建客户机会，至少包含国家、产品线、数量、交期和定制需求。"],
      ["退出条件", "形成可报价判断、客户方案包、素材缺口或技术评审结论。"],
    ],
  });

  teamHandoffStages.forEach((item, index) => {
    const id = `knowledge-team-handoff-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: item.phase,
      subtitle: `${item.owner} · ${item.deliverable}`,
      status: "交接",
      badge: index < 2 ? "amber" : "blue",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 260,
      category: "交接流程",
      owner: item.owner,
      reusableInsight: item.deliverable,
      validation: item.next,
      learningRows: [
        ["阶段", item.phase],
        ["负责人", item.owner],
        ["触发", item.trigger],
        ["交付物", item.deliverable],
        ["下一步", item.next],
      ],
      tags: ["交接流程", item.phase, item.owner],
      tasks: [`${item.phase}：确认交付物`, `${item.phase}：交给 ${item.next}`],
      details: [
        ["负责人", item.owner],
        ["触发", item.trigger],
        ["交付物", item.deliverable],
        ["下一步", item.next],
      ],
    });
    links.push([workflowId, id]);
    if (createdIds.length) links.push([createdIds[createdIds.length - 1], id]);
    createdIds.push(id);
  });

  state.selectedId = workflowId;
  persistWorkspace("已生成团队交接流程");
  render();
}

function buildTeamWorkflowMarkdown() {
  return [
    "# Winnsen 团队协作与权限矩阵",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 角色权限",
    "",
    "| 角色 | 团队 | 权限 | 输入 | 输出 | 交接 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...teamRoleCatalog.map((item) =>
      [item.role, item.team, item.permissions, item.inputs, item.outputs, item.handoff]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 报价前交接流程",
    "",
    "| 阶段 | 负责人 | 触发 | 交付物 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...teamHandoffStages.map((item) =>
      [item.phase, item.owner, item.trigger, item.deliverable, item.next]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 使用建议",
    "",
    "- 先用一个真实客户项目试跑角色矩阵，记录每一步谁负责、缺什么资料、什么时候可报价。",
    "- 后续账号权限按角色拆分：销售创建需求，产品维护路线和 Gate，结构维护品审，市场维护素材和视频，管理查看决策表。",
    "- 每个文件条目都应有负责人、状态、公开等级和用途，避免客户资料、结构图和视频素材混在一起。",
  ].join("\n");
}

function exportTeamWorkflowMarkdown() {
  downloadText(buildTeamWorkflowMarkdown(), "winnsen-team-workflow.md", "text/markdown");
  setStatus("已导出团队协作");
}

function dataModelRows() {
  return dataModelCatalog.map((item) => [
    item.entity,
    item.purpose,
    item.fields,
    item.owner,
    item.storage,
    item.acceptance,
  ]);
}

function mvpDeliveryRows() {
  return mvpDeliveryCatalog.map((item) => [
    item.priority,
    item.module,
    item.scope,
    item.build,
    item.acceptance,
  ]);
}

function addDataModelMap() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "数据模型" && node.title === "Winnsen Canvas 数据模型总览");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("数据模型总览已存在");
    render();
    return;
  }

  const baseX = 180 - state.offsetX / state.scale;
  const baseY = 140 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-data-model-map-${stamp}`;

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "Winnsen Canvas 数据模型总览",
    subtitle: "从静态画布升级到真实系统所需的核心实体和字段",
    status: "Schema",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "数据模型",
    reusableInsight: "用统一 CanvasNode 承载画布形态，用业务实体表承载产品、项目、Gate、品审、素材、知识和视频数据。",
    validation: "导入导出 JSON、报告生成、权限控制和搜索都必须基于同一套 schema。",
    learningRows: dataModelRows(),
    tags: ["数据模型", "Schema", "开发规格", "MVP"],
    tasks: ["确认正式数据库实体", "定义节点扩展字段 JSONB", "把文件台账和权限矩阵转成正式表结构"],
    details: [
      ["核心原则", "画布负责空间关系，业务表负责可查询、可统计、可权限控制的数据。"],
      ["数据来源", "CSV、官网产品资料、客户项目、素材路径、Figma、NAS/云盘、CRM/ERP。"],
      ["下一步", "把每个实体转成开发任务、接口字段和验收用例。"],
    ],
  });

  dataModelCatalog.forEach((item, index) => {
    const id = `knowledge-schema-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.entity} 数据模型`,
      subtitle: `${item.owner} · ${item.purpose}`,
      status: "Schema",
      badge: index % 2 === 0 ? "green" : "blue",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 250,
      category: "数据模型",
      entityName: item.entity,
      fields: item.fields,
      owner: item.owner,
      storage: item.storage,
      acceptance: item.acceptance,
      reusableInsight: item.purpose,
      validation: item.acceptance,
      learningRows: [
        ["实体", item.entity],
        ["用途", item.purpose],
        ["字段", item.fields],
        ["负责人", item.owner],
        ["存储", item.storage],
        ["验收", item.acceptance],
      ],
      tags: ["数据模型", item.entity, item.owner],
      tasks: [`定义 ${item.entity} 字段和接口`, `补充 ${item.entity} 权限和验收测试`],
      details: [
        ["用途", item.purpose],
        ["字段", item.fields],
        ["负责人", item.owner],
        ["存储", item.storage],
        ["验收", item.acceptance],
      ],
    });
    links.push([mapId, id]);
  });

  state.selectedId = mapId;
  persistWorkspace("已生成数据模型总览");
  render();
}

function addMvpDeliverySpec() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "MVP规格" && node.title === "Winnsen Canvas MVP 开发规格");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("MVP 开发规格已存在");
    render();
    return;
  }

  const baseX = 190 - state.offsetX / state.scale;
  const baseY = 180 - state.offsetY / state.scale;
  const stamp = Date.now();
  const specId = `knowledge-mvp-delivery-${stamp}`;

  nodes.push({
    id: specId,
    type: "knowledge",
    title: "Winnsen Canvas MVP 开发规格",
    subtitle: "从当前原型到可试点内部系统的模块范围、优先级和验收标准",
    status: "MVP",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "MVP规格",
    reusableInsight: "先交付画布核心、产品资料库、客户项目 Gate，再逐步扩展知识库、素材台账、AI 和权限协作。",
    validation: "每个模块都有明确使用场景、交付范围和可验证验收标准。",
    learningRows: mvpDeliveryRows(),
    tags: ["MVP", "开发规格", "验收标准", "内部试点"],
    tasks: ["拆分 P0 开发任务", "确定 P1 数据来源", "选择画布引擎和存储架构"],
    details: [
      ["P0 范围", "无限画布核心、产品资料库、客户项目与报价 Gate。"],
      ["P1 范围", "品审知识库、素材文件台账、AI Prompt 和视频脚本。"],
      ["P2/P3 范围", "团队权限、外部集成、3D 预览和自动提醒。"],
    ],
  });

  mvpDeliveryCatalog.forEach((item, index) => {
    const id = `knowledge-mvp-module-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.priority} · ${item.module}`,
      subtitle: item.scope,
      status: item.priority,
      badge: item.priority === "P0" ? "amber" : item.priority === "P1" ? "blue" : "green",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 260,
      category: "MVP规格",
      moduleName: item.module,
      scope: item.scope,
      build: item.build,
      acceptance: item.acceptance,
      reusableInsight: item.scope,
      validation: item.acceptance,
      learningRows: [
        ["优先级", item.priority],
        ["模块", item.module],
        ["范围", item.scope],
        ["实现", item.build],
        ["验收", item.acceptance],
      ],
      tags: ["MVP", item.priority, item.module],
      tasks: [`开发 ${item.module}`, `验收：${item.acceptance}`],
      details: [
        ["优先级", item.priority],
        ["范围", item.scope],
        ["实现", item.build],
        ["验收", item.acceptance],
      ],
    });
    links.push([specId, id]);
  });

  state.selectedId = specId;
  persistWorkspace("已生成 MVP 开发规格");
  render();
}

function buildDeliverySpecMarkdown() {
  return [
    "# Winnsen Canvas 开发规格与数据模型",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 数据模型",
    "",
    "| 实体 | 用途 | 字段 | 负责人 | 存储 | 验收 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...dataModelCatalog.map((item) =>
      [item.entity, item.purpose, item.fields, item.owner, item.storage, item.acceptance]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## MVP 开发模块",
    "",
    "| 优先级 | 模块 | 范围 | 实现建议 | 验收标准 |",
    "| --- | --- | --- | --- | --- |",
    ...mvpDeliveryCatalog.map((item) =>
      [item.priority, item.module, item.scope, item.build, item.acceptance]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 开发建议",
    "",
    "- P0 先做可试点：画布核心、产品资料库、客户项目与报价 Gate。",
    "- P1 再做沉淀：品审知识库、素材文件台账、AI Prompt 和视频脚本。",
    "- P2/P3 再做组织能力：团队权限、评论审批、外部系统集成和 3D 预览。",
    "- 数据库建议把 CanvasNode 与业务实体分开：画布节点负责空间表达，业务表负责查询、统计、权限和报表。",
  ].join("\n");
}

function exportDeliverySpecMarkdown() {
  downloadText(buildDeliverySpecMarkdown(), "winnsen-delivery-spec.md", "text/markdown");
  setStatus("已导出开发规格");
}

function workflowLauncherRows() {
  return workflowLauncherCatalog.map((item) => [
    item.priority,
    item.title,
    item.owner,
    item.trigger,
    item.creates,
    item.outcome,
  ]);
}

function addWorkflowLaunchNode(workflow, product = null) {
  const id = `knowledge-workflow-launch-${workflow.id}-${Date.now()}`;
  nodes.push({
    id,
    type: "knowledge",
    title: `${workflow.title}启动记录`,
    subtitle: `${workflow.owner} · ${product?.title || "全局工作流"}`,
    status: workflow.priority,
    badge: workflow.priority === "P0" ? "amber" : workflow.priority === "P1" ? "blue" : "green",
    x: (product?.x || 210) + 780,
    y: (product?.y || 160) + 120,
    category: "工作流启动",
    workflowId: workflow.id,
    workflowOwner: workflow.owner,
    sourceProductId: product?.id,
    trigger: workflow.trigger,
    creates: workflow.creates,
    outcome: workflow.outcome,
    reusableInsight: workflow.outcome,
    validation: workflow.creates,
    learningRows: [
      ["入口", workflow.title],
      ["负责人", workflow.owner],
      ["触发", workflow.trigger],
      ["生成", workflow.creates],
      ["结果", workflow.outcome],
    ],
    tags: ["工作流启动", workflow.title, workflow.priority],
    tasks: [`确认 ${workflow.title} 生成内容`, "把生成节点分配给对应团队角色", "在评审包中复核输出是否完整"],
    details: [
      ["触发", workflow.trigger],
      ["生成内容", workflow.creates],
      ["预期结果", workflow.outcome],
      ["负责人", workflow.owner],
    ],
  });
  if (product?.id) links.push([product.id, id]);
  return id;
}

function launchWorkflow(workflowId) {
  const workflow = workflowLauncherCatalog.find((item) => item.id === workflowId);
  if (!workflow) return;
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  const requiresProduct = ["product-sprint", "ui-handoff", "asset-video"].includes(workflow.id);
  if (requiresProduct && (!product || product.type !== "product")) {
    setStatus("请先选择产品卡");
    return;
  }

  const launchId = addWorkflowLaunchNode(workflow, requiresProduct ? product : null);

  if (workflow.id === "product-sprint") {
    state.selectedId = product.id;
    addCustomerBriefForProduct(product);
    state.selectedId = product.id;
    addFullReviewChecklist();
    state.selectedId = product.id;
    addUiFlowForProduct(product);
    state.selectedId = product.id;
    addAssetPackForProduct(product);
    state.selectedId = product.id;
    addFileLedgerForCurrentProduct();
    state.selectedId = product.id;
    addVideoPlanForCurrentProduct();
  }

  if (workflow.id === "quote-readiness") {
    addCustomerProjectMap();
    addAllQuoteGates();
    addProjectFileLedgerPack();
  }

  if (workflow.id === "ui-handoff") {
    state.selectedId = product.id;
    addUiFlowForProduct(product);
    state.selectedId = product.id;
    addVideoPlanForCurrentProduct();
  }

  if (workflow.id === "asset-video") {
    state.selectedId = product.id;
    addAssetPackForProduct(product);
    state.selectedId = product.id;
    addFileLedgerForCurrentProduct();
    state.selectedId = product.id;
    addVideoPlanForCurrentProduct();
  }

  if (workflow.id === "knowledge-retro") {
    addKnowledgeFromAllReviews();
    addWinnsenRoadmap();
    addTeamHandoffWorkflow();
  }

  if (workflow.id === "delivery-planning") {
    addOpenSourceReferenceMap();
    addDataModelMap();
    addMvpDeliverySpec();
    addTeamRoleMatrix();
  }

  state.selectedId = launchId;
  persistWorkspace(`已启动${workflow.title}`);
  render();
}

function buildWorkflowLauncherMarkdown() {
  return [
    "# Winnsen 工作流启动器",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 优先级 | 工作流 | 负责人 | 触发条件 | 生成内容 | 预期结果 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...workflowLauncherCatalog.map((item) =>
      [item.priority, item.title, item.owner, item.trigger, item.creates, item.outcome]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 使用建议",
    "",
    "- 每天先选择当前重点产品，再启动产品设计、UI、素材视频等工作流。",
    "- 报价前评审和开发规划是全局工作流，不依赖当前产品卡。",
    "- 启动后先看任务看板，再进入评审包导出会议材料。",
  ].join("\n");
}

function exportWorkflowLauncherMarkdown() {
  downloadText(buildWorkflowLauncherMarkdown(), "winnsen-workflow-launcher.md", "text/markdown");
  setStatus("已导出工作流启动器");
}

function maturePatternRows() {
  return matureProductPatterns.map((item) => [
    item.pattern,
    item.sourceProducts,
    item.matureMove,
    item.winnsenFeature,
    item.tonight,
    item.proof,
  ]);
}

function signatureModuleRows() {
  return winnsenSignatureModules.map((item) => [item.module, item.from, item.feature, item.userValue]);
}

function overnightRunRows() {
  return overnightRunQueue.map((item) => [
    item.slot,
    item.objective,
    item.action,
    item.acceptance,
    item.owner,
    item.status,
  ]);
}

function addMatureProductImitationMap() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "成熟产品仿照" && node.title === "成熟产品仿照与 Winnsen 差异化矩阵");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("仿照矩阵已存在");
    render();
    return;
  }

  const baseX = 150 - state.offsetX / state.scale;
  const baseY = 170 - state.offsetY / state.scale;
  const stamp = Date.now();
  const mapId = `knowledge-mature-imitation-map-${stamp}`;

  nodes.push({
    id: mapId,
    type: "knowledge",
    title: "成熟产品仿照与 Winnsen 差异化矩阵",
    subtitle: "tldraw / Excalidraw / AFFiNE / AppFlowy / draw.io 的成熟骨架 + Winnsen 业务特色",
    status: "仿照策略",
    badge: "violet",
    x: baseX,
    y: baseY,
    category: "成熟产品仿照",
    reusableInsight: "借鉴成熟产品的画布、白板、知识库、项目管理和图表模板能力，再聚焦 Winnsen 产品设计、品审、报价、素材和视频闭环。",
    validation: "只借鉴产品模式和交互骨架，正式开发前复核 license、技术架构、数据安全和团队使用成本。",
    sourceProducts: openSourceReferenceCatalog.map((item) => item.product).join(" / "),
    learningRows: maturePatternRows(),
    tags: ["成熟产品", "仿照策略", "Winnsen 特色", "产品路线"],
    tasks: ["确认哪些能力直接仿照", "标注 Winnsen 专属差异化模块", "把差异化模块转成开发验收"],
    details: [
      ["成熟骨架", "无限画布、轻量白板、文档表格融合、项目 Wiki、图表模板。"],
      ["Winnsen 特色", "产品设计、界面设计、品审、报价 Gate、图库模型库、视频生成和知识库管理。"],
      ["边界", "不复制品牌、素材或授权受限代码；当前原型只固化产品策略与业务流程。"],
    ],
  });

  matureProductPatterns.forEach((item, index) => {
    const id = `knowledge-mature-pattern-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.pattern} 仿照策略`,
      subtitle: `${item.sourceProducts} · ${item.proof}`,
      status: "仿照",
      badge: index % 2 === 0 ? "violet" : "green",
      x: baseX + 390 + (index % 2) * 390,
      y: baseY + Math.floor(index / 2) * 285,
      category: "成熟产品仿照",
      pattern: item.pattern,
      sourceProducts: item.sourceProducts,
      matureMove: item.matureMove,
      winnsenFeature: item.winnsenFeature,
      tonight: item.tonight,
      proof: item.proof,
      reusableInsight: item.winnsenFeature,
      validation: item.proof,
      learningRows: [
        ["模式", item.pattern],
        ["参考产品", item.sourceProducts],
        ["成熟做法", item.matureMove],
        ["Winnsen 特色", item.winnsenFeature],
        ["今夜动作", item.tonight],
        ["验收", item.proof],
      ],
      tags: ["成熟产品", item.sourceProducts, item.pattern],
      tasks: [item.tonight, `验收：${item.proof}`],
      details: [
        ["参考产品", item.sourceProducts],
        ["成熟做法", item.matureMove],
        ["Winnsen 特色", item.winnsenFeature],
        ["今夜动作", item.tonight],
        ["验收", item.proof],
      ],
    });
    links.push([mapId, id]);
  });

  winnsenSignatureModules.forEach((item, index) => {
    const id = `knowledge-winnsen-signature-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.module} · Winnsen 特色`,
      subtitle: `${item.from} · ${item.userValue}`,
      status: "特色",
      badge: "amber",
      x: baseX + 1180,
      y: baseY + index * 250,
      category: "成熟产品仿照",
      signatureModule: item.module,
      sourceProducts: item.from,
      winnsenFeature: item.feature,
      reusableInsight: item.userValue,
      validation: item.feature,
      learningRows: [
        ["模块", item.module],
        ["参考来源", item.from],
        ["特色", item.feature],
        ["价值", item.userValue],
      ],
      tags: ["Winnsen 特色", item.module],
      tasks: [`把 ${item.module} 写入开发规格`, `用真实项目验证：${item.userValue}`],
      details: [
        ["参考来源", item.from],
        ["特色", item.feature],
        ["用户价值", item.userValue],
      ],
    });
    links.push([mapId, id]);
  });

  state.selectedId = mapId;
  persistWorkspace("已生成成熟产品仿照矩阵");
  render();
}

function addOvernightGoalPlan() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "今夜执行" && node.title === "连续跑一夜工作目标");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("今夜执行目标已存在");
    render();
    return;
  }

  const baseX = 190 - state.offsetX / state.scale;
  const baseY = 210 - state.offsetY / state.scale;
  const stamp = Date.now();
  const planId = `knowledge-overnight-goal-${stamp}`;

  nodes.push({
    id: planId,
    type: "knowledge",
    title: "连续跑一夜工作目标",
    subtitle: "成熟产品仿照 + Winnsen 特色 + 可试用原型迭代",
    status: "今夜目标",
    badge: "violet",
    x: baseX,
    y: baseY,
    category: "今夜执行",
    objective: "把 Winnsen Product Canvas 从规划原型推进到公司内部可试用工作台。",
    action: "持续补齐产品仿照矩阵、业务工作流、任务节点、报告导出和浏览器验收。",
    acceptance: "第二天能打开页面，看到仿照来源、Winnsen 特色、执行队列、生成节点和验收结论。",
    learningRows: overnightRunRows(),
    tags: ["今夜执行", "长目标", "内部试用", "Winnsen Canvas"],
    tasks: overnightRunQueue.map((item) => `${item.slot} ${item.objective}：${item.acceptance}`),
    details: [
      ["长目标", "参考成熟产品，加入 Winnsen 特色，连续推进可试用版本。"],
      ["执行方式", "每一段都要能落到原型、报告、导出或浏览器验收。"],
      ["验收", "页面可打开、按钮可点、节点可生成、报告可说明下一步。"],
    ],
  });

  overnightRunQueue.forEach((item, index) => {
    const id = `knowledge-overnight-step-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.slot} · ${item.objective}`,
      subtitle: item.action,
      status: item.status,
      badge: item.status === "进行中" ? "amber" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 275,
      category: "今夜执行",
      slot: item.slot,
      objective: item.objective,
      action: item.action,
      acceptance: item.acceptance,
      owner: item.owner,
      reusableInsight: item.action,
      validation: item.acceptance,
      learningRows: [
        ["时间", item.slot],
        ["目标", item.objective],
        ["动作", item.action],
        ["验收", item.acceptance],
        ["负责人", item.owner],
        ["状态", item.status],
      ],
      tags: ["今夜执行", item.objective, item.status],
      tasks: [item.action, `验收：${item.acceptance}`],
      details: [
        ["时间", item.slot],
        ["动作", item.action],
        ["验收", item.acceptance],
        ["负责人", item.owner],
      ],
    });
    links.push([planId, id]);
  });

  state.selectedId = planId;
  persistWorkspace("已生成今夜执行目标");
  render();
}

function buildOvernightGoalMarkdown() {
  return [
    "# Winnsen Product Canvas 今夜执行目标",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 目标",
    "",
    "参考成熟无限画布、白板、知识库、项目管理和图表产品，加入 Winnsen 产品设计、界面设计、品审、报价 Gate、图库模型库、视频生成和知识库管理特色，连续迭代到内部可试用版本。",
    "",
    "## 成熟产品仿照矩阵",
    "",
    "| 模式 | 参考产品 | 成熟做法 | Winnsen 特色 | 今夜动作 | 验收 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...matureProductPatterns.map((item) =>
      [item.pattern, item.sourceProducts, item.matureMove, item.winnsenFeature, item.tonight, item.proof]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## Winnsen 特色模块",
    "",
    "| 模块 | 参考来源 | 特色 | 用户价值 |",
    "| --- | --- | --- | --- |",
    ...winnsenSignatureModules.map((item) =>
      [item.module, item.from, item.feature, item.userValue]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 连续执行队列",
    "",
    "| 时间 | 目标 | 动作 | 验收 | 负责人 | 状态 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...overnightRunQueue.map((item) =>
      [item.slot, item.objective, item.action, item.acceptance, item.owner, item.status]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
  ].join("\n");
}

function exportOvernightGoalMarkdown() {
  downloadText(buildOvernightGoalMarkdown(), "winnsen-overnight-goal.md", "text/markdown");
  setStatus("已导出今夜执行目标");
}

function pilotScenarioRows() {
  return internalPilotScenarios.map((item) => [
    item.scenario,
    item.users,
    item.start,
    item.output,
    item.pass,
  ]);
}

function pilotChecklistRows() {
  return internalPilotChecklist.map((item) => [item.status, item.gate, item.check, item.evidence, item.owner]);
}

function pilotAgendaRows() {
  return internalPilotAgenda.map((item) => [item.time, item.step, item.activity, item.output]);
}

function addInternalPilotPackage() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "内部试用" && node.title === "Winnsen Canvas 内部试用包");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("内部试用包已存在");
    render();
    return;
  }

  const baseX = 210 - state.offsetX / state.scale;
  const baseY = 230 - state.offsetY / state.scale;
  const stamp = Date.now();
  const packageId = `knowledge-internal-pilot-package-${stamp}`;

  nodes.push({
    id: packageId,
    type: "knowledge",
    title: "Winnsen Canvas 内部试用包",
    subtitle: "用真实产品和客户项目验证产品设计、品审、UI、素材、视频和报告闭环",
    status: "试用包",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "内部试用",
    reusableInsight: "内部试用必须用真实产品卡和客户项目跑完整工作流，避免只评审界面好不好看。",
    validation: "试用会议能在 60 分钟内完成范围确认、工作流启动、资料检查、评审包导出和反馈记录。",
    learningRows: pilotScenarioRows(),
    tags: ["内部试用", "试点", "Winnsen Canvas", "评审包"],
    tasks: ["选择 1 个产品和 1 个客户项目作为试点", "按 60 分钟议程跑一遍", "记录试用反馈和下一轮优先级"],
    details: [
      ["试用目标", "验证当前原型是否能支撑产品、销售、结构、UI、市场和管理的真实会议。"],
      ["试用范围", "产品设计冲刺、报价前评审、UI 交付、素材文件台账、知识复盘和报告导出。"],
      ["通过标准", "每个试用场景都有输出、负责人、缺口和下一步。"],
    ],
  });

  internalPilotScenarios.forEach((item, index) => {
    const id = `knowledge-internal-pilot-scenario-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.scenario} 试用场景`,
      subtitle: `${item.users} · ${item.pass}`,
      status: "试用场景",
      badge: index % 2 === 0 ? "green" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 275,
      category: "内部试用",
      scenario: item.scenario,
      users: item.users,
      start: item.start,
      output: item.output,
      pass: item.pass,
      reusableInsight: item.output,
      validation: item.pass,
      learningRows: [
        ["场景", item.scenario],
        ["参与者", item.users],
        ["启动", item.start],
        ["输出", item.output],
        ["通过", item.pass],
      ],
      tags: ["内部试用", item.scenario, item.users],
      tasks: [item.start, `检查输出：${item.output}`, `验收：${item.pass}`],
      details: [
        ["参与者", item.users],
        ["启动方式", item.start],
        ["输出", item.output],
        ["通过标准", item.pass],
      ],
    });
    links.push([packageId, id]);
  });

  const agendaId = `knowledge-internal-pilot-agenda-${stamp}`;
  nodes.push({
    id: agendaId,
    type: "knowledge",
    title: "60 分钟内部试用会议流程",
    subtitle: "从选择产品到导出评审包，再到记录下一轮开发优先级",
    status: "试用议程",
    badge: "amber",
    x: baseX + 1230,
    y: baseY,
    category: "内部试用",
    learningRows: pilotAgendaRows(),
    reusableInsight: "把试用会议压缩成 60 分钟，确保每一步都有输出证据。",
    validation: "会议结束时必须有评审包、任务缺口和下一轮优先级。",
    tags: ["内部试用", "会议流程", "验收"],
    tasks: internalPilotAgenda.map((item) => `${item.time} ${item.step}：${item.output}`),
    details: internalPilotAgenda.map((item) => [item.time, `${item.step}：${item.activity}`]),
  });
  links.push([packageId, agendaId]);

  state.selectedId = packageId;
  persistWorkspace("已生成内部试用包");
  render();
}

function addPilotAcceptanceChecklist() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "试用验收" && node.title === "Winnsen Canvas 内部试用验收清单");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("内部试用验收清单已存在");
    render();
    return;
  }

  const baseX = 230 - state.offsetX / state.scale;
  const baseY = 250 - state.offsetY / state.scale;
  const stamp = Date.now();
  const checklistId = `knowledge-internal-pilot-checklist-${stamp}`;

  nodes.push({
    id: checklistId,
    type: "knowledge",
    title: "Winnsen Canvas 内部试用验收清单",
    subtitle: "打开即可理解、产品闭环、报价决策、资料入库、知识复用和开发接手",
    status: "验收",
    badge: "amber",
    x: baseX,
    y: baseY,
    category: "试用验收",
    reusableInsight: "内部试用不是看功能数量，而是检查真实会议是否能跑出结论和下一步。",
    validation: "P0 Gate 必须全部通过，P1 Gate 至少能明确缺口和负责人。",
    learningRows: pilotChecklistRows(),
    tags: ["内部试用", "验收 Gate", "MVP", "试点"],
    tasks: internalPilotChecklist.map((item) => `${item.status} ${item.gate}：${item.evidence}`),
    details: [
      ["P0", "打开即可理解、产品闭环可跑通、报价前可决策。"],
      ["P1", "资料能入库、知识能复用、开发能接手。"],
      ["下一步", "把每个未通过 Gate 转成下一轮开发任务。"],
    ],
  });

  internalPilotChecklist.forEach((item, index) => {
    const id = `knowledge-internal-pilot-gate-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.status} · ${item.gate}`,
      subtitle: `${item.owner} · ${item.check}`,
      status: item.status,
      badge: item.status === "P0" ? "amber" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 275,
      category: "试用验收",
      gate: item.gate,
      check: item.check,
      evidence: item.evidence,
      owner: item.owner,
      reusableInsight: item.check,
      validation: item.evidence,
      learningRows: [
        ["优先级", item.status],
        ["Gate", item.gate],
        ["检查", item.check],
        ["证据", item.evidence],
        ["负责人", item.owner],
      ],
      tags: ["试用验收", item.status, item.gate],
      tasks: [item.check, `准备证据：${item.evidence}`],
      details: [
        ["检查", item.check],
        ["证据", item.evidence],
        ["负责人", item.owner],
      ],
    });
    links.push([checklistId, id]);
  });

  state.selectedId = checklistId;
  persistWorkspace("已生成内部试用验收清单");
  render();
}

function buildInternalPilotMarkdown() {
  return [
    "# Winnsen Canvas 内部试用包",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 试用场景",
    "",
    "| 场景 | 参与者 | 启动方式 | 输出 | 通过标准 |",
    "| --- | --- | --- | --- | --- |",
    ...internalPilotScenarios.map((item) =>
      [item.scenario, item.users, item.start, item.output, item.pass]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 试用验收 Gate",
    "",
    "| 优先级 | Gate | 检查 | 证据 | 负责人 |",
    "| --- | --- | --- | --- | --- |",
    ...internalPilotChecklist.map((item) =>
      [item.status, item.gate, item.check, item.evidence, item.owner]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 60 分钟试用会议流程",
    "",
    "| 时间 | 步骤 | 活动 | 输出 |",
    "| --- | --- | --- | --- |",
    ...internalPilotAgenda.map((item) =>
      [item.time, item.step, item.activity, item.output]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
  ].join("\n");
}

function exportInternalPilotMarkdown() {
  downloadText(buildInternalPilotMarkdown(), "winnsen-internal-pilot-pack.md", "text/markdown");
  setStatus("已导出内部试用包");
}

function pilotSessionRows() {
  return pilotSessionRecords.map((item) => [
    item.stage,
    item.participants,
    item.topic,
    item.decision,
    item.evidence,
    item.owner,
  ]);
}

function pilotSessionActionRows() {
  return pilotSessionRecords.map((item) => [
    item.stage,
    item.action,
    item.owner,
    item.due,
    item.acceptance,
  ]);
}

function addPilotSessionLog() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "试用会话" && node.title === "内部试用会话记录");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("试用会话记录已存在");
    render();
    return;
  }

  const baseX = 240 - state.offsetX / state.scale;
  const baseY = 240 - state.offsetY / state.scale;
  const stamp = Date.now();
  const sessionId = `knowledge-pilot-session-log-${stamp}`;

  nodes.push({
    id: sessionId,
    type: "knowledge",
    title: "内部试用会话记录",
    subtitle: "把试用会议的范围、决策、证据和行动项沉淀回画布",
    status: "会议纪要",
    badge: "blue",
    x: baseX,
    y: baseY,
    category: "试用会话",
    reusableInsight: "成熟白板和知识工作台的价值不只在开会时画图，还在会后留下可追踪的决策和行动项。",
    validation: "每条会话记录必须包含决策、证据、负责人和验收标准。",
    learningRows: pilotSessionRows(),
    tags: ["试用会话", "会议纪要", "决策记录", "行动项"],
    tasks: pilotSessionRecords.map((item) => `${item.owner}：${item.action}`),
    details: [
      ["会话数量", `${pilotSessionRecords.length} 条`],
      ["闭环字段", "阶段、参与者、议题、决策、证据、行动项、负责人、验收。"],
      ["下一步", "会后将 P0/P1 行动项进入资料补齐台或迭代 backlog。"],
    ],
  });

  pilotSessionRecords.forEach((item, index) => {
    const id = `knowledge-pilot-session-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.stage} 会话结论`,
      subtitle: `${item.topic} · ${item.owner}`,
      status: "决策",
      badge: index < 2 ? "blue" : index < 4 ? "green" : "amber",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 270,
      category: "试用会话",
      participants: item.participants,
      decision: item.decision,
      evidence: item.evidence,
      owner: item.owner,
      reusableInsight: item.decision,
      validation: item.evidence,
      learningRows: [
        ["阶段", item.stage],
        ["参与者", item.participants],
        ["议题", item.topic],
        ["决策", item.decision],
        ["证据", item.evidence],
        ["负责人", item.owner],
      ],
      tags: ["试用会话", item.stage, item.owner],
      tasks: [item.action, `验收：${item.acceptance}`],
      details: [
        ["参与者", item.participants],
        ["决策", item.decision],
        ["证据", item.evidence],
        ["行动项", item.action],
        ["验收", item.acceptance],
      ],
    });
    links.push([sessionId, id]);
  });

  state.selectedId = sessionId;
  persistWorkspace("已生成试用会话记录");
  render();
}

function addPilotSessionActions() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "试用行动" && node.title === "试用会后行动项");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("试用会后行动项已存在");
    render();
    return;
  }

  const baseX = 260 - state.offsetX / state.scale;
  const baseY = 260 - state.offsetY / state.scale;
  const stamp = Date.now();
  const actionId = `knowledge-pilot-session-actions-${stamp}`;

  nodes.push({
    id: actionId,
    type: "knowledge",
    title: "试用会后行动项",
    subtitle: "把会后任务按负责人、截止时间和验收标准拆清楚",
    status: "行动项",
    badge: "amber",
    x: baseX,
    y: baseY,
    category: "试用行动",
    reusableInsight: "内部试用要能从会议纪要直接变成可追踪任务，否则结论会停留在聊天记录里。",
    validation: "每个行动项都有负责人、截止时间和可检查的完成标准。",
    learningRows: pilotSessionActionRows(),
    tags: ["试用行动", "会后任务", "负责人", "验收"],
    tasks: pilotSessionRecords.map((item) => `${item.due} · ${item.owner}：${item.action}`),
    details: [
      ["行动项", `${pilotSessionRecords.length} 条`],
      ["优先处理", "范围确认、资料补齐、报价 Gate。"],
      ["进入位置", "资料补齐台、任务看板、迭代 backlog 和评审包。"],
    ],
  });

  pilotSessionRecords.forEach((item, index) => {
    const id = `knowledge-pilot-session-action-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.stage} 行动项`,
      subtitle: `${item.owner} · ${item.due}`,
      status: index < 3 ? "P0" : "P1",
      badge: index < 3 ? "amber" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 260,
      category: "试用行动",
      owner: item.owner,
      due: item.due,
      action: item.action,
      reusableInsight: item.action,
      validation: item.acceptance,
      learningRows: [
        ["阶段", item.stage],
        ["行动项", item.action],
        ["负责人", item.owner],
        ["截止", item.due],
        ["验收", item.acceptance],
      ],
      tags: ["试用行动", item.stage, item.owner],
      tasks: [item.action, `截止：${item.due}`, `验收：${item.acceptance}`],
      details: [
        ["行动项", item.action],
        ["负责人", item.owner],
        ["截止", item.due],
        ["验收", item.acceptance],
      ],
    });
    links.push([actionId, id]);
  });

  state.selectedId = actionId;
  persistWorkspace("已生成试用会后行动项");
  render();
}

function buildPilotSessionMarkdown() {
  return [
    "# Winnsen Canvas 试用会话记录",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 会话决策",
    "",
    "| 阶段 | 参与者 | 议题 | 决策 | 证据 | 负责人 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...pilotSessionRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 会后行动项",
    "",
    "| 阶段 | 行动项 | 负责人 | 截止 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotSessionActionRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
  ].join("\n");
}

function exportPilotSessionMarkdown() {
  downloadText(buildPilotSessionMarkdown(), "winnsen-pilot-session.md", "text/markdown");
  setStatus("已导出试用会话纪要");
}

function commandCenterItems() {
  return [
    {
      id: "pilot-workspace",
      group: "试用",
      label: "一键生成完整试用工作区",
      subtitle: "自动铺开官网资料、补齐台、试用包、会话、反馈、迭代和启动台。",
      tags: ["Apple", "一键", "完整试用", "启动台"],
      action: addPilotLaunchWorkspace,
    },
    {
      id: "pilot-launch",
      group: "试用",
      label: "生成试用启动台",
      subtitle: "把资料、试用、会话和报告串成内部试用第一屏。",
      tags: ["Apple", "启动台", "内部试用"],
      action: addPilotLaunchMap,
    },
    {
      id: "role-playbook",
      group: "试用",
      label: "生成角色试用路线",
      subtitle: "给产品设计、界面设计、品审、视频、知识库和图库模型库各生成一条试用路径。",
      tags: ["角色", "内部试用", "SOP"],
      action: () => addRolePlaybookWorkspace("all"),
    },
    {
      id: "trial-acceptance",
      group: "试用",
      label: "生成试用验收中心",
      subtitle: "用 Gate 和证据判断当前原型是否能进入第一轮内部试用。",
      tags: ["验收", "Gate", "内部试用"],
      action: addTrialAcceptanceWorkspace,
    },
    {
      id: "github-evidence",
      group: "参考",
      label: "生成 GitHub 参考证据台",
      subtitle: "把成熟项目的星标、license、成熟信号和 Winnsen 采纳决策生成证据卡。",
      tags: ["GitHub", "参考", "证据", "成熟产品"],
      action: addGitHubReferenceEvidenceBoard,
    },
    {
      id: "official-seed",
      group: "资料",
      label: "生成官网资料包",
      subtitle: "导入 10 个官网公开产品，并生成品审、UI 和素材需求。",
      tags: ["官网", "产品资料", "CSV", "种子包"],
      action: addOfficialProductSeedPackage,
    },
    {
      id: "readiness",
      group: "资料",
      label: "生成内部资料补齐台",
      subtitle: "把官网种子拆成产品、结构、UI、图库、视频和报价资料任务。",
      tags: ["资料补齐", "责任矩阵", "内部试用"],
      action: addReadinessBoard,
    },
    {
      id: "pilot-pack",
      group: "试用",
      label: "生成内部试用包",
      subtitle: "生成试用场景、60 分钟议程和会议验收入口。",
      tags: ["内部试用", "会议", "验收"],
      action: addInternalPilotPackage,
    },
    {
      id: "pilot-session",
      group: "试用",
      label: "生成试用会话记录",
      subtitle: "把试用会议的决策、证据和结论沉淀为画布知识卡。",
      tags: ["会话记录", "决策", "会议纪要"],
      action: addPilotSessionLog,
    },
    {
      id: "pilot-actions",
      group: "试用",
      label: "生成会后行动项",
      subtitle: "把试用结论拆成负责人、截止时间和验收标准。",
      tags: ["行动项", "负责人", "会后"],
      action: addPilotSessionActions,
    },
    {
      id: "guided-start",
      group: "试用",
      label: "生成起步导航",
      subtitle: "用 6 步路径带内部同事完成第一次试跑。",
      tags: ["导航", "起步", "试用路径"],
      action: addGuidedStartMap,
    },
    {
      id: "feedback",
      group: "复盘",
      label: "生成试用反馈记录",
      subtitle: "记录试用观察、Gate 评分和下一轮迭代信号。",
      tags: ["反馈", "Gate", "迭代"],
      action: addPilotFeedbackLog,
    },
    {
      id: "iteration",
      group: "复盘",
      label: "生成迭代优先级",
      subtitle: "把内部试用反馈转成 P0/P1/P2 backlog。",
      tags: ["backlog", "开发任务", "优先级"],
      action: addPilotIterationBacklog,
    },
    {
      id: "report",
      group: "报告",
      label: "打开评审包",
      subtitle: "查看产品、品审、UI、资料、试用和会话记录报告。",
      tags: ["评审包", "报告", "会议材料"],
      action: showReport,
    },
    {
      id: "export-report",
      group: "报告",
      label: "导出评审包 Markdown",
      subtitle: "把完整评审包导出为 Markdown，便于进入知识库或会议纪要。",
      tags: ["导出", "Markdown", "评审包"],
      action: exportReportMarkdown,
    },
    {
      id: "fit-view",
      group: "画布",
      label: "适配当前画布",
      subtitle: "把当前节点重新适配到可见视图。",
      tags: ["画布", "视图", "适配"],
      action: fitView,
    },
    {
      id: "save",
      group: "工作区",
      label: "保存当前工作区",
      subtitle: "把当前节点、连线和视图保存到本地浏览器。",
      tags: ["保存", "工作区", "本地"],
      action: () => persistWorkspace("手动保存"),
    },
  ];
}

function filteredCommandCenterItems() {
  const query = commandSearchInput.value.trim().toLowerCase();
  const items = commandCenterItems();
  if (!query) return items;
  return items.filter((item) =>
    [item.group, item.label, item.subtitle, ...(item.tags || [])]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
}

function renderCommandCenter() {
  if (!commandList) return;
  const allItems = commandCenterItems();
  const items = filteredCommandCenterItems();
  commandSummary.textContent = `${items.length} / ${allItems.length} 个动作`;
  commandList.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <button class="command-item" type="button" data-command-id="${escapeHtml(item.id)}">
              <span>${escapeHtml(item.group)}</span>
              <strong>${escapeHtml(item.label)}</strong>
              <em>${escapeHtml(item.subtitle)}</em>
            </button>
          `,
        )
        .join("")
    : `<div class="command-empty">没有匹配的动作</div>`;
}

function openCommandCenter() {
  if (!commandModal) return;
  commandModal.hidden = false;
  commandSearchInput.value = "";
  renderCommandCenter();
  commandSearchInput.focus();
}

function closeCommandCenter() {
  if (!commandModal) return;
  commandModal.hidden = true;
}

function runCommandCenterItem(commandId) {
  const command = commandCenterItems().find((item) => item.id === commandId);
  if (!command) return;
  closeCommandCenter();
  command.action();
}

function nodeByCategoryTitle(category, title) {
  return nodes.find((node) => node.category === category && node.title === title);
}

function linkOnce(fromId, toId) {
  if (!fromId || !toId) return;
  if (!links.some(([from, to]) => from === fromId && to === toId)) links.push([fromId, toId]);
}

function addPilotLaunchMap() {
  const existing = nodeByCategoryTitle("试用启动", "Apple 风格内部试用启动台");
  if (existing) {
    state.selectedId = existing.id;
    render();
    return existing.id;
  }

  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 120 - state.offsetY / state.scale;
  const stamp = Date.now();
  const launchId = `knowledge-pilot-launch-${stamp}`;

  nodes.push({
    id: launchId,
    type: "knowledge",
    title: "Apple 风格内部试用启动台",
    subtitle: "一键生成官网产品种子、资料补齐、试用包、会话纪要、反馈迭代和评审包路径",
    status: "启动台",
    badge: "blue",
    x: baseX,
    y: baseY,
    category: "试用启动",
    reusableInsight: "把成熟白板产品的模板/recipe 能力转成 Winnsen 内部试用的一键启动路径。",
    validation: "首次试用者点击一次即可得到真实产品资料、责任矩阵、会议流程、会后行动项和反馈 backlog。",
    learningRows: pilotLaunchRows(),
    tags: ["试用启动", "Apple 风格", "内部试用", "一键工作区"],
    tasks: pilotLaunchRecipes.map((item) => `${item.step} ${item.action}：${item.evidence}`),
    details: [
      ["Apple 风格", "系统字体、玻璃面板、蓝色主操作、柔和阴影和圆角浮层。"],
      ["推荐路径", "真实产品种子 → 资料补齐 → 试用包 → 会话记录 → 反馈迭代 → 评审包。"],
      ["验收", "能在浏览器中生成节点、导出纪要和打开评审包，无控制台错误。"],
    ],
  });

  pilotLaunchRecipes.forEach((item, index) => {
    const id = `knowledge-pilot-launch-step-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.step} · ${item.title}`,
      subtitle: `${item.owner} · ${item.action}`,
      status: pilotLaunchState().checks[index] ? "已生成" : "待生成",
      badge: index < 2 ? "blue" : index < 4 ? "green" : "amber",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 250,
      category: "试用启动",
      reusableInsight: item.creates,
      validation: item.evidence,
      learningRows: [
        ["步骤", item.step],
        ["标题", item.title],
        ["动作", item.action],
        ["生成内容", item.creates],
        ["证据", item.evidence],
        ["负责人", item.owner],
      ],
      tags: ["试用启动", item.step, item.title],
      tasks: [item.action, `验收：${item.evidence}`],
      details: [
        ["动作", item.action],
        ["生成内容", item.creates],
        ["证据", item.evidence],
        ["负责人", item.owner],
      ],
    });
    linkOnce(launchId, id);
  });

  [
    nodeByCategoryTitle("开源参考", "GitHub 开源无限画布参考图谱"),
    nodeByCategoryTitle("GitHub 参考证据", "GitHub 成熟产品参考证据台"),
    nodeByCategoryTitle("产品路线", "Winnsen Product Canvas 产品路线图"),
    nodeByCategoryTitle("成熟产品仿照", "成熟产品仿照与 Winnsen 差异化矩阵"),
    nodeByCategoryTitle("今夜执行", "连续跑一夜工作目标"),
    nodeByCategoryTitle("官网资料", "Winnsen 官网公开产品资料种子包"),
    nodeByCategoryTitle("资料补齐", "内部资料补齐台"),
    nodeByCategoryTitle("内部试用", "Winnsen Canvas 内部试用包"),
    nodeByCategoryTitle("试用验收", "Winnsen Canvas 内部试用验收清单"),
    nodeByCategoryTitle("试用会话", "内部试用会话记录"),
    nodeByCategoryTitle("试用行动", "试用会后行动项"),
    nodeByCategoryTitle("试用反馈", "内部试用反馈记录"),
    nodeByCategoryTitle("迭代优先级", "内部试用后迭代优先级"),
  ].forEach((node) => linkOnce(launchId, node?.id));

  const launchNode = nodes.find((node) => node.id === launchId);
  if (launchNode) launchNode.learningRows = pilotLaunchRows();

  state.selectedId = launchId;
  persistWorkspace("已生成 Apple 风格试用启动台");
  render();
  return launchId;
}

function addPilotLaunchWorkspace() {
  addOpenSourceReferenceMap();
  addGitHubReferenceEvidenceBoard();
  addWinnsenRoadmap();
  addMatureProductImitationMap();
  addOvernightGoalPlan();
  addOfficialProductSeedPackage();
  addReadinessBoard();
  addInternalPilotPackage();
  addPilotAcceptanceChecklist();
  addPilotSessionLog();
  addPilotSessionActions();
  addPilotFeedbackLog();
  addPilotIterationBacklog();
  addPilotLaunchMap();
  addRolePlaybookWorkspace("all");
  setStatus("已生成 Apple 风格内部试用工作区");
  render();
}

function addPilotLaunchMeetingFlow() {
  addPilotSessionLog();
  addPilotSessionActions();
  addPilotFeedbackLog();
  addPilotIterationBacklog();
  addPilotLaunchMap();
  setStatus("已生成试用会议闭环");
  render();
}

function buildPilotLaunchMarkdown() {
  return [
    "# Winnsen Apple 风格内部试用启动台",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 启动路径",
    "",
    "| 步骤 | 标题 | 动作 | 生成内容 | 完成证据 | 负责人 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...pilotLaunchRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 使用方式",
    "",
    "- 点击“生成试用工作区”得到完整内部试用画布。",
    "- 已经有资料时，点击“生成会议闭环”只补会后纪要、行动项、反馈和迭代。",
    "- 用“生成评审包”导出完整会议材料，再把结论沉淀到知识库。",
  ].join("\n");
}

function exportPilotLaunchMarkdown() {
  downloadText(buildPilotLaunchMarkdown(), "winnsen-apple-pilot-launch.md", "text/markdown");
  setStatus("已导出试用启动台");
}

function addRolePlaybookWorkspace(roleId = "all") {
  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 920 - state.offsetY / state.scale;
  const stamp = Date.now();
  let hub = nodeByCategoryTitle("角色试用", "Winnsen 内部角色试用工作台");

  if (!hub) {
    const hubId = `knowledge-role-playbook-hub-${stamp}`;
    nodes.push({
      id: hubId,
      type: "knowledge",
      title: "Winnsen 内部角色试用工作台",
      subtitle: "按产品设计、界面设计、品审、视频、知识库和图库模型库拆分内部试用路线",
      status: "角色路线",
      badge: "blue",
      x: baseX,
      y: baseY,
      category: "角色试用",
      reusableInsight: "把成熟知识工作台的模板能力转成 Winnsen 内部试用角色入口，让每个同事知道自己该验证什么。",
      validation: "6 类角色都能看到入口、产出、验收和可导出的角色手册。",
      learningRows: rolePlaybookRows(),
      tags: ["角色试用", "内部试用", "Apple 风格", "工作流模板"],
      tasks: internalTrialRolePlaybooks.map((item) => `${item.label}：${item.acceptance}`),
      details: [
        ["成熟产品骨架", "tldraw 的业务节点、Excalidraw 的低门槛表达、AFFiNE 的知识库和 AppFlowy 的模板工作区。"],
        ["Winnsen 特色", "产品设计、界面设计、产品品审、视频生成、知识库管理、图库模型库各自有试用路线。"],
        ["验收", "角色路线进入画布、评审包和 Markdown 导出。"],
      ],
    });
    hub = nodes.find((node) => node.id === hubId);
  }

  const selectedRoles =
    roleId === "all" ? internalTrialRolePlaybooks : internalTrialRolePlaybooks.filter((item) => item.id === roleId);
  selectedRoles.forEach((item, index) => {
    let roleNode = nodeByCategoryTitle("角色试用", `${item.label}试用路线`);
    if (!roleNode) {
      const id = `knowledge-role-playbook-${item.id}-${stamp}`;
      const globalIndex = internalTrialRolePlaybooks.findIndex((role) => role.id === item.id);
      nodes.push({
        id,
        type: "knowledge",
        title: `${item.label}试用路线`,
        subtitle: `${item.reference} · ${item.entry}`,
        status: "角色路线",
        badge: globalIndex % 3 === 0 ? "blue" : globalIndex % 3 === 1 ? "green" : "amber",
        x: baseX + 410 + (index % 2) * 420,
        y: baseY + Math.floor(index / 2) * 250,
        category: "角色试用",
        reusableInsight: item.focus,
        validation: item.acceptance,
        learningRows: [
          ["角色", item.label],
          ["重点", item.focus],
          ["借鉴", item.reference],
          ["入口", item.entry],
          ["产出", item.deliverable],
          ["验收", item.acceptance],
          ["AI Prompt", item.prompt],
        ],
        tags: ["角色试用", item.label, item.prompt],
        tasks: item.tasks,
        details: [
          ["入口", item.entry],
          ["产出", item.deliverable],
          ["验收", item.acceptance],
        ],
      });
      roleNode = nodes.find((node) => node.id === id);
    }

    linkOnce(hub?.id, roleNode?.id);
    item.relatedNodes.forEach(([category, title]) => {
      const target = nodeByCategoryTitle(category, title);
      if (target) linkOnce(roleNode?.id, target.id);
    });
  });

  const refreshedHub = nodeByCategoryTitle("角色试用", "Winnsen 内部角色试用工作台");
  if (refreshedHub) refreshedHub.learningRows = rolePlaybookRows();
  const selectedRole = roleId === "all" ? refreshedHub : nodeByCategoryTitle("角色试用", `${selectedRoles[0]?.label}试用路线`);
  state.selectedId = selectedRole?.id || refreshedHub?.id || state.selectedId;
  persistWorkspace(roleId === "all" ? "已生成全部角色试用路线" : `已生成${selectedRoles[0]?.label || "角色"}试用路线`);
  render();
}

function buildRolePlaybookMarkdown() {
  return [
    "# Winnsen 内部角色试用手册",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 角色 | 重点 | 借鉴 | 入口 | 产出 | 验收 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...rolePlaybookRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 使用建议",
    "",
    "- 产品设计先生成试用工作区，再挑一个真实产品跑报价前评审。",
    "- 界面设计、品审、视频和素材同事按自己的路线补齐证据。",
    "- 知识库管理员在会后导出评审包和角色手册，沉淀为团队 SOP。",
  ].join("\n");
}

function exportRolePlaybookMarkdown() {
  downloadText(buildRolePlaybookMarkdown(), "winnsen-role-playbook.md", "text/markdown");
  setStatus("已导出角色试用手册");
}

function addTrialAcceptanceEvidence() {
  const existing = nodeByCategoryTitle("试用验收中心", "Winnsen Canvas 内部试用验收中心");
  if (existing) {
    const rows = trialAcceptanceRows();
    existing.learningRows = rows.map((item) => [
      item.gate,
      item.status,
      item.owner,
      item.evidence,
    ]);
    existing.details = [
      ["验收对象", "成熟产品骨架、Apple 风格、试用启动、角色路线、真实资料、会议反馈、报告导出。"],
      ...rows.map((item) => [item.gate, `${item.status} · ${item.owner} · ${item.evidence}`]),
      ["下一步", "内部试用会议后刷新验收证据，并导出 Markdown 进入知识库。"],
    ];
    existing.tasks = rows.filter((item) => !item.pass).map((item) => `补齐 ${item.gate}：${item.evidence}`);
    existing.validation = `当前通过 ${trialAcceptanceState().passed}/${trialAcceptanceState().total} 个 Gate。`;
    state.selectedId = existing.id;
    persistWorkspace("已刷新试用验收证据");
    render();
    return existing.id;
  }

  const baseX = 120 - state.offsetX / state.scale;
  const baseY = 1700 - state.offsetY / state.scale;
  const stamp = Date.now();
  const acceptance = trialAcceptanceState();
  const id = `knowledge-trial-acceptance-${stamp}`;

  nodes.push({
    id,
    type: "knowledge",
    title: "Winnsen Canvas 内部试用验收中心",
    subtitle: `内部试用 Gate、证据和下一轮补齐项 · ${acceptance.percent}%`,
    status: acceptance.percent === 100 ? "可试用" : "待补齐",
    badge: acceptance.percent === 100 ? "green" : "amber",
    x: baseX,
    y: baseY,
    category: "试用验收中心",
    reusableInsight: "把“是否适合内部试用”变成可验证 Gate，而不是只看界面是否完整。",
    validation: `当前通过 ${acceptance.passed}/${acceptance.total} 个 Gate。`,
    learningRows: acceptance.rows.map((item) => [item.gate, item.status, item.owner, item.evidence]),
    tags: ["试用验收中心", "内部试用", "Gate", "证据"],
    tasks: acceptance.rows.filter((item) => !item.pass).map((item) => `补齐 ${item.gate}：${item.evidence}`),
    details: [
      ["验收对象", "成熟产品骨架、Apple 风格、试用启动、角色路线、真实资料、会议反馈、报告导出。"],
      ...acceptance.rows.map((item) => [item.gate, `${item.status} · ${item.owner} · ${item.evidence}`]),
      ["通过标准", "所有 Gate 有证据，未通过项能转成下一轮任务。"],
      ["下一步", "内部试用会议后刷新验收证据，并导出 Markdown 进入知识库。"],
    ],
  });

  [
    nodeByCategoryTitle("试用启动", "Apple 风格内部试用启动台"),
    nodeByCategoryTitle("角色试用", "Winnsen 内部角色试用工作台"),
    nodeByCategoryTitle("内部试用", "Winnsen Canvas 内部试用包"),
    nodeByCategoryTitle("试用验收", "Winnsen Canvas 内部试用验收清单"),
    nodeByCategoryTitle("试用反馈", "内部试用反馈记录"),
    nodeByCategoryTitle("迭代优先级", "内部试用后迭代优先级"),
  ].forEach((node) => linkOnce(id, node?.id));

  state.selectedId = id;
  persistWorkspace("已生成试用验收证据");
  render();
  return id;
}

function addTrialAcceptanceWorkspace() {
  addPilotLaunchWorkspace();
  addRolePlaybookWorkspace("all");
  addGuidedStartMap();
  addTrialAcceptanceEvidence();
  setStatus("已生成内部试用验收工作区");
  render();
}

function buildTrialAcceptanceMarkdown() {
  const acceptance = trialAcceptanceState();
  return [
    "# Winnsen Canvas 内部试用验收表",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    `通过率：${acceptance.percent}%（${acceptance.passed}/${acceptance.total}）`,
    "",
    "| Gate | 状态 | 负责人 | 证据 |",
    "| --- | --- | --- | --- |",
    ...acceptance.rows.map((row) =>
      `| ${[row.gate, row.status, row.owner, row.evidence].map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`,
    ),
    "",
    "## 下一步",
    "",
    ...acceptance.rows
      .filter((row) => !row.pass)
      .map((row) => `- 补齐 ${row.gate}：${row.evidence}`),
    acceptance.percent === 100 ? "- 所有 Gate 已通过，可进入第一轮内部试用会议。" : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function exportTrialAcceptanceMarkdown() {
  downloadText(buildTrialAcceptanceMarkdown(), "winnsen-trial-acceptance.md", "text/markdown");
  setStatus("已导出内部试用验收表");
}

function addLiveFeedbackFromPanel() {
  const tools = document.getElementById("liveFeedbackTools");
  if (!tools) return;
  const role = tools.querySelector("#liveFeedbackRoleInput")?.value || "产品设计";
  const scenario = tools.querySelector("#liveFeedbackScenarioInput")?.value || "内部试用";
  const priority = tools.querySelector("#liveFeedbackPriorityInput")?.value || "P1";
  const score = tools.querySelector("#liveFeedbackScoreInput")?.value || "4";
  const observation =
    tools.querySelector("#liveFeedbackObservationInput")?.value.trim() ||
    "现场试用观察：需要补充更具体的产品资料、操作路径或验收证据。";
  const stamp = Date.now();
  const id = `knowledge-live-feedback-${stamp}`;
  const action = priority === "P0" || priority === "P1" ? "转入下一轮迭代优先级，并指定负责人。" : "记录到知识库复盘，观察下一轮是否复现。";

  nodes.push({
    id,
    type: "knowledge",
    title: `${role}现场反馈`,
    subtitle: `${scenario} · ${priority} · ${score}/5`,
    status: priority,
    badge: priority === "P0" || priority === "P1" ? "red" : priority === "P2" ? "amber" : "green",
    x: 180 - state.offsetX / state.scale,
    y: 1960 - state.offsetY / state.scale,
    category: "现场反馈",
    reusableInsight: observation,
    validation: action,
    createdAt: new Date().toLocaleString("zh-CN"),
    feedbackRole: role,
    feedbackScenario: scenario,
    feedbackPriority: priority,
    feedbackScore: `${score}/5`,
    feedbackObservation: observation,
    feedbackAction: action,
    learningRows: [
      ["角色", role],
      ["场景", scenario],
      ["优先级", priority],
      ["评分", `${score}/5`],
      ["观察", observation],
      ["响应动作", action],
    ],
    tags: ["现场反馈", role, scenario, priority],
    tasks: [`确认反馈：${observation}`, action],
    details: [
      ["角色", role],
      ["场景", scenario],
      ["优先级", priority],
      ["评分", `${score}/5`],
      ["观察", observation],
      ["响应动作", action],
    ],
  });

  const acceptance = nodeByCategoryTitle("试用验收中心", "Winnsen Canvas 内部试用验收中心");
  const feedbackLog = nodeByCategoryTitle("试用反馈", "内部试用反馈记录");
  linkOnce(acceptance?.id || feedbackLog?.id || state.selectedId, id);
  state.selectedId = id;
  persistWorkspace("已记录现场反馈");
  render();
}

function buildLiveFeedbackMarkdown() {
  const rows = liveFeedbackRows();
  return [
    "# Winnsen Canvas 现场反馈记录",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    rows.length ? "| 时间 | 角色 | 场景 | 优先级 | 评分 | 观察 | 响应动作 |" : "暂无现场反馈。",
    rows.length ? "| --- | --- | --- | --- | --- | --- | --- |" : "",
    ...rows.map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
  ]
    .filter(Boolean)
    .join("\n");
}

function exportLiveFeedbackMarkdown() {
  downloadText(buildLiveFeedbackMarkdown(), "winnsen-live-feedback.md", "text/markdown");
  setStatus("已导出现场反馈");
}

function upsertMorningBriefNode(title, partial, fallbackId) {
  const existing = nodeByCategoryTitle("明早晨会", title);
  if (existing) {
    Object.assign(existing, partial, { title, category: "明早晨会" });
    return existing;
  }
  const node = {
    id: fallbackId,
    type: "knowledge",
    title,
    category: "明早晨会",
    ...partial,
  };
  nodes.push(node);
  return node;
}

function addMorningBriefWorkspace(message = "已生成明早晨会包") {
  const baseX = 160 - state.offsetX / state.scale;
  const baseY = 2240 - state.offsetY / state.scale;
  const stamp = Date.now();
  const brief = morningBriefState();
  const status = brief.readyScore >= 90 ? "可开会" : brief.readyScore >= 75 ? "待确认" : "需补齐";
  const badge = brief.readyScore >= 90 ? "green" : brief.readyScore >= 75 ? "amber" : "red";

  const hub = upsertMorningBriefNode(
    "Winnsen Canvas 明早晨会包",
    {
      subtitle: `${morningBriefDateLabel()} · ${brief.readyScore}% 就绪 · ${brief.p0p1} 个 P0/P1`,
      status,
      badge,
      x: baseX,
      y: baseY,
      reusableInsight: "把过夜迭代的画布、反馈、Gate、资料缺口和下一轮开发动作收束成明早可直接讲的会议包。",
      validation: "晨会包必须能回答：现在能不能内部试用、最大风险是什么、谁明天负责推进。",
      learningRows: morningBriefRows(),
      tags: ["明早晨会", "内部试用", "风险雷达", "负责人跟进"],
      tasks: morningBriefRows().map((row) => `${row[0]} ${row[1]}：${row[3]}`),
      details: [
        ["晨会时间", morningBriefDateLabel()],
        ["就绪度", `${brief.readyScore}%`],
        ["P0/P1", `${brief.p0p1} 个`],
        ["现场反馈", `${brief.feedback.length} 条`],
        ["下一步", "先讲风险，再讲负责人，再导出评审包和晨会包。"],
      ],
    },
    `knowledge-morning-brief-hub-${stamp}`,
  );

  const riskRadar = upsertMorningBriefNode(
    "明早风险雷达",
    {
      subtitle: `${brief.risks.length} 个风险信号 · 优先处理 P0/P1`,
      status: brief.p0p1 ? "需关注" : "稳定",
      badge: brief.p0p1 ? "amber" : "green",
      x: baseX + 430,
      y: baseY,
      reusableInsight: "把 Gate、现场反馈、资料缺口和低评分项合并成一张风险雷达。",
      validation: "每个风险都能指向负责人、证据和下一步动作。",
      learningRows: brief.risks,
      tags: ["明早晨会", "风险雷达", "P0/P1"],
      tasks: brief.risks.map((row) => `${row[0]} ${row[1]}：${row[3]} -> ${row[4]}`),
      details: brief.risks.map((row) => [`${row[0]} · ${row[1]}`, `${row[2]}：${row[3]}。${row[4]}`]),
    },
    `knowledge-morning-brief-risk-${stamp}`,
  );

  const runOrder = upsertMorningBriefNode(
    "晨会发言顺序",
    {
      subtitle: "开场、风险、反馈、Gate、资料、开发、沉淀",
      status: "议程",
      badge: "blue",
      x: baseX + 430,
      y: baseY + 300,
      reusableInsight: "借鉴成熟协作工作台的模板化会议路径，让跨部门试用会议不跑偏。",
      validation: "每个发言主题都有负责人、焦点和预期输出。",
      learningRows: morningBriefRows(),
      tags: ["明早晨会", "议程", "发言顺序"],
      tasks: morningBriefRows().map((row) => `${row[2]}准备：${row[1]}`),
      details: morningBriefRows().map((row) => [`${row[0]} · ${row[1]}`, `${row[2]}：${row[3]}。输出：${row[4]}`]),
    },
    `knowledge-morning-brief-agenda-${stamp}`,
  );

  const ownerBoard = upsertMorningBriefNode(
    "负责人跟进看板",
    {
      subtitle: "把明早会议输出转成负责人、优先级和验收标准",
      status: "跟进",
      badge: "violet",
      x: baseX + 860,
      y: baseY + 140,
      reusableInsight: "从 AppFlowy / AFFiNE 的看板和数据库视角，把反馈闭环变成可追踪任务。",
      validation: "每个负责人都知道自己明天要补什么、为什么补、补到什么程度算完成。",
      learningRows: morningBriefOwnerRows(),
      tags: ["明早晨会", "负责人", "Backlog", "看板"],
      tasks: morningBriefOwnerRows().map((row) => `${row[0]} · ${row[1]} ${row[2]}：${row[4]}`),
      details: morningBriefOwnerRows().map((row) => [row[0], `${row[1]} · ${row[2]}：${row[3]}。验收：${row[4]}`]),
    },
    `knowledge-morning-brief-owner-${stamp}`,
  );

  [riskRadar, runOrder, ownerBoard].forEach((node) => linkOnce(hub.id, node.id));
  [
    nodeByCategoryTitle("试用验收中心", "Winnsen Canvas 内部试用验收中心"),
    nodeByCategoryTitle("现场反馈", "产品设计现场反馈"),
    nodeByCategoryTitle("迭代优先级", "内部试用后迭代优先级"),
    nodeByCategoryTitle("资料补齐", "内部资料补齐台"),
    nodeByCategoryTitle("试用反馈", "内部试用反馈记录"),
  ].forEach((node) => linkOnce(node?.id, hub.id));

  state.selectedId = hub.id;
  persistWorkspace(message);
  render();
  return hub.id;
}

function refreshMorningBriefEvidence() {
  addMorningBriefWorkspace("已刷新明早晨会证据");
}

function buildMorningBriefMarkdown() {
  const brief = morningBriefState();
  return [
    "# Winnsen Canvas 明早晨会包",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    `晨会时间：${morningBriefDateLabel()}`,
    `就绪度：${brief.readyScore}%`,
    `P0/P1：${brief.p0p1} 个`,
    "",
    "## 发言顺序",
    "",
    "| 优先级 | 主题 | 负责人 | 会议焦点 | 输出 |",
    "| --- | --- | --- | --- | --- |",
    ...morningBriefRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 风险雷达",
    "",
    "| 优先级 | 来源 | 负责人 | 风险 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...brief.risks.map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 负责人跟进",
    "",
    "| 负责人 | 优先级 | 主题 | 会议焦点 | 验收输出 |",
    "| --- | --- | --- | --- | --- |",
    ...morningBriefOwnerRows().map((row) => `| ${row.map((cell) => String(cell || "待补充").replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 使用建议",
    "",
    "- 明早先打开评审包，再打开晨会包；先讲风险和负责人，不先讲功能列表。",
    "- 会议中继续用“现场反馈”记录真实意见，结束后刷新晨会证据。",
    "- P0/P1 直接进入下一轮开发 backlog，P2/P3 进入知识库复盘。",
  ].join("\n");
}

function exportMorningBriefMarkdown() {
  downloadText(buildMorningBriefMarkdown(), "winnsen-morning-brief.md", "text/markdown");
  setStatus("已导出明早晨会包");
}

function upsertExecutionDispatchNode(title, partial, fallbackId) {
  const existing = nodeByCategoryTitle("执行派单", title);
  if (existing) {
    Object.assign(existing, partial, { title, category: "执行派单" });
    return existing;
  }
  const node = {
    id: fallbackId,
    category: "执行派单",
    ...partial,
    title,
  };
  nodes.push(node);
  return node;
}

function addExecutionDispatchWorkspace(message = "已生成执行派单看板") {
  const rows = executionTaskRows();
  const baseX = 160 - state.offsetX / state.scale;
  const baseY = 2820 - state.offsetY / state.scale;
  const stamp = Date.now();
  const p0Count = rows.filter((row) => row.priority === "P0").length;
  const p1Count = rows.filter((row) => row.priority === "P1").length;
  const board = upsertExecutionDispatchNode(
    "明日执行派单看板",
    {
      type: "knowledge",
      subtitle: `${rows.length} 项任务 · P0 ${p0Count} · P1 ${p1Count}`,
      status: "派单",
      badge: p0Count ? "red" : "blue",
      x: baseX,
      y: baseY,
      reusableInsight: "把晨会风险、试用反馈、资料缺口和迭代 backlog 转成可以派发给负责人的任务清单。",
      validation: "每项任务都有优先级、来源、负责人、截止时间和验收输出。",
      learningRows: rows.map((row) => [row.priority, row.title, row.source, row.owner, row.due, row.acceptance, row.status]),
      tags: ["执行派单", "任务看板", "P0/P1", "负责人"],
      tasks: rows.map((row) => `${row.priority} ${row.owner}：${row.title}（${row.due}）`),
      details: [
        ["任务总数", `${rows.length} 项`],
        ["P0/P1", `${p0Count}/${p1Count}`],
        ["同步来源", "明早晨会包、现场反馈、Gate 评分、资料补齐、试用会话。"],
        ["验收", "明早会后每个 P0/P1 都能进入任务看板并明确负责人。"],
      ],
    },
    `knowledge-execution-dispatch-board-${stamp}`,
  );

  rows.forEach((row, index) => {
    const task = upsertExecutionDispatchNode(
      `${row.priority} · ${row.title}`,
      {
        type: "review",
        subtitle: `${row.source} · ${row.owner} · ${row.due}`,
        status: row.priority,
        badge: row.priority === "P0" ? "red" : row.priority === "P1" ? "amber" : "blue",
        x: baseX + 430 + (index % 2) * 410,
        y: baseY + Math.floor(index / 2) * 250,
        owner: row.owner,
        due: row.due,
        executionSource: row.source,
        executionAcceptance: row.acceptance,
        executionStatus: row.status,
        reusableInsight: row.title,
        validation: row.acceptance,
        learningRows: [[row.priority, row.title, row.source, row.owner, row.due, row.acceptance, row.status]],
        tags: ["执行派单", row.priority, row.owner, row.source],
        tasks: [`${row.owner}：${row.title}`, `验收：${row.acceptance}`],
        details: [
          ["优先级", row.priority],
          ["来源", row.source],
          ["负责人", row.owner],
          ["截止", row.due],
          ["状态", row.status],
          ["验收", row.acceptance],
        ],
      },
      `review-execution-dispatch-${row.id}-${stamp}`,
    );
    linkOnce(board.id, task.id);
  });

  [
    nodeByCategoryTitle("明早晨会", "Winnsen Canvas 明早晨会包"),
    nodeByCategoryTitle("明早晨会", "明早风险雷达"),
    nodeByCategoryTitle("迭代优先级", "内部试用后迭代优先级"),
    nodeByCategoryTitle("试用行动", "试用会后行动项"),
  ].forEach((node) => linkOnce(node?.id, board.id));

  state.selectedId = board.id;
  persistWorkspace(message);
  render();
  return board.id;
}

function syncExecutionDispatchTasks() {
  addMorningBriefWorkspace("已同步晨会包并刷新执行派单");
  addExecutionDispatchWorkspace("已同步执行派单任务");
}

function buildExecutionDispatchMarkdown() {
  const rows = executionTaskRows();
  return [
    "# Winnsen Canvas 明日执行派单",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    `任务总数：${rows.length}`,
    "",
    "| 优先级 | 任务 | 来源 | 负责人 | 截止 | 验收 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...rows.map((row) =>
      [row.priority, row.title, row.source, row.owner, row.due, row.acceptance, row.status]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 使用建议",
    "",
    "- 明早晨会先确认 P0 是否阻塞内部试用，P1 是否能当天派发。",
    "- 每个负责人只认领自己名下任务，验收输出必须能回写画布或知识库。",
    "- 会后点击“同步任务”，让新反馈继续进入派单看板。",
  ].join("\n");
}

function exportExecutionDispatchMarkdown() {
  downloadText(buildExecutionDispatchMarkdown(), "winnsen-execution-dispatch.md", "text/markdown");
  setStatus("已导出执行派单");
}

function guidedStartStepRows() {
  return guidedStartSteps.map((item) => [
    item.order,
    item.title,
    item.action,
    item.tool,
    item.result,
    item.owner,
  ]);
}

function guidedStartTrackRows() {
  return guidedStartTracks.map((item) => [item.track, item.firstAction, item.bestFor, item.success]);
}

function addGuidedStartMap() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "试用导航" && node.title === "Winnsen Canvas 试用起步导航");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("试用起步导航已存在");
    render();
    return;
  }

  const baseX = 260 - state.offsetX / state.scale;
  const baseY = 240 - state.offsetY / state.scale;
  const stamp = Date.now();
  const guideId = `knowledge-guided-start-${stamp}`;

  nodes.push({
    id: guideId,
    type: "knowledge",
    title: "Winnsen Canvas 试用起步导航",
    subtitle: "第一次内部试用按 6 步跑：选路线、选对象、启动工作流、查缺口、导报告、记反馈",
    status: "导航",
    badge: "green",
    x: baseX,
    y: baseY,
    category: "试用导航",
    reusableInsight: "内部试用者需要一条推荐路径，先知道从哪里开始，再探索更多工具。",
    validation: "首次打开能按 6 步完成一次产品或客户项目试跑，并导出评审包。",
    learningRows: guidedStartStepRows(),
    tags: ["试用导航", "推荐起步路径", "内部试用", "Winnsen Canvas"],
    tasks: guidedStartSteps.map((item) => `${item.order} ${item.title}：${item.result}`),
    details: [
      ["推荐路线", "选路线 → 选对象 → 启动工作流 → 查缺口 → 导报告 → 记反馈。"],
      ["目标", "降低首次试用门槛，让销售、产品、结构、UI 和市场都知道先做什么。"],
      ["验收", "试用者无需说明书也能完成一次 60 分钟试跑。"],
    ],
  });

  guidedStartSteps.forEach((item, index) => {
    const id = `knowledge-guided-start-step-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.order} · ${item.title}`,
      subtitle: `${item.tool} · ${item.result}`,
      status: "导航",
      badge: index < 3 ? "green" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 270,
      category: "试用导航",
      order: item.order,
      action: item.action,
      tool: item.tool,
      result: item.result,
      owner: item.owner,
      reusableInsight: item.result,
      validation: item.action,
      learningRows: [
        ["步骤", item.order],
        ["标题", item.title],
        ["动作", item.action],
        ["工具", item.tool],
        ["结果", item.result],
        ["负责人", item.owner],
      ],
      tags: ["试用导航", item.order, item.title],
      tasks: [item.action, `确认结果：${item.result}`],
      details: [
        ["动作", item.action],
        ["工具", item.tool],
        ["结果", item.result],
        ["负责人", item.owner],
      ],
    });
    links.push([guideId, id]);
  });

  guidedStartTracks.forEach((item, index) => {
    const id = `knowledge-guided-start-track-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.track} 路线`,
      subtitle: `${item.bestFor} · ${item.success}`,
      status: "路线",
      badge: "amber",
      x: baseX + 1230,
      y: baseY + index * 260,
      category: "试用导航",
      track: item.track,
      firstAction: item.firstAction,
      bestFor: item.bestFor,
      success: item.success,
      reusableInsight: item.bestFor,
      validation: item.success,
      learningRows: [
        ["路线", item.track],
        ["第一步", item.firstAction],
        ["适合", item.bestFor],
        ["成功标准", item.success],
      ],
      tags: ["试用路线", item.track],
      tasks: [item.firstAction, `验收：${item.success}`],
      details: [
        ["第一步", item.firstAction],
        ["适合", item.bestFor],
        ["成功标准", item.success],
      ],
    });
    links.push([guideId, id]);
  });

  state.selectedId = guideId;
  persistWorkspace("已生成试用起步导航");
  render();
}

function buildGuidedStartMarkdown() {
  return [
    "# Winnsen Canvas 试用起步导航",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 6 步试用路径",
    "",
    "| 步骤 | 标题 | 动作 | 工具 | 结果 | 负责人 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...guidedStartSteps.map((item) =>
      [item.order, item.title, item.action, item.tool, item.result, item.owner]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 推荐试用路线",
    "",
    "| 路线 | 第一步 | 适合 | 成功标准 |",
    "| --- | --- | --- | --- |",
    ...guidedStartTracks.map((item) =>
      [item.track, item.firstAction, item.bestFor, item.success]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
  ].join("\n");
}

function exportGuidedStartMarkdown() {
  downloadText(buildGuidedStartMarkdown(), "winnsen-guided-start.md", "text/markdown");
  setStatus("已导出试用起步导航");
}

function pilotFeedbackRows() {
  return pilotFeedbackSignals.map((item) => [
    item.priority,
    item.source,
    item.role,
    item.observation,
    item.impact,
    item.response,
  ]);
}

function pilotGateScoreRows() {
  return pilotGateScorecard.map((item) => [item.gate, item.score, item.result, item.evidence, item.next]);
}

function pilotIterationRows() {
  return pilotIterationBacklog.map((item) => [
    item.priority,
    item.item,
    item.why,
    item.owner,
    item.acceptance,
  ]);
}

function addPilotFeedbackLog() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "试用反馈" && node.title === "内部试用反馈记录");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("试用反馈记录已存在");
    render();
    return;
  }

  const baseX = 250 - state.offsetX / state.scale;
  const baseY = 260 - state.offsetY / state.scale;
  const stamp = Date.now();
  const feedbackId = `knowledge-pilot-feedback-log-${stamp}`;
  const avgScore = Math.round(pilotGateScorecard.reduce((sum, item) => sum + item.score, 0) / pilotGateScorecard.length);

  nodes.push({
    id: feedbackId,
    type: "knowledge",
    title: "内部试用反馈记录",
    subtitle: `试用观察、Gate 评分和下一轮改进信号 · 平均 ${avgScore} 分`,
    status: "反馈",
    badge: "blue",
    x: baseX,
    y: baseY,
    category: "试用反馈",
    reusableInsight: "内部试用反馈要绑定角色、场景、影响和响应动作，避免只留下零散意见。",
    validation: "每条反馈都能追溯到试用场景，并转成 Gate 分数或迭代 backlog。",
    learningRows: pilotFeedbackRows(),
    tags: ["试用反馈", "内部试用", "Gate 评分", "迭代"],
    tasks: ["组织 1 次真实内部试用会议", "按角色记录反馈", "把 P0/P1 反馈转成迭代任务"],
    details: [
      ["平均分", `${avgScore} / 100`],
      ["反馈来源", pilotFeedbackSignals.map((item) => item.source).join(" / ")],
      ["下一步", "把 P0 反馈优先转成可开发任务。"],
    ],
  });

  pilotFeedbackSignals.forEach((item, index) => {
    const id = `knowledge-pilot-feedback-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.priority} · ${item.source}反馈`,
      subtitle: `${item.role} · ${item.observation}`,
      status: item.priority,
      badge: item.priority === "P0" ? "amber" : "blue",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 270,
      category: "试用反馈",
      source: item.source,
      role: item.role,
      observation: item.observation,
      impact: item.impact,
      response: item.response,
      priority: item.priority,
      reusableInsight: item.response,
      validation: item.impact,
      learningRows: [
        ["优先级", item.priority],
        ["来源", item.source],
        ["角色", item.role],
        ["观察", item.observation],
        ["影响", item.impact],
        ["响应", item.response],
      ],
      tags: ["试用反馈", item.priority, item.source],
      tasks: [item.response, `验证影响是否降低：${item.impact}`],
      details: [
        ["角色", item.role],
        ["观察", item.observation],
        ["影响", item.impact],
        ["响应", item.response],
      ],
    });
    links.push([feedbackId, id]);
  });

  pilotGateScorecard.forEach((item, index) => {
    const id = `knowledge-pilot-score-${index}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.gate} · ${item.score} 分`,
      subtitle: `${item.result} · ${item.next}`,
      status: item.result,
      badge: item.score >= 80 ? "green" : item.score >= 70 ? "amber" : "red",
      x: baseX + 1230,
      y: baseY + index * 230,
      category: "试用反馈",
      gate: item.gate,
      score: item.score,
      result: item.result,
      evidence: item.evidence,
      next: item.next,
      reusableInsight: item.next,
      validation: item.evidence,
      learningRows: [
        ["Gate", item.gate],
        ["分数", `${item.score}`],
        ["结果", item.result],
        ["证据", item.evidence],
        ["下一步", item.next],
      ],
      tags: ["Gate 评分", item.gate, item.result],
      tasks: [item.next, `补强证据：${item.evidence}`],
      details: [
        ["结果", item.result],
        ["证据", item.evidence],
        ["下一步", item.next],
      ],
    });
    links.push([feedbackId, id]);
  });

  state.selectedId = feedbackId;
  persistWorkspace("已生成试用反馈记录");
  render();
}

function addPilotIterationBacklog() {
  const existing = nodes.find((node) => node.type === "knowledge" && node.category === "迭代优先级" && node.title === "内部试用后迭代优先级");
  if (existing) {
    state.selectedId = existing.id;
    setStatus("迭代优先级已存在");
    render();
    return;
  }

  const baseX = 270 - state.offsetX / state.scale;
  const baseY = 280 - state.offsetY / state.scale;
  const stamp = Date.now();
  const backlogId = `knowledge-pilot-iteration-backlog-${stamp}`;

  nodes.push({
    id: backlogId,
    type: "knowledge",
    title: "内部试用后迭代优先级",
    subtitle: "把试用反馈转成下一轮可开发、可验收的任务 backlog",
    status: "Backlog",
    badge: "violet",
    x: baseX,
    y: baseY,
    category: "迭代优先级",
    reusableInsight: "试用反馈必须沉淀为 P0/P1/P2 backlog，下一轮才知道先做什么。",
    validation: "每个 backlog 项都有原因、负责人和验收标准。",
    learningRows: pilotIterationRows(),
    tags: ["迭代优先级", "Backlog", "内部试用", "开发任务"],
    tasks: pilotIterationBacklog.map((item) => `${item.priority} ${item.item}：${item.acceptance}`),
    details: [
      ["P0", "推荐起步路径、真实 Winnsen 产品资料。"],
      ["P1", "文件路径规范、Gate 缺口转任务。"],
      ["P2", "AI 品审与视频 Prompt 复核。"],
    ],
  });

  pilotIterationBacklog.forEach((item, index) => {
    const id = `knowledge-pilot-iteration-${item.id}-${stamp}`;
    nodes.push({
      id,
      type: "knowledge",
      title: `${item.priority} · ${item.item}`,
      subtitle: `${item.owner} · ${item.why}`,
      status: item.priority,
      badge: item.priority === "P0" ? "amber" : item.priority === "P1" ? "blue" : "green",
      x: baseX + 410 + (index % 2) * 410,
      y: baseY + Math.floor(index / 2) * 270,
      category: "迭代优先级",
      priority: item.priority,
      item: item.item,
      why: item.why,
      owner: item.owner,
      acceptance: item.acceptance,
      reusableInsight: item.why,
      validation: item.acceptance,
      learningRows: [
        ["优先级", item.priority],
        ["事项", item.item],
        ["原因", item.why],
        ["负责人", item.owner],
        ["验收", item.acceptance],
      ],
      tags: ["迭代优先级", item.priority, item.item],
      tasks: [`开发：${item.item}`, `验收：${item.acceptance}`],
      details: [
        ["原因", item.why],
        ["负责人", item.owner],
        ["验收", item.acceptance],
      ],
    });
    links.push([backlogId, id]);
  });

  state.selectedId = backlogId;
  persistWorkspace("已生成迭代优先级");
  render();
}

function buildPilotFeedbackMarkdown() {
  return [
    "# Winnsen Canvas 试用反馈与迭代",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 试用反馈",
    "",
    "| 优先级 | 来源 | 角色 | 观察 | 影响 | 响应 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...pilotFeedbackSignals.map((item) =>
      [item.priority, item.source, item.role, item.observation, item.impact, item.response]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## Gate 评分",
    "",
    "| Gate | 分数 | 结果 | 证据 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotGateScorecard.map((item) =>
      [item.gate, item.score, item.result, item.evidence, item.next]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
    "",
    "## 下一轮迭代 Backlog",
    "",
    "| 优先级 | 事项 | 原因 | 负责人 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotIterationBacklog.map((item) =>
      [item.priority, item.item, item.why, item.owner, item.acceptance]
        .map((cell) => String(cell || "待补充").replace(/\|/g, "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`),
  ].join("\n");
}

function exportPilotFeedbackMarkdown() {
  downloadText(buildPilotFeedbackMarkdown(), "winnsen-pilot-feedback.md", "text/markdown");
  setStatus("已导出试用反馈");
}

function addUiFlowForProduct(product, index = 0) {
  if (!product || product.type !== "product") return null;
  const existing = nodes.find((node) => node.type === "flow" && node.sourceProductId === product.id);
  if (existing) {
    state.selectedId = existing.id;
    setStatus("该产品已有界面流程");
    render();
    return existing.id;
  }
  const id = `flow-product-${product.id}-${Date.now()}-${index}`;
  nodes.push({
    id,
    ...uiFlowNodeForProduct(product, index),
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成界面流程");
  render();
  return id;
}

function addUiFlowForCurrentProduct() {
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  if (!product || product.type !== "product") {
    setStatus("请先选择产品卡");
    return;
  }
  addUiFlowForProduct(product);
}

function addUiFlowsForAllProducts() {
  const products = nodes.filter((node) => node.type === "product");
  const productIdsWithFlow = new Set(nodes.filter((node) => node.type === "flow").map((node) => node.sourceProductId).filter(Boolean));
  const pending = products.filter((product) => !productIdsWithFlow.has(product.id));
  if (!pending.length) {
    setStatus("所有产品已有界面流程");
    return;
  }
  const createdIds = [];
  pending.forEach((product, index) => {
    const id = `flow-product-${product.id}-${Date.now()}-${index}`;
    nodes.push({
      id,
      ...uiFlowNodeForProduct(product, index),
    });
    links.push([product.id, id]);
    createdIds.push(id);
  });
  state.selectedId = createdIds[0];
  persistWorkspace(`已生成 ${createdIds.length} 条界面流程`);
  render();
}

function addVideoPlanForCurrentProduct() {
  const product = productForWorkNode(getSelectedNode()) || currentProductTarget();
  if (!product || product.type !== "product") {
    setStatus("请先选择产品卡或界面流程");
    return;
  }
  const id = `video-product-${product.id}-${Date.now()}`;
  nodes.push({
    id,
    ...videoNodeForProduct(product),
  });
  links.push([product.id, id]);
  const relatedFlow = nodes.find((node) => node.type === "flow" && node.sourceProductId === product.id);
  if (relatedFlow) links.push([relatedFlow.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成视频计划卡");
  render();
}

function addNode(partial) {
  const id = `${partial.type}-${Date.now()}`;
  nodes.push({
    id,
    x: 240 - state.offsetX / state.scale,
    y: 180 - state.offsetY / state.scale,
    details: [["下一步", "补充图片、参数、风险点和项目关联。"]],
    ...partial,
  });
  state.selectedId = id;
  persistWorkspace("已新增");
  render();
  return id;
}

function addTemplate(key) {
  addNode(templates[key]);
}

function addScenario(key) {
  const scenario = scenarioTemplates[key];
  if (!scenario) return;
  const base = templates[scenario.product] || templates.parcel;
  const baseX = 150 - state.offsetX / state.scale;
  const baseY = 140 - state.offsetY / state.scale;
  const stamp = Date.now();
  const productId = `product-${key}-${stamp}`;
  const reviewId = `review-${key}-${stamp}`;
  const knowledgeId = `knowledge-${key}-${stamp}`;
  const videoId = `video-${key}-${stamp}`;

  nodes.push(
    {
      ...clone(base),
      id: productId,
      title: scenario.title,
      subtitle: base.subtitle,
      status: "项目启动",
      x: baseX,
      y: baseY,
      tasks: scenario.tasks,
      details: [
        ["项目目标", "把产品资料、结构风险、客户场景、视频素材放入同一张画布推进。"],
        ["启动资料", "产品图、结构图、UI 截图、客户需求、报价差异项。"],
      ],
    },
    {
      id: reviewId,
      type: "review",
      title: scenario.reviewTitle,
      subtitle: "按结构、装配、外观、维护、客户场景拆解风险",
      status: "P1",
      badge: "red",
      x: baseX + 390,
      y: baseY,
      owner: "产品/结构",
      due: "本周",
      category: "结构评审",
      details: [
        ["风险", "先记录需要结构工程师、供应商或样机验证的问题。"],
        ["问题", engineerQuestions.slice(0, 4).join("；")],
      ],
    },
    {
      id: knowledgeId,
      type: "knowledge",
      title: scenario.knowledgeTitle,
      subtitle: "把本项目的结构和设计判断沉淀为可复用经验",
      status: "沉淀",
      badge: "green",
      x: baseX + 780,
      y: baseY,
      modules: base.modules || [],
      details: [
        ["学习卡", "按产品类型、柜体、门板、锁具、操作区、线束、风险和经验记录。"],
        ["复用", "用于下一次同类柜体、售卖机或客户定制项目。"],
      ],
    },
    {
      id: videoId,
      type: "video",
      title: scenario.videoTitle,
      subtitle: "从产品资料和评审结论生成镜头、旁白、字幕和 prompt",
      status: "脚本",
      badge: "blue",
      x: baseX + 390,
      y: baseY + 310,
      details: [
        ["镜头", "产品全景、操作区、门锁开合、后台管理、客户场景。"],
        ["输出", "英文卖点、分镜 prompt、封面图 prompt、素材清单。"],
      ],
    },
  );

  links.push([productId, reviewId], [reviewId, knowledgeId], [productId, videoId], [knowledgeId, videoId]);
  state.selectedId = productId;
  persistWorkspace("已生成方案模板");
  render();
}

function fitView() {
  state.offsetX = 40;
  state.offsetY = 28;
  state.scale = 0.86;
  persistWorkspace("视图已适配");
  render();
}

function showReport() {
  const products = nodes.filter((node) => node.type === "product");
  const briefs = nodes.filter((node) => node.type === "brief");
  const reviews = nodes.filter((node) => node.type === "review");
  const knowledge = nodes.filter((node) => node.type === "knowledge");
  const flows = nodes.filter((node) => node.type === "flow");
  const assets = nodes.filter((node) => node.type === "asset");
  const videos = nodes.filter((node) => node.type === "video");
  const quoteGates = reviews.filter((node) => node.category === "报价决策门");
  const fileRows = fileLedgerRows();
  const tasks = nodes.flatMap((node) => node.tasks || []);
  const reportProduct = products.find((node) => node.id === state.selectedId) || products[0] || getSelectedNode();
  reportContent.innerHTML = `
    <h3>产品范围</h3>
    <ul>${products.map((node) => `<li>${escapeHtml(node.title)}：${escapeHtml(node.subtitle)}</li>`).join("")}</ul>
    <h3>试用启动台</h3>
    ${buildPilotLaunchTable()}
    <h3>角色试用路线</h3>
    ${buildRolePlaybookTable()}
    <h3>试用验收中心</h3>
    ${buildTrialAcceptanceTable()}
    <h3>开源参考 / 产品路线</h3>
    ${buildOpenSourceReferenceTable()}
    <h4>GitHub 参考证据</h4>
    ${buildGitHubReferenceEvidenceTable()}
    ${buildProductRoadmapTable()}
    <h3>团队协作 / 权限</h3>
    ${buildTeamRoleTable()}
    ${buildTeamHandoffTable()}
    <h3>开发规格 / 数据模型</h3>
    ${buildDataModelTable()}
    ${buildMvpDeliveryTable()}
    <h3>工作流启动器</h3>
    ${buildWorkflowLauncherTable()}
    <h3>成熟产品仿照 / 今夜目标</h3>
    ${buildMatureProductPatternTable()}
    ${buildWinnsenSignatureTable()}
    ${buildOvernightRunTable()}
    <h3>内部试用包 / 验收 Gate</h3>
    ${buildInternalPilotScenarioTable()}
    ${buildInternalPilotChecklistTable()}
    ${buildInternalPilotAgendaTable()}
    <h3>试用会话记录</h3>
    ${buildPilotSessionTable()}
    ${buildPilotSessionActionTable()}
    <h3>试用起步导航</h3>
    ${buildGuidedStartStepTable()}
    ${buildGuidedStartTrackTable()}
    <h3>试用反馈 / 下一轮迭代</h3>
    ${buildPilotFeedbackTable()}
    ${buildPilotGateScoreTable()}
    ${buildPilotIterationTable()}
    <h3>现场反馈</h3>
    ${buildLiveFeedbackTable()}
    <h3>明早晨会包</h3>
    ${buildMorningBriefTable()}
    ${buildMorningBriefRiskTable()}
    <h3>执行派单</h3>
    ${buildExecutionDispatchTable()}
    <h3>官网公开产品资料种子包</h3>
    <h4>产品种子</h4>
    ${buildOfficialSeedTable()}
    <h4>产品线覆盖</h4>
    ${buildOfficialSeedLineTable()}
    <h3>内部资料补齐台</h3>
    <h4>产品补齐队列</h4>
    ${buildReadinessProductTable()}
    <h4>责任矩阵</h4>
    ${buildReadinessRoleTable()}
    <h3>产品资料字段</h3>
    ${buildProductDataTable(products)}
    <h3>客户需求 / 版本差异</h3>
    ${buildCustomerBriefTable(briefs)}
    <h3>报价决策门</h3>
    ${buildQuoteGateNodeTable(quoteGates)}
    <h3>高优先级问题</h3>
    <ul>${reviews.map((node) => `<li>${escapeHtml(node.title)}：${escapeHtml(node.subtitle)}</li>`).join("")}</ul>
    <h3>品审模板覆盖</h3>
    ${buildReviewCoverageTable(reviews)}
    <h3>界面流程设计</h3>
    ${buildUiFlowTable(flows)}
    <h3>图库 / 模型库</h3>
    <ul>${assets.map((node) => `<li>${escapeHtml(node.title)}：${escapeHtml(node.assetType || node.status || "素材")} · ${escapeHtml(node.usage || node.subtitle)}</li>`).join("")}</ul>
    ${buildAssetLibraryTable(assets)}
    <h3>文件入库台账</h3>
    ${buildFileLedgerTable(fileRows)}
    <h3>知识沉淀</h3>
    <ul>${knowledge.map((node) => `<li>${escapeHtml(node.title)}：${escapeHtml(node.subtitle)}</li>`).join("")}</ul>
    <h3>知识库经验表</h3>
    ${buildKnowledgeTable(knowledge)}
    <h3>视频脚本方向</h3>
    ${buildVideoPlanTable(videos)}
    <ul>
      <li>痛点：无人值守、取件效率、远程管理、定制场景。</li>
      <li>镜头：产品全景、柜门开合、屏幕操作、后台仪表盘、客户场景。</li>
      <li>输出：旁白、字幕、分镜 prompt、封面 prompt、素材清单。</li>
    </ul>
    <h3>结构评审维度</h3>
    <ul>${reviewDimensions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <h3>结构学习卡</h3>
    ${buildLearningCardTable(reportProduct)}
    <h3>待办任务</h3>
    <ul>${tasks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  `;
  reportModal.hidden = false;
}

function buildProductDataTable(products) {
  if (!products.length) return "<p>暂无产品资料。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>型号</th>
          <th>产品线</th>
          <th>应用场景</th>
          <th>门数/结构</th>
          <th>屏幕/软件</th>
          <th>认证</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(
            (node) => `
              <tr>
                <td>${escapeHtml(node.model || node.title)}</td>
                <td>${escapeHtml(node.line || "待补充")}</td>
                <td>${escapeHtml(node.applications || node.subtitle || "待补充")}</td>
                <td>${escapeHtml(node.doorCount || "待补充")}</td>
                <td>${escapeHtml([node.screen, node.software].filter(Boolean).join("；") || "待补充")}</td>
                <td>${escapeHtml(node.certifications || "待补充")}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildCustomerBriefTable(briefs) {
  if (!briefs.length) return "<p>暂无客户需求。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品</th>
          <th>客户/项目</th>
          <th>区域/市场</th>
          <th>需求类型</th>
          <th>需求点</th>
          <th>版本/变更</th>
        </tr>
      </thead>
      <tbody>
        ${briefs
          .map((node) => {
            const product = nodes.find((item) => item.id === node.sourceProductId);
            return `
              <tr>
                <td>${escapeHtml(product?.title || node.subtitle || "通用产品")}</td>
                <td>${escapeHtml(node.customerName || "待补充")}</td>
                <td>${escapeHtml([node.region, node.market].filter(Boolean).join("；") || "待补充")}</td>
                <td>${escapeHtml(node.requestType || "待补充")}</td>
                <td>${escapeHtml((node.requirements || []).join(" / ") || "待补充")}</td>
                <td>${escapeHtml([(node.changeRequests || []).join(" / "), formatVersionRows(node.versionRows || [])].filter(Boolean).join("；") || "待补充")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildQuoteGateNodeTable(gates) {
  if (!gates.length) return "<p>暂无报价 Gate。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>项目</th>
          <th>结论</th>
          <th>负责人</th>
          <th>待确认</th>
          <th>所需资料</th>
        </tr>
      </thead>
      <tbody>
        ${gates
          .map(
            (node) => `
              <tr>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml(node.status || "待判断")}</td>
                <td>${escapeHtml(node.owner || "待分配")}</td>
                <td>${escapeHtml(node.impact || "待补充")}</td>
                <td>${escapeHtml((node.evidence || []).join(" / ") || "待补充")}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildReviewCoverageTable(reviews) {
  if (!reviews.length) return "<p>暂无品审问题。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>类别</th>
          <th>问题</th>
          <th>优先级</th>
          <th>负责人</th>
          <th>验证方式</th>
          <th>所需资料</th>
        </tr>
      </thead>
      <tbody>
        ${reviews
          .map(
            (node) => `
              <tr>
                <td>${escapeHtml(node.category || "品审")}</td>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml(node.status || "待定")}</td>
                <td>${escapeHtml(node.owner || "待分配")}</td>
                <td>${escapeHtml(node.validation || node.subtitle || "待补充")}</td>
                <td>${escapeHtml((node.evidence || []).join(" / ") || "待补充")}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildUiFlowTable(flows) {
  if (!flows.length) return "<p>暂无界面流程。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品</th>
          <th>流程</th>
          <th>用户/入口</th>
          <th>关键步骤</th>
          <th>异常状态</th>
          <th>检查点</th>
        </tr>
      </thead>
      <tbody>
        ${flows
          .map((node) => {
            const product = nodes.find((item) => item.id === node.sourceProductId);
            return `
              <tr>
                <td>${escapeHtml(product?.title || node.subtitle || "通用产品")}</td>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml([node.persona, (node.entryPoints || []).join(" / ")].filter(Boolean).join("；") || "待补充")}</td>
                <td>${escapeHtml((node.flowSteps || []).join(" / ") || "待补充")}</td>
                <td>${escapeHtml((node.errorStates || []).join(" / ") || "待补充")}</td>
                <td>${escapeHtml((node.uiChecklist || []).join(" / ") || "待补充")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildAssetLibraryTable(assets) {
  if (!assets.length) return "<p>暂无素材。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品</th>
          <th>素材包</th>
          <th>类型/格式</th>
          <th>负责人/版本</th>
          <th>路径/审批</th>
          <th>缺口</th>
        </tr>
      </thead>
      <tbody>
        ${assets
          .map((node) => {
            const product = nodes.find((item) => item.id === node.sourceProductId);
            return `
              <tr>
                <td>${escapeHtml(product?.title || node.relatedProduct || "通用素材")}</td>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml([node.assetType || node.status || "素材", (node.formats || []).join(" / ")].filter(Boolean).join("；") || "待补充")}</td>
                <td>${escapeHtml([node.assetOwner || "待分配", node.assetVersion || "待补充"].join(" / "))}</td>
                <td>${escapeHtml([node.storagePath || "待补充", node.approvalStatus || "待确认"].join(" / "))}</td>
                <td>${escapeHtml((node.missingAssets || []).join(" / ") || "无")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildFileLedgerTable(rows) {
  if (!rows.length) return "<p>暂无文件入库条目。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品/项目</th>
          <th>文件</th>
          <th>类型/格式</th>
          <th>负责人</th>
          <th>路径/状态</th>
          <th>用途/公开等级</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .slice(0, 24)
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row.productTitle)}</td>
                <td>${escapeHtml(row.name)}</td>
                <td>${escapeHtml([row.kind, row.formats].filter(Boolean).join(" / "))}</td>
                <td>${escapeHtml(row.owner || "待分配")}</td>
                <td>${escapeHtml([row.path || "待补充", row.status || "待确认"].join(" / "))}</td>
                <td>${escapeHtml([row.usage || "待补充", row.visibility || "内部"].join(" / "))}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildOpenSourceReferenceTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>参考产品</th>
          <th>GitHub</th>
          <th>借鉴定位</th>
          <th>Winnsen 落地</th>
          <th>风险</th>
        </tr>
      </thead>
      <tbody>
        ${openSourceReferenceCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.product)}</td>
                <td>${escapeHtml(item.repo)}</td>
                <td>${escapeHtml(item.role)}</td>
                <td>${escapeHtml(item.winnsenUse)}</td>
                <td>${escapeHtml(item.risk)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildGitHubReferenceEvidenceTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>参考产品</th>
          <th>成熟度</th>
          <th>活跃信号</th>
          <th>License</th>
          <th>可借鉴证据</th>
          <th>Winnsen 采纳决策</th>
          <th>边界动作</th>
        </tr>
      </thead>
      <tbody>
        ${openSourceReferenceCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.product)}</td>
                <td>${escapeHtml(`${item.stars} stars / ${item.forks} forks`)}</td>
                <td>${escapeHtml(item.activity)}</td>
                <td>${escapeHtml(item.license)}</td>
                <td>${escapeHtml(item.maturitySignal)}</td>
                <td>${escapeHtml(item.adoptDecision)}</td>
                <td>${escapeHtml(item.licenseAction)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildProductRoadmapTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>阶段</th>
          <th>目标</th>
          <th>范围</th>
          <th>负责人</th>
          <th>完成证据</th>
        </tr>
      </thead>
      <tbody>
        ${productRoadmapMilestones
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.phase)}</td>
                <td>${escapeHtml(item.goal)}</td>
                <td>${escapeHtml(item.scope)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.evidence)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildTeamRoleTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>角色</th>
          <th>团队</th>
          <th>权限</th>
          <th>输入</th>
          <th>输出</th>
          <th>交接</th>
        </tr>
      </thead>
      <tbody>
        ${teamRoleCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.role)}</td>
                <td>${escapeHtml(item.team)}</td>
                <td>${escapeHtml(item.permissions)}</td>
                <td>${escapeHtml(item.inputs)}</td>
                <td>${escapeHtml(item.outputs)}</td>
                <td>${escapeHtml(item.handoff)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildTeamHandoffTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>阶段</th>
          <th>负责人</th>
          <th>触发</th>
          <th>交付物</th>
          <th>下一步</th>
        </tr>
      </thead>
      <tbody>
        ${teamHandoffStages
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.phase)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.trigger)}</td>
                <td>${escapeHtml(item.deliverable)}</td>
                <td>${escapeHtml(item.next)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildDataModelTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>实体</th>
          <th>用途</th>
          <th>字段</th>
          <th>负责人</th>
          <th>存储</th>
          <th>验收</th>
        </tr>
      </thead>
      <tbody>
        ${dataModelCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.entity)}</td>
                <td>${escapeHtml(item.purpose)}</td>
                <td>${escapeHtml(item.fields)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.storage)}</td>
                <td>${escapeHtml(item.acceptance)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildMvpDeliveryTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>模块</th>
          <th>范围</th>
          <th>实现建议</th>
          <th>验收标准</th>
        </tr>
      </thead>
      <tbody>
        ${mvpDeliveryCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.priority)}</td>
                <td>${escapeHtml(item.module)}</td>
                <td>${escapeHtml(item.scope)}</td>
                <td>${escapeHtml(item.build)}</td>
                <td>${escapeHtml(item.acceptance)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildWorkflowLauncherTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>工作流</th>
          <th>负责人</th>
          <th>触发条件</th>
          <th>生成内容</th>
          <th>预期结果</th>
        </tr>
      </thead>
      <tbody>
        ${workflowLauncherCatalog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.priority)}</td>
                <td>${escapeHtml(item.title)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.trigger)}</td>
                <td>${escapeHtml(item.creates)}</td>
                <td>${escapeHtml(item.outcome)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildKnowledgeTable(knowledge) {
  if (!knowledge.length) return "<p>暂无知识卡。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>类别</th>
          <th>知识卡</th>
          <th>适用产品</th>
          <th>复用经验</th>
          <th>验证方式</th>
        </tr>
      </thead>
      <tbody>
        ${knowledge
          .map((node) => {
            const product = nodes.find((item) => item.id === node.sourceProductId);
            return `
              <tr>
                <td>${escapeHtml(node.category || "经验")}</td>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml(product?.title || node.subtitle || "通用产品")}</td>
                <td>${escapeHtml(node.reusableInsight || valueFromDetails(node, "可复用经验") || "待补充")}</td>
                <td>${escapeHtml(node.validation || "待补充")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildVideoPlanTable(videos) {
  if (!videos.length) return "<p>暂无视频计划。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品</th>
          <th>视频卡</th>
          <th>时长/受众</th>
          <th>镜头</th>
          <th>旁白 / Prompt</th>
        </tr>
      </thead>
      <tbody>
        ${videos
          .map((node) => {
            const product = nodes.find((item) => item.id === node.sourceProductId);
            return `
              <tr>
                <td>${escapeHtml(product?.title || "当前项目")}</td>
                <td>${escapeHtml(node.title)}</td>
                <td>${escapeHtml([node.duration || "30s", node.audience || "客户/销售/代理商"].join(" / "))}</td>
                <td>${escapeHtml((node.shotPlan || []).join(" / ") || valueFromDetails(node, "镜头") || "待补充")}</td>
                <td>${escapeHtml(node.voiceover || node.videoPrompt || valueFromDetails(node, "输出") || "待补充")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildLearningCardTable(product) {
  const modules = product.modules || [];
  const rows = [
    ["产品类型", product.title || "待补充"],
    ["柜体结构", modules.includes("柜体") || modules.includes("冷藏柜体") ? "钣金柜体，需确认大面加强、底座、防倾倒和喷涂影响。" : "待补充柜体结构。"],
    ["门板结构", "记录门板厚度、加强方式、门缝基准、开门角度和碰撞风险。"],
    ["铰链方式", "待结构工程师确认铰链类型、调节方式、下垂风险和更换路径。"],
    ["锁具方式", modules.includes("电控锁") || modules.includes("锁具") ? "电控锁/锁具模块，需确认锁舌啮合、公差和断电应急开启。" : "待补充锁具方式。"],
    ["操作区安装", modules.some((item) => item.includes("屏") || item.includes("扫码") || item.includes("操作")) ? "屏幕/扫码/摄像头操作区，建议作为可预装可替换模块。" : "待补充操作区模块。"],
    ["电子模块", "主板、电源、锁控板、支付/联网模块需记录安装板和维护方向。"],
    ["线束方式", modules.includes("线束") ? "线束需编号、防呆、固定点、余量和防夹路径。" : "待补充线束路径。"],
    ["主要装配顺序", "建议先预装门/锁/操作区/电子托盘，再整机装配并做门缝与通电检查。"],
    ["外观风险", "门缝不齐、外露螺丝、喷涂厚度、玻璃/屏幕压边和大面变形。"],
    ["装配风险", "盲装、频繁换工具、后期调锁、线束返工、柜体翻面。"],
    ["维修风险", "锁、屏幕、电源、打印机、冷藏系统是否可独立拆换。"],
    ["可复用经验", "把模块边界、检查表、照片角度和验证结论沉淀到知识卡。"],
    ["需要继续确认", engineerQuestions.slice(0, 4).join("；")],
  ];

  return `
    <table class="learning-card">
      <tbody>
        ${rows
          .map(
            ([key, value]) => `
              <tr>
                <th>${escapeHtml(key)}</th>
                <td>${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildMatureProductPatternTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>模式</th>
          <th>参考产品</th>
          <th>成熟做法</th>
          <th>Winnsen 特色</th>
          <th>验收</th>
        </tr>
      </thead>
      <tbody>
        ${matureProductPatterns
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.pattern)}</td>
                <td>${escapeHtml(item.sourceProducts)}</td>
                <td>${escapeHtml(item.matureMove)}</td>
                <td>${escapeHtml(item.winnsenFeature)}</td>
                <td>${escapeHtml(item.proof)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildWinnsenSignatureTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>模块</th>
          <th>参考来源</th>
          <th>特色</th>
          <th>用户价值</th>
        </tr>
      </thead>
      <tbody>
        ${winnsenSignatureModules
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.module)}</td>
                <td>${escapeHtml(item.from)}</td>
                <td>${escapeHtml(item.feature)}</td>
                <td>${escapeHtml(item.userValue)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildOvernightRunTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>时间</th>
          <th>目标</th>
          <th>动作</th>
          <th>验收</th>
          <th>负责人</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        ${overnightRunQueue
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.slot)}</td>
                <td>${escapeHtml(item.objective)}</td>
                <td>${escapeHtml(item.action)}</td>
                <td>${escapeHtml(item.acceptance)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.status)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotLaunchTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>步骤</th>
          <th>标题</th>
          <th>动作</th>
          <th>生成内容</th>
          <th>证据</th>
          <th>负责人</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        ${pilotLaunchRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
                <td>${escapeHtml(row[5])}</td>
                <td>${escapeHtml(row[6])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildRolePlaybookTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>角色</th>
          <th>重点</th>
          <th>借鉴</th>
          <th>入口</th>
          <th>产出</th>
          <th>验收</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        ${rolePlaybookRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
                <td>${escapeHtml(row[5])}</td>
                <td>${escapeHtml(row[6])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildTrialAcceptanceTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>Gate</th>
          <th>状态</th>
          <th>负责人</th>
          <th>证据</th>
        </tr>
      </thead>
      <tbody>
        ${trialAcceptanceRows()
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.gate)}</td>
                <td>${escapeHtml(item.status)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.evidence)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildInternalPilotScenarioTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>场景</th>
          <th>参与者</th>
          <th>启动方式</th>
          <th>输出</th>
          <th>通过标准</th>
        </tr>
      </thead>
      <tbody>
        ${internalPilotScenarios
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.scenario)}</td>
                <td>${escapeHtml(item.users)}</td>
                <td>${escapeHtml(item.start)}</td>
                <td>${escapeHtml(item.output)}</td>
                <td>${escapeHtml(item.pass)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildInternalPilotChecklistTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>Gate</th>
          <th>检查</th>
          <th>证据</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        ${internalPilotChecklist
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.status)}</td>
                <td>${escapeHtml(item.gate)}</td>
                <td>${escapeHtml(item.check)}</td>
                <td>${escapeHtml(item.evidence)}</td>
                <td>${escapeHtml(item.owner)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildInternalPilotAgendaTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>时间</th>
          <th>步骤</th>
          <th>活动</th>
          <th>输出</th>
        </tr>
      </thead>
      <tbody>
        ${internalPilotAgenda
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.time)}</td>
                <td>${escapeHtml(item.step)}</td>
                <td>${escapeHtml(item.activity)}</td>
                <td>${escapeHtml(item.output)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotSessionTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>阶段</th>
          <th>参与者</th>
          <th>议题</th>
          <th>决策</th>
          <th>证据</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        ${pilotSessionRecords
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.stage)}</td>
                <td>${escapeHtml(item.participants)}</td>
                <td>${escapeHtml(item.topic)}</td>
                <td>${escapeHtml(item.decision)}</td>
                <td>${escapeHtml(item.evidence)}</td>
                <td>${escapeHtml(item.owner)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotSessionActionTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>阶段</th>
          <th>行动项</th>
          <th>负责人</th>
          <th>截止</th>
          <th>验收</th>
        </tr>
      </thead>
      <tbody>
        ${pilotSessionRecords
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.stage)}</td>
                <td>${escapeHtml(item.action)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.due)}</td>
                <td>${escapeHtml(item.acceptance)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildGuidedStartStepTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>步骤</th>
          <th>标题</th>
          <th>动作</th>
          <th>工具</th>
          <th>结果</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        ${guidedStartSteps
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.order)}</td>
                <td>${escapeHtml(item.title)}</td>
                <td>${escapeHtml(item.action)}</td>
                <td>${escapeHtml(item.tool)}</td>
                <td>${escapeHtml(item.result)}</td>
                <td>${escapeHtml(item.owner)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildGuidedStartTrackTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>路线</th>
          <th>第一步</th>
          <th>适合</th>
          <th>成功标准</th>
        </tr>
      </thead>
      <tbody>
        ${guidedStartTracks
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.track)}</td>
                <td>${escapeHtml(item.firstAction)}</td>
                <td>${escapeHtml(item.bestFor)}</td>
                <td>${escapeHtml(item.success)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotFeedbackTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>来源</th>
          <th>角色</th>
          <th>观察</th>
          <th>影响</th>
          <th>响应</th>
        </tr>
      </thead>
      <tbody>
        ${pilotFeedbackSignals
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.priority)}</td>
                <td>${escapeHtml(item.source)}</td>
                <td>${escapeHtml(item.role)}</td>
                <td>${escapeHtml(item.observation)}</td>
                <td>${escapeHtml(item.impact)}</td>
                <td>${escapeHtml(item.response)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotGateScoreTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>Gate</th>
          <th>分数</th>
          <th>结果</th>
          <th>证据</th>
          <th>下一步</th>
        </tr>
      </thead>
      <tbody>
        ${pilotGateScorecard
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.gate)}</td>
                <td>${escapeHtml(String(item.score))}</td>
                <td>${escapeHtml(item.result)}</td>
                <td>${escapeHtml(item.evidence)}</td>
                <td>${escapeHtml(item.next)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPilotIterationTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>事项</th>
          <th>原因</th>
          <th>负责人</th>
          <th>验收</th>
        </tr>
      </thead>
      <tbody>
        ${pilotIterationBacklog
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.priority)}</td>
                <td>${escapeHtml(item.item)}</td>
                <td>${escapeHtml(item.why)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${escapeHtml(item.acceptance)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildLiveFeedbackTable() {
  const rows = liveFeedbackRows();
  if (!rows.length) return "<p>暂无现场反馈。</p>";
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>时间</th>
          <th>角色</th>
          <th>场景</th>
          <th>优先级</th>
          <th>评分</th>
          <th>观察</th>
          <th>响应动作</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
                <td>${escapeHtml(row[5])}</td>
                <td>${escapeHtml(row[6])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildMorningBriefTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>主题</th>
          <th>负责人</th>
          <th>会议焦点</th>
          <th>输出</th>
        </tr>
      </thead>
      <tbody>
        ${morningBriefRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildMorningBriefRiskTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>来源</th>
          <th>负责人</th>
          <th>风险</th>
          <th>下一步</th>
        </tr>
      </thead>
      <tbody>
        ${morningBriefRiskRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildExecutionDispatchTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>优先级</th>
          <th>任务</th>
          <th>来源</th>
          <th>负责人</th>
          <th>截止</th>
          <th>验收</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        ${executionTaskRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row.priority)}</td>
                <td>${escapeHtml(row.title)}</td>
                <td>${escapeHtml(row.source)}</td>
                <td>${escapeHtml(row.owner)}</td>
                <td>${escapeHtml(row.due)}</td>
                <td>${escapeHtml(row.acceptance)}</td>
                <td>${escapeHtml(row.status)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildOfficialSeedTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>型号</th>
          <th>产品线</th>
          <th>公开标题</th>
          <th>场景</th>
          <th>屏幕</th>
          <th>软件</th>
        </tr>
      </thead>
      <tbody>
        ${publicProductSeedRows
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.model)}</td>
                <td>${escapeHtml(item.line)}</td>
                <td>${escapeHtml(item.title)}</td>
                <td>${escapeHtml(item.applications)}</td>
                <td>${escapeHtml(item.screen)}</td>
                <td>${escapeHtml(item.software)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildOfficialSeedLineTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>产品线</th>
          <th>数量</th>
          <th>种子型号</th>
          <th>来源</th>
        </tr>
      </thead>
      <tbody>
        ${officialSeedLineRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildReadinessProductTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>型号</th>
          <th>产品线</th>
          <th>牵头</th>
          <th>优先级</th>
          <th>资料包</th>
          <th>公开标题</th>
        </tr>
      </thead>
      <tbody>
        ${readinessProductRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
                <td>${escapeHtml(row[5])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildReadinessRoleTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>资料域</th>
          <th>负责人</th>
          <th>交付物</th>
          <th>完成证据</th>
          <th>验收</th>
        </tr>
      </thead>
      <tbody>
        ${readinessRoleRows()
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
                <td>${escapeHtml(row[3])}</td>
                <td>${escapeHtml(row[4])}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function addLinkedReview() {
  const selected = getSelectedNode();
  const id = addNode({
    type: "review",
    title: `${selected.title} 品审点`,
    subtitle: "记录结构、UI、工艺、成本或客户风险",
    status: "P2",
    badge: "red",
    x: selected.x + 390,
    y: selected.y + 40,
    owner: "待分配",
    due: "待定",
    category: "结构/外观/装配",
    details: [["风险", "补充具体问题、责任人、验证方式和完成日期。"]],
  });
  links.push([selected.id, id]);
  persistWorkspace("已关联品审点");
  render();
}

function addKnowledgeCard() {
  const selected = getSelectedNode();
  if (selected.type === "review") {
    addKnowledgeFromReview(selected);
    return;
  }
  const id = addNode({
    type: "knowledge",
    title: `${selected.title} 经验卡`,
    subtitle: "从本次品审沉淀为可复用结构/设计经验",
    status: "沉淀",
    badge: "green",
    x: selected.x + 390,
    y: selected.y + 120,
    modules: selected.modules || [],
    details: [
      ["可复用经验", "记录适用产品线、结构做法、验证结论和下次设计检查点。"],
      ["需要确认", engineerQuestions.slice(0, 3).join("；")],
    ],
  });
  links.push([selected.id, id]);
  persistWorkspace("已沉淀经验卡");
  render();
}

function addLinkedVideo() {
  const selected = getSelectedNode();
  if (selected.type === "product" || selected.type === "flow") {
    addVideoPlanForCurrentProduct();
    return;
  }
  const id = addNode({
    type: "video",
    title: `${selected.title} 视频分镜`,
    subtitle: "产品卖点、客户场景、镜头 prompt",
    status: "脚本",
    badge: "blue",
    x: selected.x + 390,
    y: selected.y + 210,
    details: [["镜头", "产品全景、屏幕操作、开门动作、后台管理、客户安装场景。"]],
  });
  links.push([selected.id, id]);
  persistWorkspace("已生成分镜卡");
  render();
}

function updateSelectedNode(form) {
  const selected = getSelectedNode();
  const formData = new FormData(form);
  selected.title = String(formData.get("title") || "").trim() || selected.title;
  selected.subtitle = String(formData.get("subtitle") || "").trim();
  selected.status = String(formData.get("status") || "").trim() || "待处理";
  selected.specs = String(formData.get("specs") || "")
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
  selected.modules = String(formData.get("modules") || "")
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
  selected.tasks = String(formData.get("tasks") || "")
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
  if (selected.type === "product") {
    selected.model = String(formData.get("model") || "").trim();
    selected.line = String(formData.get("line") || "").trim();
    selected.applications = String(formData.get("applications") || "").trim();
    selected.doorCount = String(formData.get("doorCount") || "").trim();
    selected.screen = String(formData.get("screen") || "").trim();
    selected.payment = String(formData.get("payment") || "").trim();
    selected.software = String(formData.get("software") || "").trim();
    selected.material = String(formData.get("material") || "").trim();
    selected.certifications = String(formData.get("certifications") || "").trim();
  }
  if (selected.type === "asset") {
    selected.assetType = String(formData.get("assetType") || "").trim();
    selected.relatedProduct = String(formData.get("relatedProduct") || "").trim();
    selected.usage = String(formData.get("usage") || "").trim();
    selected.formats = String(formData.get("formats") || "")
      .split(/[,，/]/)
      .map((item) => item.trim())
      .filter(Boolean);
    selected.tags = String(formData.get("tags") || "")
      .split(/[,，/]/)
      .map((item) => item.trim())
      .filter(Boolean);
    selected.assetOwner = String(formData.get("assetOwner") || "").trim();
    selected.assetVersion = String(formData.get("assetVersion") || "").trim();
    selected.storagePath = String(formData.get("storagePath") || "").trim();
    selected.source = String(formData.get("source") || "").trim();
    selected.approvalStatus = String(formData.get("approvalStatus") || "").trim();
    selected.requiredAssets = splitEntryList(formData.get("requiredAssets"));
    selected.missingAssets = splitEntryList(formData.get("missingAssets"));
  }
  if (selected.type === "brief") {
    selected.customerName = String(formData.get("customerName") || "").trim();
    selected.region = String(formData.get("region") || "").trim();
    selected.market = String(formData.get("market") || "").trim();
    selected.requestType = String(formData.get("requestType") || "").trim();
    selected.dueDate = String(formData.get("dueDate") || "").trim();
    selected.quantity = String(formData.get("quantity") || "").trim();
    selected.targetPrice = String(formData.get("targetPrice") || "").trim();
    selected.requirements = splitEntryList(formData.get("requirements"));
    selected.changeRequests = splitEntryList(formData.get("changeRequests"));
    selected.versionRows = parseVersionRows(formData.get("versionRows"));
  }
  if (selected.type === "flow") {
    selected.persona = String(formData.get("persona") || "").trim();
    selected.entryPoints = splitEntryList(formData.get("entryPoints"));
    selected.flowSteps = splitEntryList(formData.get("flowSteps"));
    selected.errorStates = splitEntryList(formData.get("errorStates"));
    selected.uiChecklist = splitEntryList(formData.get("uiChecklist"));
  }
  if (selected.type === "video") {
    selected.duration = String(formData.get("duration") || "").trim();
    selected.audience = String(formData.get("audience") || "").trim();
    selected.shotPlan = splitEntryList(formData.get("shotPlan"));
    selected.voiceover = String(formData.get("voiceover") || "").trim();
    selected.videoPrompt = String(formData.get("videoPrompt") || "").trim();
  }
  const note = String(formData.get("note") || "").trim();
  selected.details = [["备注", note || "待补充产品资料、评审问题和下一步动作。"]];
  persistWorkspace("节点已更新");
  render();
}

function deleteSelectedNode() {
  if (nodes.length <= 1) {
    setStatus("至少保留一个节点");
    return;
  }
  const selected = getSelectedNode();
  nodes = nodes.filter((node) => node.id !== selected.id);
  links = links.filter(([from, to]) => from !== selected.id && to !== selected.id);
  state.selectedId = nodes[0].id;
  persistWorkspace("节点已删除");
  render();
}

function exportWorkspace() {
  const payload = {
    product: "Winnsen Product Canvas",
    exportedAt: new Date().toISOString(),
    nodes,
    links,
  };
  downloadJson(payload, "winnsen-product-canvas.json");
  setStatus("已导出");
}

function exportReportJson() {
  const payload = {
    product: "Winnsen Review Package",
    exportedAt: new Date().toISOString(),
    products: nodes.filter((node) => node.type === "product"),
    briefs: nodes.filter((node) => node.type === "brief"),
    reviews: nodes.filter((node) => node.type === "review"),
    flows: nodes.filter((node) => node.type === "flow"),
    assets: nodes.filter((node) => node.type === "asset"),
    knowledge: nodes.filter((node) => node.type === "knowledge"),
    videos: nodes.filter((node) => node.type === "video"),
    reviewDimensions,
    reviewTemplateLibrary,
    tasks: nodes.flatMap((node) => node.tasks || []),
  };
  downloadJson(payload, "winnsen-review-package.json");
  setStatus("已导出评审包 JSON");
}

function exportReportMarkdown() {
  downloadText(buildReportMarkdown(), "winnsen-review-package.md", "text/markdown");
  setStatus("已导出 Markdown");
}

function exportKnowledgeMarkdown() {
  const knowledge = nodes.filter((node) => node.type === "knowledge");
  if (!knowledge.length) {
    setStatus("暂无知识卡可导出");
    return;
  }
  downloadText(buildKnowledgeMarkdown(knowledge), "winnsen-knowledge-base.md", "text/markdown");
  setStatus("已导出知识库");
}

function exportUiFlowMarkdown() {
  const flows = nodes.filter((node) => node.type === "flow");
  if (!flows.length) {
    setStatus("暂无界面流程可导出");
    return;
  }
  downloadText(buildUiFlowMarkdown(flows), "winnsen-ui-flow-checklist.md", "text/markdown");
  setStatus("已导出 UI 清单");
}

function exportCustomerBriefMarkdown() {
  const briefs = nodes.filter((node) => node.type === "brief");
  if (!briefs.length) {
    setStatus("暂无客户需求可导出");
    return;
  }
  downloadText(buildCustomerBriefMarkdown(briefs), "winnsen-customer-briefs.md", "text/markdown");
  setStatus("已导出客户需求");
}

function exportAssetLibraryMarkdown() {
  const assets = nodes.filter((node) => node.type === "asset");
  if (!assets.length) {
    setStatus("暂无素材可导出");
    return;
  }
  downloadText(buildAssetLibraryMarkdown(assets), "winnsen-asset-library.md", "text/markdown");
  setStatus("已导出素材库");
}

function buildAssetLibraryMarkdown(assets) {
  const lines = [
    "# Winnsen 图库 / 模型库清单",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 产品 | 素材包 | 类型 | 用途 | 格式 | 负责人 | 版本 | 路径 | 审批 | 缺口 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...assets.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.relatedProduct || "通用素材",
        node.title,
        node.assetType || node.status || "素材",
        node.usage || node.subtitle || "待补充",
        (node.formats || []).join(" / ") || "待补充",
        node.assetOwner || "待分配",
        node.assetVersion || "待补充",
        node.storagePath || "待补充",
        node.approvalStatus || "待确认",
        (node.missingAssets || []).join(" / ") || "无",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
  ];

  assets.forEach((node) => {
    lines.push(`## ${node.title}`, "", `用途：${node.usage || node.subtitle || "待补充"}`, "");
    lines.push(`- 所属产品：${nodes.find((item) => item.id === node.sourceProductId)?.title || node.relatedProduct || "通用素材"}`);
    lines.push(`- 存储路径：${node.storagePath || "待补充"}`);
    lines.push(`- 负责人：${node.assetOwner || "待分配"}`);
    lines.push(`- 版本：${node.assetVersion || "待补充"}`);
    lines.push(`- 审批状态：${node.approvalStatus || "待确认"}`);
    lines.push(`- 必备素材：${(node.requiredAssets || []).join("、") || "待补充"}`);
    lines.push(`- 缺口清单：${(node.missingAssets || []).join("、") || "无"}`);
    const fileRows = normalizedFileRowsForAsset(node);
    if (fileRows.length) {
      lines.push("", "| 文件 | 类型 | 格式 | 负责人 | 路径 | 状态 | 用途 | 公开等级 |", "| --- | --- | --- | --- | --- | --- | --- | --- |");
      fileRows.forEach((row) => {
        lines.push(
          `| ${[
            row.name,
            row.kind,
            row.formats,
            row.owner,
            row.path,
            row.status,
            row.usage,
            row.visibility,
          ]
            .map((value) => String(value || "待补充").replace(/\|/g, "/"))
            .join(" | ")} |`,
        );
      });
    }
    lines.push("");
  });

  return lines.join("\n");
}

function buildCustomerBriefMarkdown(briefs) {
  const lines = [
    "# Winnsen 客户需求与版本差异",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 产品 | 客户/项目 | 区域 | 需求类型 | 数量 | 目标价/成本 | 交期 | 需求点 | 变更点 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...briefs.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.subtitle || "通用产品",
        node.customerName || "待补充",
        node.region || "待补充",
        node.requestType || "待补充",
        node.quantity || "待补充",
        node.targetPrice || "待补充",
        node.dueDate || "待补充",
        (node.requirements || []).join(" / ") || "待补充",
        (node.changeRequests || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
  ];

  briefs.forEach((node) => {
    lines.push(`## ${node.title}`, "", `客户/项目：${node.customerName || "待补充"}`, "");
    (node.details || []).forEach(([title, body]) => {
      lines.push(`- ${title}：${body}`);
    });
    if (node.versionRows?.length) {
      lines.push("", "| 版本 | 差异 | 状态 |", "| --- | --- | --- |");
      node.versionRows.forEach(([version, diff, status]) => {
        lines.push(`| ${String(version).replace(/\|/g, "/")} | ${String(diff).replace(/\|/g, "/")} | ${String(status).replace(/\|/g, "/")} |`);
      });
    }
    lines.push("");
  });

  return lines.join("\n");
}

function buildUiFlowMarkdown(flows) {
  const lines = [
    "# Winnsen 界面流程清单",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "| 产品 | 流程 | 用户/角色 | 入口 | 关键步骤 | 异常状态 | 检查点 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...flows.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.subtitle || "通用产品",
        node.title,
        node.persona || "待补充",
        (node.entryPoints || []).join(" / ") || "待补充",
        (node.flowSteps || []).join(" / ") || "待补充",
        (node.errorStates || []).join(" / ") || "待补充",
        (node.uiChecklist || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
  ];
  return lines.join("\n");
}

function buildKnowledgeMarkdown(knowledge) {
  const lines = [
    "# Winnsen 结构知识库",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 经验索引",
    "| 类别 | 知识卡 | 适用产品 | 复用经验 | 验证方式 |",
    "| --- | --- | --- | --- | --- |",
    ...knowledge.map((node) =>
      [
        node.category || "经验",
        node.title,
        nodes.find((item) => item.id === node.sourceProductId)?.title || node.subtitle || "通用产品",
        node.reusableInsight || valueFromDetails(node, "可复用经验") || "待补充",
        node.validation || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
  ];

  knowledge.forEach((node) => {
    lines.push(`## ${node.title}`, "", `适用：${node.subtitle}`, "");
    (node.details || []).forEach(([title, body]) => {
      lines.push(`- ${title}：${body}`);
    });
    if (node.learningRows?.length) {
      lines.push("", "| 项目 | 记录 |", "| --- | --- |");
      node.learningRows.forEach(([key, value]) => {
        lines.push(`| ${String(key).replace(/\|/g, "/")} | ${String(value).replace(/\|/g, "/")} |`);
      });
    }
    lines.push("");
  });

  return lines.join("\n");
}

function buildReportMarkdown() {
  const products = nodes.filter((node) => node.type === "product");
  const briefs = nodes.filter((node) => node.type === "brief");
  const reviews = nodes.filter((node) => node.type === "review");
  const knowledge = nodes.filter((node) => node.type === "knowledge");
  const flows = nodes.filter((node) => node.type === "flow");
  const assets = nodes.filter((node) => node.type === "asset");
  const videos = nodes.filter((node) => node.type === "video");
  const quoteGates = reviews.filter((node) => node.category === "报价决策门");
  const fileRows = fileLedgerRows();
  const tasks = nodes.flatMap((node) => node.tasks || []);
  const lines = [
    "# Winnsen 产品评审包",
    "",
    `导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 产品范围",
    ...products.map((node) => `- ${node.title}：${node.subtitle}`),
    "",
    "## 试用启动台",
    "| 步骤 | 标题 | 动作 | 生成内容 | 完成证据 | 负责人 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...pilotLaunchRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 角色试用路线",
    "| 角色 | 重点 | 借鉴 | 入口 | 产出 | 验收 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...rolePlaybookRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 试用验收中心",
    "| Gate | 状态 | 负责人 | 证据 |",
    "| --- | --- | --- | --- |",
    ...trialAcceptanceRows().map((row) =>
      `| ${[row.gate, row.status, row.owner, row.evidence].map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`,
    ),
    "",
    "## 开源参考 / 产品路线",
    "| 参考产品 | GitHub | 借鉴定位 | Winnsen 落地 | 风险 |",
    "| --- | --- | --- | --- | --- |",
    ...openSourceReferenceCatalog.map((item) =>
      [item.product, item.repo, item.role, item.winnsenUse, item.risk]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "### GitHub 参考证据",
    "| 参考产品 | GitHub | 成熟度 | 活跃信号 | License | 可借鉴证据 | Winnsen 采纳决策 | 边界动作 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...githubReferenceEvidenceRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "| 阶段 | 目标 | 范围 | 负责人 | 完成证据 |",
    "| --- | --- | --- | --- | --- |",
    ...productRoadmapMilestones.map((item) =>
      [item.phase, item.goal, item.scope, item.owner, item.evidence]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 团队协作 / 权限",
    "| 角色 | 团队 | 权限 | 输入 | 输出 | 交接 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...teamRoleCatalog.map((item) =>
      [item.role, item.team, item.permissions, item.inputs, item.outputs, item.handoff]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 阶段 | 负责人 | 触发 | 交付物 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...teamHandoffStages.map((item) =>
      [item.phase, item.owner, item.trigger, item.deliverable, item.next]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 开发规格 / 数据模型",
    "| 实体 | 用途 | 字段 | 负责人 | 存储 | 验收 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...dataModelCatalog.map((item) =>
      [item.entity, item.purpose, item.fields, item.owner, item.storage, item.acceptance]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 优先级 | 模块 | 范围 | 实现建议 | 验收标准 |",
    "| --- | --- | --- | --- | --- |",
    ...mvpDeliveryCatalog.map((item) =>
      [item.priority, item.module, item.scope, item.build, item.acceptance]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 工作流启动器",
    "| 优先级 | 工作流 | 负责人 | 触发条件 | 生成内容 | 预期结果 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...workflowLauncherCatalog.map((item) =>
      [item.priority, item.title, item.owner, item.trigger, item.creates, item.outcome]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 成熟产品仿照 / 今夜目标",
    "| 模式 | 参考产品 | 成熟做法 | Winnsen 特色 | 今夜动作 | 验收 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...matureProductPatterns.map((item) =>
      [item.pattern, item.sourceProducts, item.matureMove, item.winnsenFeature, item.tonight, item.proof]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 模块 | 参考来源 | 特色 | 用户价值 |",
    "| --- | --- | --- | --- |",
    ...winnsenSignatureModules.map((item) =>
      [item.module, item.from, item.feature, item.userValue]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 时间 | 目标 | 动作 | 验收 | 负责人 | 状态 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...overnightRunQueue.map((item) =>
      [item.slot, item.objective, item.action, item.acceptance, item.owner, item.status]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 内部试用包 / 验收 Gate",
    "| 场景 | 参与者 | 启动方式 | 输出 | 通过标准 |",
    "| --- | --- | --- | --- | --- |",
    ...internalPilotScenarios.map((item) =>
      [item.scenario, item.users, item.start, item.output, item.pass]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 优先级 | Gate | 检查 | 证据 | 负责人 |",
    "| --- | --- | --- | --- | --- |",
    ...internalPilotChecklist.map((item) =>
      [item.status, item.gate, item.check, item.evidence, item.owner]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 时间 | 步骤 | 活动 | 输出 |",
    "| --- | --- | --- | --- |",
    ...internalPilotAgenda.map((item) =>
      [item.time, item.step, item.activity, item.output]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 试用会话记录",
    "| 阶段 | 参与者 | 议题 | 决策 | 证据 | 负责人 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...pilotSessionRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "| 阶段 | 行动项 | 负责人 | 截止 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotSessionActionRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 试用起步导航",
    "| 步骤 | 标题 | 动作 | 工具 | 结果 | 负责人 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...guidedStartSteps.map((item) =>
      [item.order, item.title, item.action, item.tool, item.result, item.owner]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 路线 | 第一步 | 适合 | 成功标准 |",
    "| --- | --- | --- | --- |",
    ...guidedStartTracks.map((item) =>
      [item.track, item.firstAction, item.bestFor, item.success]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 试用反馈 / 下一轮迭代",
    "| 优先级 | 来源 | 角色 | 观察 | 影响 | 响应 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...pilotFeedbackSignals.map((item) =>
      [item.priority, item.source, item.role, item.observation, item.impact, item.response]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| Gate | 分数 | 结果 | 证据 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotGateScorecard.map((item) =>
      [item.gate, item.score, item.result, item.evidence, item.next]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "| 优先级 | 事项 | 原因 | 负责人 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...pilotIterationBacklog.map((item) =>
      [item.priority, item.item, item.why, item.owner, item.acceptance]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 现场反馈",
    liveFeedbackRows().length ? "| 时间 | 角色 | 场景 | 优先级 | 评分 | 观察 | 响应动作 |" : "暂无现场反馈。",
    liveFeedbackRows().length ? "| --- | --- | --- | --- | --- | --- | --- |" : "",
    ...liveFeedbackRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 明早晨会包",
    `晨会时间：${morningBriefDateLabel()}。就绪度：${morningBriefState().readyScore}%`,
    "",
    "| 优先级 | 主题 | 负责人 | 会议焦点 | 输出 |",
    "| --- | --- | --- | --- | --- |",
    ...morningBriefRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "| 优先级 | 来源 | 负责人 | 风险 | 下一步 |",
    "| --- | --- | --- | --- | --- |",
    ...morningBriefRiskRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 执行派单",
    "| 优先级 | 任务 | 来源 | 负责人 | 截止 | 验收 | 状态 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...executionTaskRows().map((row) =>
      `| ${[row.priority, row.title, row.source, row.owner, row.due, row.acceptance, row.status]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ")} |`,
    ),
    "",
    "## 官网公开产品资料种子包",
    "| 型号 | 产品线 | 公开标题 | 场景 | 屏幕 | 软件 | 来源 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...officialSeedRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "| 产品线 | 数量 | 种子型号 | 来源 |",
    "| --- | --- | --- | --- |",
    ...officialSeedLineRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 内部资料补齐台",
    "| 型号 | 产品线 | 牵头 | 优先级 | 资料包 | 公开标题 | 来源 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...readinessProductRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "| 资料域 | 负责人 | 交付物 | 完成证据 | 验收 |",
    "| --- | --- | --- | --- | --- |",
    ...readinessRoleRows().map((row) => `| ${row.map((value) => String(value).replace(/\|/g, "/")).join(" | ")} |`),
    "",
    "## 产品资料字段",
    "| 型号 | 产品线 | 应用场景 | 门数/结构 | 屏幕/软件 | 认证 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...products.map((node) =>
      [
        node.model || node.title,
        node.line || "待补充",
        node.applications || node.subtitle || "待补充",
        node.doorCount || "待补充",
        [node.screen, node.software].filter(Boolean).join("；") || "待补充",
        node.certifications || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 客户需求 / 版本差异",
    "| 产品 | 客户/项目 | 区域 | 需求类型 | 数量 | 目标价/成本 | 交期 | 需求点 | 变更点 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...briefs.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.subtitle || "通用产品",
        node.customerName || "待补充",
        node.region || "待补充",
        node.requestType || "待补充",
        node.quantity || "待补充",
        node.targetPrice || "待补充",
        node.dueDate || "待补充",
        (node.requirements || []).join(" / ") || "待补充",
        (node.changeRequests || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
    "## 报价决策门",
    "| 项目 | 结论 | 负责人 | 待确认 | 所需资料 |",
    "| --- | --- | --- | --- | --- |",
    ...quoteGates.map((node) =>
      [
        node.title,
        node.status || "待判断",
        node.owner || "待分配",
        node.impact || "待补充",
        (node.evidence || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 高优先级问题",
    ...reviews.map((node) => `- ${node.status} ${node.title}：${node.subtitle}`),
    "",
    "## 品审模板覆盖",
    "| 类别 | 问题 | 优先级 | 负责人 | 验证方式 | 所需资料 |",
    "| --- | --- | --- | --- | --- | --- |",
    ...reviews.map((node) =>
      [
        node.category || "品审",
        node.title,
        node.status || "待定",
        node.owner || "待分配",
        node.validation || node.subtitle || "待补充",
        (node.evidence || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 界面流程设计",
    "| 产品 | 流程 | 用户/角色 | 入口 | 关键步骤 | 异常状态 | 检查点 |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...flows.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.subtitle || "通用产品",
        node.title,
        node.persona || "待补充",
        (node.entryPoints || []).join(" / ") || "待补充",
        (node.flowSteps || []).join(" / ") || "待补充",
        (node.errorStates || []).join(" / ") || "待补充",
        (node.uiChecklist || []).join(" / ") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
    "## 图库 / 模型库",
    ...assets.map((node) => `- ${node.title}：${node.assetType || node.status || "素材"}；${node.usage || node.subtitle}`),
    "",
    "| 产品 | 素材包 | 类型 | 格式 | 负责人 | 版本 | 路径 | 审批 | 缺口 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...assets.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || node.relatedProduct || "通用素材",
        node.title,
        node.assetType || node.status || "素材",
        (node.formats || []).join(" / ") || "待补充",
        node.assetOwner || "待分配",
        node.assetVersion || "待补充",
        node.storagePath || "待补充",
        node.approvalStatus || "待确认",
        (node.missingAssets || []).join(" / ") || "无",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
    "## 文件入库台账",
    "| 产品/项目 | 素材包 | 文件 | 类型 | 格式 | 负责人 | 路径 | 状态 | 用途 | 公开等级 |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...fileRows.slice(0, 40).map((row) =>
      [
        row.productTitle,
        row.assetTitle,
        row.name,
        row.kind,
        row.formats,
        row.owner,
        row.path,
        row.status,
        row.usage,
        row.visibility,
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 知识沉淀",
    ...knowledge.map((node) => `- ${node.title}：${node.subtitle}`),
    "",
    "| 类别 | 知识卡 | 适用产品 | 复用经验 | 验证方式 |",
    "| --- | --- | --- | --- | --- |",
    ...knowledge.map((node) =>
      [
        node.category || "经验",
        node.title,
        nodes.find((item) => item.id === node.sourceProductId)?.title || node.subtitle || "通用产品",
        node.reusableInsight || valueFromDetails(node, "可复用经验") || "待补充",
        node.validation || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | "),
    ).map((row) => `| ${row} |`),
    "",
    "## 视频脚本方向",
    "| 产品 | 视频卡 | 时长/受众 | 镜头 | 旁白/Prompt |",
    "| --- | --- | --- | --- | --- |",
    ...videos.map((node) => {
      const product = nodes.find((item) => item.id === node.sourceProductId);
      return [
        product?.title || "当前项目",
        node.title,
        [node.duration || "30s", node.audience || "客户/销售/代理商"].join(" / "),
        (node.shotPlan || []).join(" / ") || valueFromDetails(node, "镜头") || "待补充",
        node.voiceover || node.videoPrompt || valueFromDetails(node, "输出") || "待补充",
      ]
        .map((value) => String(value).replace(/\|/g, "/"))
        .join(" | ");
    }).map((row) => `| ${row} |`),
    "",
    "- 痛点：无人值守、取件效率、远程管理、定制场景。",
    "- 镜头：产品全景、柜门开合、屏幕操作、后台仪表盘、客户场景。",
    "- 输出：旁白、字幕、分镜 prompt、封面 prompt、素材清单。",
    "",
    "## 结构评审维度",
    ...reviewDimensions.map((item) => `- ${item}`),
    "",
    "## 待办任务",
    ...tasks.map((item) => `- ${item}`),
  ];
  return lines.join("\n");
}

async function importWorkspaceFile(file) {
  try {
    const data = JSON.parse(await file.text());
    if (!Array.isArray(data.nodes) || !Array.isArray(data.links)) {
      throw new Error("Missing nodes or links");
    }
    nodes = hydrateNodes(data.nodes);
    links = data.links;
    state.selectedId = nodes[0]?.id || "product-parcel";
    persistWorkspace("已导入");
    render();
  } catch {
    setStatus("导入失败");
  }
}

function promptContextForSelected() {
  const selected = getSelectedNode();
  const product = productForWorkNode(selected) || currentProductTarget() || selected;
  const reviews = nodes.filter((node) => node.type === "review" && nodeRelatesToProduct(node, product));
  const reviewIds = new Set(reviews.map((node) => node.id));
  const flows = nodes.filter((node) => node.type === "flow" && nodeRelatesToProduct(node, product));
  const assets = nodes.filter((node) => node.type === "asset" && nodeRelatesToProduct(node, product));
  const knowledge = nodes.filter(
    (node) =>
      node.type === "knowledge" &&
      (nodeRelatesToProduct(node, product) ||
        reviewIds.has(node.sourceReviewId) ||
        links.some(([from, to]) => reviewIds.has(from) && to === node.id)),
  );
  const briefs = nodes.filter((node) => node.type === "brief" && nodeRelatesToProduct(node, product));
  const relatedIds = new Set([product?.id, ...reviews.map((node) => node.id), ...flows.map((node) => node.id), ...assets.map((node) => node.id), ...knowledge.map((node) => node.id)]);
  const videos = nodes.filter(
    (node) =>
      node.type === "video" &&
      (nodeRelatesToProduct(node, product) || links.some(([from, to]) => relatedIds.has(from) && to === node.id)),
  );

  return {
    selected,
    product,
    reviews,
    flow: selected?.type === "flow" ? selected : flows[0],
    flows,
    assets,
    knowledge,
    briefs,
    video: selected?.type === "video" ? selected : videos[0],
    videos,
  };
}

function nodeRelatesToProduct(node, product) {
  if (!node || !product?.id) return false;
  if (node.id === product.id) return true;
  if (node.sourceProductId === product.id) return true;
  return links.some(([from, to]) => (from === product.id && to === node.id) || (from === node.id && to === product.id));
}

function promptProductLines(ctx) {
  const product = ctx.product || {};
  return [
    `产品：${product.title || "待选择产品"}`,
    `型号/产品线：${product.model || "待补充"} / ${product.line || "待补充"}`,
    `场景：${product.subtitle || "待补充"}`,
    `状态：${product.status || "待补充"}`,
    `应用场景：${product.applications || "待补充"}`,
    `门数/结构：${product.doorCount || "待补充"}`,
    `材料/认证：${[product.material, product.certifications].filter(Boolean).join("；") || "待补充"}`,
    `屏幕/支付/软件：${[product.screen, product.payment, product.software].filter(Boolean).join("；") || "待补充"}`,
    `卖点/参数：${(product.specs || []).join("、") || "远程管理、可定制、自助服务"}`,
    `模块：${(product.modules || []).join("、") || "柜体、门、锁、屏幕、电控、线束"}`,
    `客户需求：${ctx.briefs.map((node) => `${node.customerName || node.title}：${(node.requirements || []).join("、")}`).join("；") || "待补充"}`,
  ];
}

function promptList(items, fallback = "待补充") {
  const clean = items.map((item) => String(item || "").trim()).filter(Boolean);
  return clean.length ? clean.join("；") : fallback;
}

function promptUnique(items) {
  return [...new Set(items.map((item) => String(item || "").trim()).filter(Boolean))];
}

function promptAssetGaps(ctx) {
  return promptUnique(ctx.assets.flatMap((node) => node.missingAssets || []));
}

function buildProductDesignPrompt(ctx = promptContextForSelected()) {
  return [
    "你是 Winnsen 产品设计负责人，请把当前自助终端/智能柜项目整理成可评审的产品方案。",
    ...promptProductLines(ctx),
    `已有品审点：${promptList(ctx.reviews.map((node) => `${node.category || node.title}-${node.status || "待确认"}`))}`,
    `已有知识经验：${promptList(ctx.knowledge.map((node) => node.reusableInsight || node.title))}`,
    "",
    "请按以下格式输出：",
    "1. 产品定位与目标客户",
    "2. 核心使用场景和用户路径",
    "3. 产品模块拆分：柜体、门格、操作区、电控、软件、后台、维护",
    "4. 可配置项：门数、尺寸、屏幕、支付、通讯、接口、颜色、品牌贴纸",
    "5. 结构/外观/成本/交期风险",
    "6. 给结构、软件、采购、市场分别需要确认的问题",
    "7. 下一版 V1 方案应补齐的资料清单",
    "",
    "请避免编造精确尺寸、价格和认证结论；不确定项标注为待工程师或供应商确认。",
  ].join("\n");
}

function buildUiDesignPrompt(ctx = promptContextForSelected()) {
  const flow = ctx.flow;
  return [
    "你是 Winnsen 触摸屏 UI/UX 设计师，请为当前智能柜/售卖机项目设计屏幕交互方案。",
    ...promptProductLines(ctx),
    `当前流程：${flow?.flowSteps?.join(" → ") || "待补充屏幕流程"}`,
    `入口方式：${promptList(flow?.entryPoints || [], "扫码、取件码、会员账号、后台订单")}`,
    `异常状态：${promptList(flow?.errorStates || [], "门未关闭、支付失败、订单不存在、设备离线、温控异常")}`,
    `界面检查点：${promptList(flow?.uiChecklist || [], "入口清晰、状态可追踪、异常可恢复、后台状态一致")}`,
    "",
    "请按以下格式输出：",
    "1. 信息架构：待机页、选择页、身份识别、订单确认、开门、完成页、异常页",
    "2. 每个页面的主按钮、辅助按钮、提示文案和状态反馈",
    "3. 中英文界面文案建议",
    "4. 错误/离线/维护/门未关/支付失败的处理流程",
    "5. 需要软件、硬件、结构配合的接口和传感器信号",
    "6. 可交给 Figma 的页面清单和组件清单",
  ].join("\n");
}

function buildStructurePrompt(ctx = promptContextForSelected()) {
  const product = ctx.product || ctx.selected;
  const relatedFlow = ctx.flow || nodes.find((node) => node.type === "flow" && node.sourceProductId === product.id);
  const modules = product.modules?.length ? product.modules.join("、") : "柜体、门、锁、屏幕、电控、线束";
  return [
    "你是资深产品设计侧结构评审专家，请帮我评审 Winnsen 自助终端/智能柜产品。",
    ...promptProductLines(ctx),
    `已知模块：${modules}`,
    `界面流程：${relatedFlow?.flowSteps?.join(" → ") || "待补充屏幕流程"}`,
    `异常状态：${relatedFlow?.errorStates?.join("、") || "待补充异常状态"}`,
    "",
    "请按以下格式输出：",
    "1. 结构理解",
    "2. 模块划分建议",
    "3. 装配优化建议",
    "4. 钣金与外观风险",
    "5. 门板/铰链/锁具风险",
    "6. 屏幕/操作区风险",
    "7. 需要结构工程师验证的问题",
    "",
    "重点评审维度：",
    ...reviewDimensions.map((item) => `- ${item}`),
    "",
    "请同时覆盖以下品审模板：",
    ...reviewTemplateLibrary.map((item) => `- ${item.category}：${item.summary} 验证方式：${item.validation}`),
    "",
    "请避免假设精确尺寸；不确定项请标注需要结构工程师、供应商或样机验证。",
  ].join("\n");
}

function buildAssetPrompt(ctx = promptContextForSelected()) {
  const assetRows = ctx.assets.map((node) =>
    [
      node.title,
      node.assetType || node.status || "素材",
      node.storagePath || "待补充路径",
      (node.missingAssets || []).join("、") || "无明确缺口",
    ].join(" / "),
  );
  return [
    "你是 Winnsen 产品素材库管理员，请把当前产品项目整理成可执行的图库、模型库和视频素材补缺计划。",
    ...promptProductLines(ctx),
    `现有素材：${promptList(assetRows, "暂无素材卡")}`,
    `素材缺口：${promptList(promptAssetGaps(ctx), "产品正面图、45度图、开门动作、结构图/PDF、UI 截图、3D 模型、客户场景、视频镜头")}`,
    "",
    "请按以下格式输出：",
    "1. 推荐目录结构：产品线 / 型号 / 图片 / UI / 结构 / 3D / 视频 / 客户案例",
    "2. 必备素材清单：文件类型、用途、最低数量、负责人",
    "3. 3D 模型要求：STEP、GLB、渲染角度、拆件展示、可隐藏敏感结构",
    "4. 拍摄清单：外观、开门、屏幕操作、后台、安装场景、维护动作",
    "5. 审批流程：原始文件、版本号、用途授权、可公开等级",
    "6. 优先补齐的 P1/P2/P3 缺口",
  ].join("\n");
}

function buildKnowledgePrompt(ctx = promptContextForSelected()) {
  return [
    "你是 Winnsen 产品知识库管理员，请把当前画布内容沉淀成团队可复用的知识库条目。",
    ...promptProductLines(ctx),
    `品审记录：${promptList(ctx.reviews.map((node) => `${node.title}：${node.impact || node.validation || node.subtitle}`))}`,
    `已有经验：${promptList(ctx.knowledge.map((node) => node.reusableInsight || node.title))}`,
    `素材缺口：${promptList(promptAssetGaps(ctx), "待补充")}`,
    "",
    "请按以下格式输出：",
    "1. 知识库标题、标签和适用产品线",
    "2. 背景：客户场景、产品配置、项目阶段",
    "3. 可复用结论：结构、UI、软件、素材、视频、报价沟通",
    "4. 检查清单：下次类似项目必须确认的问题",
    "5. 反例/风险：不能直接复用的条件",
    "6. 可转成模板的字段：输入、输出、负责人、验证资料",
  ].join("\n");
}

function buildVideoPrompt(ctx = promptContextForSelected()) {
  const product = ctx.product || ctx.selected;
  const flow = ctx.selected?.type === "flow" ? ctx.selected : ctx.flow;
  const plan = ctx.selected?.type === "video" && ctx.selected.shotPlan?.length ? ctx.selected : videoPlanForProduct(product);
  return [
    "请为 Winnsen 产品生成 30 秒产品介绍视频脚本和镜头 prompt。",
    ...promptProductLines(ctx),
    `界面流程：${flow?.flowSteps?.join(" → ") || "待补充屏幕流程"}`,
    `异常状态：${flow?.errorStates?.join("、") || "待补充异常状态"}`,
    `建议镜头：${(plan.shotPlan || []).join("；")}`,
    `素材缺口：${promptList(promptAssetGaps(ctx), product.usage || "产品主图、45 度图、开门动作、屏幕操作、客户安装场景")}`,
    "",
    "输出格式：",
    "1. 3 句英文产品卖点",
    "2. 5 个镜头分镜，每个包含画面、动作、字幕、AI 视频 prompt",
    "3. 封面图 prompt",
    "4. 需要提前准备的素材清单",
  ].join("\n");
}

function buildAiPromptBundleMarkdown(ctx = promptContextForSelected()) {
  const product = ctx.product || {};
  const title = product.model ? `${product.model} ${product.title || ""}`.trim() : product.title || "Winnsen 产品";
  return [
    `# ${title} AI 工作流 Prompt 包`,
    "",
    "## 产品设计",
    buildProductDesignPrompt(ctx),
    "",
    "## 界面设计",
    buildUiDesignPrompt(ctx),
    "",
    "## 结构品审",
    buildStructurePrompt(ctx),
    "",
    "## 素材整理",
    buildAssetPrompt(ctx),
    "",
    "## 知识沉淀",
    buildKnowledgePrompt(ctx),
    "",
    "## 视频脚本",
    buildVideoPrompt(ctx),
  ].join("\n");
}

function addAiPromptPackNode() {
  const ctx = promptContextForSelected();
  const product = ctx.product || currentProductTarget();
  const id = `knowledge-ai-prompt-${product.id}-${Date.now()}`;
  const promptPack = buildAiPromptBundleMarkdown(ctx);
  nodes.push({
    id,
    type: "knowledge",
    title: `${product.model || product.title || "Winnsen"} AI 工作流 Prompt`,
    subtitle: "产品设计、界面设计、结构品审、素材整理、知识沉淀和视频脚本",
    status: "可复用",
    badge: "green",
    x: (product.x || 160) + 760,
    y: (product.y || 140) + 560,
    category: "AI 工作流",
    sourceProductId: product.id,
    reusableInsight: "把当前产品资料转成可复制的 AI 任务包。",
    learningRows: [
      ["产品设计", "定位、模块拆分、可配置项、跨部门问题"],
      ["界面设计", "页面清单、状态反馈、异常流程、Figma 组件"],
      ["结构品审", "门板、锁具、屏幕、电控、线束、装配和维护"],
      ["素材整理", "图片、UI、结构、3D、视频素材缺口"],
      ["视频脚本", "卖点、镜头、旁白、字幕和生成 prompt"],
    ],
    tags: ["AI Prompt", "产品工作流", product.line || "Winnsen"],
    details: [
      ["用途", "把画布里的产品、流程、品审、素材和知识卡转成 AI 可执行任务。"],
      ["Prompt 包", promptPack],
    ],
  });
  links.push([product.id, id]);
  state.selectedId = id;
  persistWorkspace("已生成 AI Prompt 节点");
  render();
  promptOutput.value = promptPack;
}

function exportAiPromptBundleMarkdown() {
  const ctx = promptContextForSelected();
  const product = ctx.product || {};
  const model = String(product.model || product.title || "winnsen-product").replace(/[^\w-]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  downloadText(buildAiPromptBundleMarkdown(ctx), `${model || "winnsen"}-ai-prompt-pack.md`, "text/markdown");
  setStatus("已导出 AI Prompt 包");
}

function downloadJson(payload, filename) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  downloadBlob(blob, filename);
}

function downloadText(content, filename, type = "text/plain") {
  const blob = new Blob([content], { type });
  downloadBlob(blob, filename);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetWorkspace() {
  nodes = clone(defaultNodes);
  links = clone(defaultLinks);
  state.selectedId = "product-parcel";
  state.search = "";
  state.catalogLine = "all";
  document.getElementById("searchInput").value = "";
  localStorage.removeItem(storageKey);
  fitView();
  setStatus("已重置");
}

viewport.addEventListener("mousedown", (event) => {
  const nodeEl = event.target.closest(".node");
  if (nodeEl) {
    const node = nodes.find((item) => item.id === nodeEl.dataset.id);
    state.selectedId = node.id;
    state.dragging = {
      id: node.id,
      startX: event.clientX,
      startY: event.clientY,
      nodeX: node.x,
      nodeY: node.y,
    };
    render();
    return;
  }

  state.panning = {
    startX: event.clientX,
    startY: event.clientY,
    offsetX: state.offsetX,
    offsetY: state.offsetY,
  };
});

window.addEventListener("mousemove", (event) => {
  if (state.dragging) {
    const node = nodes.find((item) => item.id === state.dragging.id);
    node.x = state.dragging.nodeX + (event.clientX - state.dragging.startX) / state.scale;
    node.y = state.dragging.nodeY + (event.clientY - state.dragging.startY) / state.scale;
    scheduleCanvasRender();
  }

  if (state.panning) {
    state.offsetX = state.panning.offsetX + event.clientX - state.panning.startX;
    state.offsetY = state.panning.offsetY + event.clientY - state.panning.startY;
    applyTransform();
  }
});

window.addEventListener("mouseup", () => {
  if (state.dragging || state.panning) {
    persistWorkspace("已保存位置");
  }
  state.dragging = null;
  state.panning = null;
});

viewport.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const nextScale = Math.min(1.8, Math.max(0.45, state.scale - event.deltaY * 0.001));
    const rect = viewport.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const worldX = (pointerX - state.offsetX) / state.scale;
    const worldY = (pointerY - state.offsetY) / state.scale;
    state.scale = nextScale;
    state.offsetX = pointerX - worldX * state.scale;
    state.offsetY = pointerY - worldY * state.scale;
    applyTransform();
    scheduleViewPersist();
  },
  { passive: false },
);

document.getElementById("addProductBtn").addEventListener("click", () => addTemplate("parcel"));
document.getElementById("addBriefBtn").addEventListener("click", addCustomerBriefForCurrentProduct);
document.getElementById("addFlowBtn").addEventListener("click", addUiFlowForCurrentProduct);
document.getElementById("addReviewBtn").addEventListener("click", () =>
  addNode({
    type: "review",
    title: "新增品审点",
    subtitle: "记录结构、UI、工艺、成本或客户风险",
    status: "P2",
    badge: "red",
  }),
);
document.getElementById("addKnowledgeBtn").addEventListener("click", () =>
  addNode({
    type: "knowledge",
    title: "新增知识卡",
    subtitle: "把本次评审结论沉淀为可复用经验",
    status: "沉淀",
    badge: "green",
  }),
);
document.getElementById("addAssetBtn").addEventListener("click", addAssetPackForCurrentProduct);
document.getElementById("addVideoBtn").addEventListener("click", () =>
  addNode({
    type: "video",
    title: "新增分镜卡",
    subtitle: "产品短视频镜头、旁白、字幕和 prompt",
    status: "脚本",
    badge: "blue",
  }),
);
document.getElementById("fitBtn").addEventListener("click", fitView);
document.getElementById("commandBtn").addEventListener("click", openCommandCenter);
document.getElementById("closeCommandBtn").addEventListener("click", closeCommandCenter);
commandSearchInput.addEventListener("input", renderCommandCenter);
commandList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-command-id]");
  if (button) runCommandCenterItem(button.dataset.commandId);
});
commandModal.addEventListener("click", (event) => {
  if (event.target === commandModal) closeCommandCenter();
});
window.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openCommandCenter();
  }
  if (event.key === "Escape" && !commandModal.hidden) closeCommandCenter();
});
document.getElementById("saveBtn").addEventListener("click", () => persistWorkspace("手动保存"));
document.getElementById("importBtn").addEventListener("click", () => {
  document.getElementById("importInput").click();
});
document.getElementById("importInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) importWorkspaceFile(file);
  event.target.value = "";
});
document.getElementById("catalogCsvBtn").addEventListener("click", () => {
  document.getElementById("catalogCsvInput").click();
});
document.getElementById("catalogCsvInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) importCatalogCsvFile(file);
  event.target.value = "";
});
document.getElementById("catalogSampleBtn").addEventListener("click", downloadCatalogSample);
document.getElementById("catalogLineFilter").addEventListener("change", (event) => {
  state.catalogLine = event.target.value;
  renderCatalogs();
  setStatus(state.catalogLine === "all" ? "已显示全部产品线" : `已筛选 ${state.catalogLine}`);
});
document.getElementById("catalogPortfolioBtn").addEventListener("click", addCatalogPortfolioMap);
document.getElementById("catalogExportBtn").addEventListener("click", exportProductCatalogMarkdown);
document.getElementById("pilotLaunchTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-launch-action]");
  if (!button) return;
  if (button.dataset.launchAction === "next") {
    if (button.dataset.launchStep === "report") showReport();
    else runPilotLaunchStep(button.dataset.launchStep);
  }
  if (button.dataset.launchAction === "workspace") addPilotLaunchWorkspace();
  if (button.dataset.launchAction === "meeting") addPilotLaunchMeetingFlow();
  if (button.dataset.launchAction === "export") exportPilotLaunchMarkdown();
});
document.getElementById("rolePlaybookTools").addEventListener("click", (event) => {
  const roleButton = event.target.closest("[data-role-playbook]");
  const actionButton = event.target.closest("[data-role-playbook-action]");
  if (roleButton) addRolePlaybookWorkspace(roleButton.dataset.rolePlaybook);
  if (actionButton?.dataset.rolePlaybookAction === "all") addRolePlaybookWorkspace("all");
  if (actionButton?.dataset.rolePlaybookAction === "export") exportRolePlaybookMarkdown();
});
document.getElementById("trialAcceptanceTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-acceptance-action]");
  if (!button) return;
  if (button.dataset.acceptanceAction === "workspace") addTrialAcceptanceWorkspace();
  if (button.dataset.acceptanceAction === "audit") addTrialAcceptanceEvidence();
  if (button.dataset.acceptanceAction === "export") exportTrialAcceptanceMarkdown();
});
document.getElementById("liveFeedbackTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-live-feedback-action]");
  if (!button) return;
  if (button.dataset.liveFeedbackAction === "add") addLiveFeedbackFromPanel();
  if (button.dataset.liveFeedbackAction === "export") exportLiveFeedbackMarkdown();
});
document.getElementById("morningBriefTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-morning-brief-action]");
  if (!button) return;
  if (button.dataset.morningBriefAction === "workspace") addMorningBriefWorkspace();
  if (button.dataset.morningBriefAction === "refresh") refreshMorningBriefEvidence();
  if (button.dataset.morningBriefAction === "export") exportMorningBriefMarkdown();
});
document.getElementById("executionDispatchTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-execution-action]");
  if (!button) return;
  if (button.dataset.executionAction === "workspace") addExecutionDispatchWorkspace();
  if (button.dataset.executionAction === "sync") syncExecutionDispatchTasks();
  if (button.dataset.executionAction === "export") exportExecutionDispatchMarkdown();
});
document.getElementById("officialSeedTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-official-seed-action]");
  if (!button) return;
  if (button.dataset.officialSeedAction === "generate") addOfficialProductSeedPackage();
  if (button.dataset.officialSeedAction === "csv") downloadOfficialSeedCsv();
  if (button.dataset.officialSeedAction === "export") exportOfficialSeedMarkdown();
});
document.getElementById("readinessTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-readiness-action]");
  if (!button) return;
  if (button.dataset.readinessAction === "board") addReadinessBoard();
  if (button.dataset.readinessAction === "export") exportReadinessMarkdown();
});
document.getElementById("exportBtn").addEventListener("click", exportWorkspace);
document.getElementById("exportReportBtn").addEventListener("click", exportReportJson);
document.getElementById("exportReportMdBtn").addEventListener("click", exportReportMarkdown);
document.getElementById("resetBtn").addEventListener("click", resetWorkspace);
document.getElementById("reportBtn").addEventListener("click", showReport);
document.getElementById("closeReportBtn").addEventListener("click", () => {
  reportModal.hidden = true;
});

document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => addTemplate(button.dataset.template));
});

document.querySelectorAll("[data-scenario]").forEach((button) => {
  button.addEventListener("click", () => addScenario(button.dataset.scenario));
});

document.getElementById("productCatalogList").addEventListener("click", (event) => {
  const productButton = event.target.closest("[data-catalog-product]");
  const packageButton = event.target.closest("[data-catalog-package]");
  if (productButton) addCatalogProduct(productButton.dataset.catalogProduct);
  if (packageButton) addCatalogPackage(packageButton.dataset.catalogPackage);
});

document.getElementById("assetCatalogList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-asset-catalog]");
  if (button) addAssetFromCatalog(button.dataset.assetCatalog);
});

document.getElementById("assetTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-asset-action]");
  if (!button) return;
  if (button.dataset.assetAction === "current") addAssetPackForCurrentProduct();
  if (button.dataset.assetAction === "batch") addAssetPacksForAllProducts();
  if (button.dataset.assetAction === "export") exportAssetLibraryMarkdown();
});

document.getElementById("fileLedgerTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-file-action]");
  if (!button) return;
  if (button.dataset.fileAction === "current") addFileLedgerForCurrentProduct();
  if (button.dataset.fileAction === "projects") addProjectFileLedgerPack();
  if (button.dataset.fileAction === "export") exportFileLedgerMarkdown();
});

document.getElementById("roadmapTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-roadmap-action]");
  if (!button) return;
  if (button.dataset.roadmapAction === "references") addOpenSourceReferenceMap();
  if (button.dataset.roadmapAction === "evidence") addGitHubReferenceEvidenceBoard();
  if (button.dataset.roadmapAction === "plan") addWinnsenRoadmap();
  if (button.dataset.roadmapAction === "export") exportRoadmapMarkdown();
});

document.getElementById("teamWorkflowTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-action]");
  if (!button) return;
  if (button.dataset.teamAction === "roles") addTeamRoleMatrix();
  if (button.dataset.teamAction === "handoff") addTeamHandoffWorkflow();
  if (button.dataset.teamAction === "export") exportTeamWorkflowMarkdown();
});

document.getElementById("deliverySpecTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delivery-action]");
  if (!button) return;
  if (button.dataset.deliveryAction === "schema") addDataModelMap();
  if (button.dataset.deliveryAction === "mvp") addMvpDeliverySpec();
  if (button.dataset.deliveryAction === "export") exportDeliverySpecMarkdown();
});

document.getElementById("workflowLauncherTools").addEventListener("click", (event) => {
  const workflowButton = event.target.closest("[data-workflow-launch]");
  const actionButton = event.target.closest("[data-workflow-action]");
  if (workflowButton) launchWorkflow(workflowButton.dataset.workflowLaunch);
  if (actionButton?.dataset.workflowAction === "export") exportWorkflowLauncherMarkdown();
});

document.getElementById("overnightGoalTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-overnight-action]");
  if (!button) return;
  if (button.dataset.overnightAction === "imitate") addMatureProductImitationMap();
  if (button.dataset.overnightAction === "plan") addOvernightGoalPlan();
  if (button.dataset.overnightAction === "export") exportOvernightGoalMarkdown();
});

document.getElementById("pilotPackTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-pilot-action]");
  if (!button) return;
  if (button.dataset.pilotAction === "package") addInternalPilotPackage();
  if (button.dataset.pilotAction === "checklist") addPilotAcceptanceChecklist();
  if (button.dataset.pilotAction === "export") exportInternalPilotMarkdown();
});

document.getElementById("pilotSessionTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-session-action]");
  if (!button) return;
  if (button.dataset.sessionAction === "log") addPilotSessionLog();
  if (button.dataset.sessionAction === "actions") addPilotSessionActions();
  if (button.dataset.sessionAction === "export") exportPilotSessionMarkdown();
});

document.getElementById("guidedStartTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-guided-action]");
  if (!button) return;
  if (button.dataset.guidedAction === "guide") addGuidedStartMap();
  if (button.dataset.guidedAction === "export") exportGuidedStartMarkdown();
});

document.getElementById("pilotFeedbackTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-feedback-action]");
  if (!button) return;
  if (button.dataset.feedbackAction === "feedback") addPilotFeedbackLog();
  if (button.dataset.feedbackAction === "iteration") addPilotIterationBacklog();
  if (button.dataset.feedbackAction === "export") exportPilotFeedbackMarkdown();
});

document.getElementById("reviewTemplateList").addEventListener("click", (event) => {
  const templateButton = event.target.closest("[data-review-template]");
  const allButton = event.target.closest("[data-review-template-all]");
  if (templateButton) addReviewTemplate(templateButton.dataset.reviewTemplate);
  if (allButton) addFullReviewChecklist();
});

document.getElementById("briefTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-brief-action]");
  if (!button) return;
  if (button.dataset.briefAction === "current") addCustomerBriefForCurrentProduct();
  if (button.dataset.briefAction === "batch") addCustomerBriefsForAllProducts();
  if (button.dataset.briefAction === "export") exportCustomerBriefMarkdown();
});

document.getElementById("customerProjectTools").addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-project-action]");
  const briefButton = event.target.closest("[data-project-brief]");
  const packageButton = event.target.closest("[data-project-package]");
  const gateButton = event.target.closest("[data-project-gate]");
  if (actionButton?.dataset.projectAction === "map") addCustomerProjectMap();
  if (actionButton?.dataset.projectAction === "export") exportCustomerProjectMarkdown();
  if (briefButton) addCustomerProjectBrief(briefButton.dataset.projectBrief);
  if (packageButton) addCustomerProjectPackage(packageButton.dataset.projectPackage);
  if (gateButton) addQuoteGateForProject(gateButton.dataset.projectGate);
});

document.getElementById("quoteGateTools").addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-gate-action]");
  const projectButton = event.target.closest("[data-gate-project]");
  if (actionButton?.dataset.gateAction === "batch") addAllQuoteGates();
  if (actionButton?.dataset.gateAction === "export") exportQuoteGateMarkdown();
  if (projectButton) addQuoteGateForProject(projectButton.dataset.gateProject);
});

document.getElementById("knowledgeTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-knowledge-action]");
  if (!button) return;
  if (button.dataset.knowledgeAction === "current") addKnowledgeFromCurrentReview();
  if (button.dataset.knowledgeAction === "batch") addKnowledgeFromAllReviews();
  if (button.dataset.knowledgeAction === "export") exportKnowledgeMarkdown();
});

document.getElementById("uiFlowTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-flow-action]");
  if (!button) return;
  if (button.dataset.flowAction === "current") addUiFlowForCurrentProduct();
  if (button.dataset.flowAction === "batch") addUiFlowsForAllProducts();
  if (button.dataset.flowAction === "export") exportUiFlowMarkdown();
});

videoBrief.addEventListener("click", (event) => {
  const button = event.target.closest("[data-video-action]");
  if (!button) return;
  if (button.dataset.videoAction === "plan") addVideoPlanForCurrentProduct();
  if (button.dataset.videoAction === "prompt") {
    promptOutput.value = buildVideoPrompt();
    setStatus("已填入视频提示词");
  }
});

document.querySelectorAll("[data-focus]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-focus]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.focus = button.dataset.focus;
    state.search = "";
    document.getElementById("searchInput").value = "";
    render();
  });
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

document.getElementById("aiPromptTools").addEventListener("click", (event) => {
  const button = event.target.closest("[data-ai-prompt]");
  if (!button) return;
  const ctx = promptContextForSelected();
  const promptBuilders = {
    product: ["已生成产品设计提示词", () => buildProductDesignPrompt(ctx)],
    ui: ["已生成界面设计提示词", () => buildUiDesignPrompt(ctx)],
    review: ["已生成结构品审提示词", () => buildStructurePrompt(ctx)],
    asset: ["已生成素材整理提示词", () => buildAssetPrompt(ctx)],
    knowledge: ["已生成知识沉淀提示词", () => buildKnowledgePrompt(ctx)],
    video: ["已生成视频脚本提示词", () => buildVideoPrompt(ctx)],
    bundle: ["已生成整套 AI Prompt", () => buildAiPromptBundleMarkdown(ctx)],
  };
  const action = button.dataset.aiPrompt;
  if (action === "node") {
    addAiPromptPackNode();
    return;
  }
  if (action === "export") {
    exportAiPromptBundleMarkdown();
    return;
  }
  const builder = promptBuilders[action];
  if (!builder) return;
  promptOutput.value = builder[1]();
  setStatus(builder[0]);
});

selectionBody.addEventListener("submit", (event) => {
  if (event.target.id === "nodeEditor") {
    event.preventDefault();
    updateSelectedNode(event.target);
  }
});

selectionBody.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (!action) return;
  if (action === "linked-review") addLinkedReview();
  if (action === "linked-video") addLinkedVideo();
  if (action === "knowledge-card") addKnowledgeCard();
  if (action === "delete-node") deleteSelectedNode();
});

window.winnsenCanvasApi = {
  importCsvText(text, options = csvImportOptions()) {
    const records = parseCatalogCsv(text);
    const created = addCsvProducts(records, options);
    return {
      records: records.length,
      created,
    };
  },
  parseCatalogCsv(text) {
    return parseCatalogCsv(text);
  },
  snapshot() {
    return {
      nodes: clone(nodes),
      links: clone(links),
      view: {
        offsetX: state.offsetX,
        offsetY: state.offsetY,
        scale: state.scale,
        selectedId: state.selectedId,
      },
    };
  },
};

if (workspaceData.view) {
  render();
} else {
  fitView();
}
