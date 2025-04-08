import {divider} from "@nextui-org/theme";

export interface Ministry {
    img: string;
    cnMinistryTitle: string;
    ministry: string;
    desc: string[];
    rate: number[];
    display: boolean;
}

export interface Department {
    combination: string;
    individual: {
        cnDepTitle: string;
        depTitle: string;
        desc: string;
        ministry: Ministry[];
    }[]
}


export interface Team {
    team_name_en: string;
    team_name_zh: string;
    description: string[];
    department: Department;
    description_short: string;
    img: string;
    bg: string;
}

export const getAllDisplayMinistries = (): { value: string; label: string }[] => {
    // return all ministries that are displayed, return { value , label }, value = ministry name, label =  ministry name
    const allDisplayMinistries: { value: string; label: string }[] = [];
    ministriesData.forEach((team) => {
        team.department.individual.forEach((department) => {
            department.ministry.forEach((ministry) => {
                if (ministry.display) {
                    allDisplayMinistries.push({
                        value: ministry.ministry,
                        label: ministry.ministry
                    });
                }
            });
        });
    });
    return allDisplayMinistries;
}


export const ministriesData: Team[] = [
    {
        "team_name_en": "People Experience Team",
        "team_name_zh": "贵宾体验团队",
        "description": [
            "贵宾体验团队的存在是为了提升每位来到教会的人的整体体验。通过提供良好的体验，相信人更愿意留下联系信息，以便牧养团队能够有效地让人融入我们教会的社群当中。",
            "我们的期待是将牧养过程数据化，以优质的服务态度和数据帮助教会和每个会友在健康的轨道上成长。"
        ],
        "description_short": "我们通过接待与支持服务，让新朋友感受温暖，轻松融入教会。",
        "img": "/images/get-involved/images/people_main.png",
        "bg" :"bg-[radial-gradient(circle,_#FF981A66_10%,_#FF981A00_100%)]",
        "department": {
            "combination": "People | General Affair | Tech",
            "individual": [
                {
                    "cnDepTitle": "人流部",
                    "depTitle": "People",
                    "desc": "他们肩负了暖和人心的重任，协助指挥人流和维持聚会的秩序。人流部以友善的接待态度，招待每个来到教会的人，让参加聚会的你感到安全以及受欢迎。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/usher.jpg",
                            "cnMinistryTitle": "招待",
                            "ministry": "Usher",
                            "desc": [
                                "“WELCOME HOME!” 不是一句可有可无的口号，一句温暖的欢迎加上亲切的笑容，是人们对于 FGACYC 这个 “家” 的第一印象。他们背负着维持聚会秩序的重任、提供指导和帮助，小事细至帮助会众找到座位都由他们一手包办。"
                            ],
                            "rate": [
                                2,
                                4
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/security.png",
                            "cnMinistryTitle": "保安",
                            "ministry": "Security",
                            "desc": [
                                "他们的眼神是专注，不是凶狠；他们的姿态是专业，绝非冷漠，他们的衣着很整齐，却无关黑手党。他们是接受过紧急响应、解决冲突、急救或人群管理等领域的专门培训！有了他们，少了凌乱，多了安全感。"
                            ],
                            "rate": [
                                2,
                                3
                            ],
                            "display": true
                        }
                    ]
                },
                {
                    "cnDepTitle": "总务部",
                    "depTitle": "Operations",
                    "desc": "总务部的责任是确保教会每个星期聚会运营高效、顺利，并支持教会和会友们的一切所需。他们负责管理流程、教会的资源和供应链，分析牧养体系的数据，以及促进教会健康的发展。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/admin.jpg",
                            "cnMinistryTitle": "行政",
                            "ministry": "Admin",
                            "desc": [
                                "这一群或许连三分钟台都未上过的人，日夜用他们精明能干的头脑、牺牲的心肠，在台下应付和整理 FGACYC 大量的资料流量，可说是 FGACYC的支柱！没有了他们的统计，我们可能都没办法透过见证神应许给 FGACYC 爆炸性复兴的时刻！"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/venue.png",
                            "cnMinistryTitle": "场地",
                            "ministry": "Venue",
                            "desc": [
                                "负责教会礼拜和活动场地的整体规划、设计和维护。场地组主要是要创造一个舒适的崇拜氛围和环境，使每一位来到教会的会众都能毫无干扰的敬拜神。"
                            ],
                            "rate": [
                                2,
                                4
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/lounge.jpg",
                            "cnMinistryTitle": "贵宾接待",
                            "ministry": "Guest Lounge",
                            "desc": [
                                "贵宾招待负责迎接和招待教会的贵宾、讲员和其他重要访客。该岗位不仅是教会礼貌和热情的象征，更是通过细致入微的服务，让每一位贵宾感受到被尊重和关怀。"
                            ],
                            "rate": [
                                2,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/shuttle.jpg",
                            "cnMinistryTitle": "接驳服务",
                            "ministry": "Shuttle",
                            "desc": [
                                "由于教会的迅速发展，停车问题日益严重，导致会友和新朋友们有时不得不将车辆停放在较远的地方，然后步行到聚会地点。为了改善每个人来教会的体验，他们提供贴心的运送服务，确保每个人都能享受到愉快的教会体验。"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": true
                        }
                    ]
                },
                {
                    "cnDepTitle": "科技部",
                    "depTitle": "Technology",
                    "desc": "他们应用计算机科学和通信技术来管理、储存和处理海量信息。技术部由一群科技达人组成，正以无比的热情和执着，用技术的力量促进教会的成长，拓展神的国度。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/software_development.jpg",
                            "cnMinistryTitle": "软件开发",
                            "ministry": "Software Development",
                            "desc": [
                                "软件开发人员负责将软件项目的需求转化为实际可用的软件应用。他们在软件的设计、编码、测试和维护过程中发挥关键作用，确保软件的功能性、可靠性和可扩展性。透过各种科技的应用，让教会有更完善的管理系统和拓展潜能。"
                            ],
                            "rate": [
                                5,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/project_management.jpg",
                            "cnMinistryTitle": "项目管理",
                            "ministry": "Project Management",
                            "desc": [
                                "项目管理人员负责规划、组织、监督和控制项目的全过程，确保项目按时、按预算和按质量要求完成。他们是技术和需求的桥梁，让教会的需求透过适当的技术和科技能够完善的结合。"
                            ],
                            "rate": [
                                4,
                                2
                            ],
                            "display": true
                        }
                    ]
                }
            ]
        }
    },
    {
        "team_name_en": "Communication Team",
        "team_name_zh": "传媒团队",
        "description": [
            "传媒团队存在是为了把神在教会四栋墙内发生的事情带到教会以外的每个角落。我们通过媒体的力量，让那些需要神的人能够找到我们的教会，从网民最终转化为门徒。",
            "我们期待成为一个福音的渠道，让那些不认识耶稣或已经远离神的人回到神的同在里。"
        ],
        "description_short": "用媒体传递教会故事，让更多人认识神，从网民走向门徒，成为福音的桥梁！",
        "img":"/images/get-involved/images/communication_main.jpg",
        "bg" :"bg-[radial-gradient(circle,_#1F75FF66_10%,_#1F75FF00_100%)]",

        "department": {
            "combination": "Social Media | Design| Photography",
            "individual": [
                {
                    "cnDepTitle": "社交媒体部",
                    "depTitle": "Social Media",
                    "desc": "现今每个人人手一机，离不开社交媒体平台，而很多的资讯都从社交媒体平台获得。他们的使命就是把神的话语、救恩和正确的价值观在泛滥的资讯中有效地传播出去。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/content_creation.jpg",
                            "cnMinistryTitle": "内容创作",
                            "ministry": "Content Creation",
                            "desc": [
                                "从内容策划到内容创作、多媒体制作到社交媒体管理，他们的目标是通过创作有吸引力和有价值的属灵内容来吸引和保持受众的关注，并让神家里的故事能够被看见和听见。"
                            ],
                            "rate": [
                                3,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/editorial.jpg",
                            "cnMinistryTitle": "文字编辑",
                            "ministry": "Editorial",
                            "desc": [
                                "文字能够传递信息、影响思想、引发情感共鸣、激发行动和改变的力量。他们透过文字的力量，以及精心编辑的文案，把教会里发生的大小事物赋予重大的意义。"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": false
                        }
                    ]
                },
                {
                    "cnDepTitle": "设计部",
                    "depTitle": "Design",
                    "desc": "设计部主要以 “视觉” 作为沟通和表现的方式，透过多种创意的方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉作品。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/graphic_design.jpg",
                            "cnMinistryTitle": "平面设计",
                            "ministry": "Graphic Design",
                            "desc": [
                                "好的视觉设计能够抓住眼球，开启观众对神和教会的好奇心和兴趣。他们能够让让平平无奇的资讯活过来，透过颜色的运用，巧妙的排版和舒服的视觉效果，让人对神感兴趣。"
                            ],
                            "rate": [
                                4,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/multimedia_design.jpg",
                            "cnMinistryTitle": "网页设计",
                            "ministry": "UI/UX Design",
                            "desc": [
                                "在这个数码的时代，设计不再只局限于印刷的应用。数码世界的需求也早已超越了静态的设计。多媒体设计师涉及的范围有网页设计、动画和3D制作。让一片黑漆漆的数码屏幕生动起来。"
                            ],
                            "rate": [
                                4,
                                2
                            ],
                            "display": true
                        }
                    ]
                },
                {
                    "cnDepTitle": "摄影部",
                    "depTitle": "Photography",
                    "desc": "摄影部负责捕抓神在这个家里所做的每一个奇妙的工作。无论是从最大型的布道会，或者是日常的各种聚会，他们都会准备就绪，把最珍贵的时刻都记录下来。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/photography.jpg",
                            "cnMinistryTitle": "摄影",
                            "ministry": "Photography",
                            "desc": [
                                "属灵的摄影师拥有敏锐圣灵的能力，并能够即时的捕抓神运行的画面。从构图到拍摄，修图到调色，他们透过摄影的创作传递情绪，让神家里发生的大小事物都能被记录和被传播。"
                            ],
                            "rate": [
                                3,
                                3
                            ],
                            "display": true
                        }
                    ]
                }
            ]
        }
    },
    {
        "team_name_en": "Creative Team",
        "team_name_zh": "创意团队",
        "description": [
            "创意团队存在是为了让每一场聚会都可以承载神的同在。无论是透过舞蹈也好，映像也好，歌曲也好，灯光也好，我们希望能够把神的心意以创意的方式表达出来。",
            "我们期待的不仅仅是让聚会具是有吸引力，更重要的是能够与神配搭，让每一个参与聚会的人都可以被神的爱触摸。"
        ],
        "description_short": "用舞蹈、影像、音乐与灯光创造敬拜氛围，让每场聚会承载神的同在，触动人心，传递神的爱。",
        "img":"/images/get-involved/images/creative_main.jpg",
        "bg":"bg-[radial-gradient(circle,_#FF1FA966_10%,_#FF1FA900_100%)]",
        "department": {
            "combination": "Production | Arts | Worship",
            "individual": [
                {
                    "cnDepTitle": "制作部",
                    "depTitle": "Production",
                    "desc": "聚会里所看到的和听到的一切都是制作部背后的精心策划和执行。他们以最专业的态度，把每一场聚会制作好，为的就是让每个来到聚会当中的人都可以经历神。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/stage_management.jpg",
                            "cnMinistryTitle": "舞台管理",
                            "ministry": "Stage Management",
                            "desc": [
                                "每场活动幕后的心脏，努力将每一次聚会或演出的创意实现。通过细致入微打磨每个环节，精心处理、管理舞台的各个方面，包括活动的策划与执行、时间管理、与台前幕后工作人员的协调和配搭等，为的就是创造一个身临其境的沉浸式体验给会众。"
                            ],
                            "rate": [
                                2,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/multimedia.jpg",
                            "cnMinistryTitle": "多媒体",
                            "ministry": "Multimedia",
                            "desc": [
                                "多媒体影像画面不但能带来霞撼的视觉效果，同时传递了圣灵的工作，也让网络上的体验到现场的震撼，让聚会更完全地被呈献。也同时透过故事、镜头、光影、音效、特效，来呈现美好的故事，用心的制作来传达内容。"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/sound.jpg",
                            "cnMinistryTitle": "音响",
                            "ministry": "Sound",
                            "desc": [
                                "若每周信息是我们的粮食，讲员就同等于厨师，那音响就如同餐具，少了他们，山珍海味都没办法送进我们的口中！音响组绝非仅仅调节音量，要让会众听到高音准、中音甜、低音稳，那可是一辈子的学习！"
                            ],
                            "rate": [
                                4,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/lighting.jpg",
                            "cnMinistryTitle": "灯光",
                            "ministry": "Lighting",
                            "desc": [
                                "灯光组专为冰冷的舞台涂上层层色彩，是一门不可或缺的艺术。在舞台灯光四射的氛围底下，人们能够更专注投入敬拜神。灯光组员从灯种、色彩温度、亮度到电路，可谓样样精通！"
                            ],
                            "rate": [
                                4,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/translation.jpg",
                            "cnMinistryTitle": "语言翻译",
                            "ministry": "Translation",
                            "desc": [
                                "这里是一个语文专才的集聚地，结众人的力量写出强而有力的字句，高度还原并精准表达原文中的含义。这不仅仅是将某一种语文翻译成另一种语文，它还需要考验你的临场反应，大脑里的词汇量等等。"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": true
                        }
                    ]
                },
                {
                    "cnDepTitle": "艺术部",
                    "depTitle": "Arts",
                    "desc": "艺术的表达也是对神的一种敬拜方式。艺术部透过舞蹈，戏剧，视觉美观来传递耶稣的好消息。相信创造我们的神也赋予了每一个人发挥创意的能力。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/dance.jpg",
                            "cnMinistryTitle": "舞蹈",
                            "ministry": "Dance",
                            "desc": [
                                "赞美神，除了言语歌声外，绝对少不了跳舞！激发你内在的潜能，用肢体语言为主发光吧！以超炫的舞蹈结合强劲的音乐，使舞台散发出吸引年轻人来到教会的魅力！"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/fashion_&_image.jpg",
                            "cnMinistryTitle": "形象设计",
                            "ministry": "Fashion & Image",
                            "desc": [
                                "他们负责设计人物造型、化妆以及发型，以一双巧手让路人瞬间变成闪亮明星！自认拥有走在时代尖端的时装品味与妆容嗅觉的你，还等什么？这里就是你发挥所长的好地方！"
                            ],
                            "rate": [
                                3,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/drama.jpg",
                            "cnMinistryTitle": "戏剧",
                            "ministry": "Drama",
                            "desc": [
                                "总觉得自己里面住了一个梁朝伟、吴君如？帅过李现、美过刘亦菲？厉害过陈可辛、红过吴宇森？无论是实力派还是偶像派，高颜值也好、谐星也罢，只要爱演的就过来！"
                            ],
                            "rate": [
                                3,
                                2
                            ],
                            "display": false
                        },
                        {
                            "img": "/images/get-involved/images/decoration.jpg",
                            "cnMinistryTitle": "视觉陈列",
                            "ministry": "Decoration",
                            "desc": [
                                "一门创造性的视觉与空间艺术，它包括礼堂设计、装饰、讲台布置、走道、模型展示、背景板、道具及挂饰等礼拜终端的所有视觉要素，是一个完整而系统的集合概念。"
                            ],
                            "rate": [
                                3,
                                3
                            ],
                            "display": true
                        }
                    ]
                },
                {
                    "cnDepTitle": "敬拜部",
                    "depTitle": "Worship",
                    "desc": "以火热渴慕爱神的敬拜把神的爱和同在带到世界每个角落，让更多人在敬拜音乐中认识上帝。兴起敬拜神、敬畏神、热爱神的世代是敬拜部不变的核心价值和异象。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/vocal.jpg",
                            "cnMinistryTitle": "歌手",
                            "ministry": "Vocal",
                            "desc": [
                                "如果将歌曲视为我们对神敬拜的一种表达方式，那么歌声就成为了我们不可或缺的工具。一个真正拥有敬拜生命的歌手，不仅仅是能够演唱一首诗歌，更重要的是能够引领神的子民进入神的同在。"
                            ],
                            "rate": [
                                4,
                                3
                            ],
                            "display": true
                        },
                        {
                            "img": "/images/get-involved/images/musician.jpg",
                            "cnMinistryTitle": "乐手",
                            "ministry": "Musician",
                            "desc": [
                                "一个敏锐圣灵运行的乐队，能够转化属灵的气氛，让一个聚会从开始到结束都充满着敬拜的氛围。如果你擅长键盘，吉他，贝斯或者是鼓欢迎加入我们！"
                            ],
                            "rate": [
                                5,
                                3
                            ],
                            "display": true
                        }
                    ]
                }
            ]
        }
    },
    {
        "team_name_en": "Wonderkids",
        "team_name_zh": "神奇王国",
        "description": [
            "我们相信孩子是天国的宝贝，是上帝所看重的，他们也是下一代的领袖和栋梁！ ",
            "在这里，我们将帮助孩子们塑造品格，提升孩子们的沟通能力、体能建造、提供创意学习的环境，激发孩子的潜能，以及教导他们如何建立友好关系等。"
        ],
        "description_short": "孩子是天国的宝贝，也是未来的领袖！在这里，我们培养品格、沟通力、创造力，激发潜能，让他们在爱中成长。",
        "img":"/images/get-involved/images/wonderkids_main.jpg",
        "bg":"bg-[radial-gradient(circle,_#FFC71F66_10%,_#FFC71F00_100%)",
        "department": {
            "combination": "Wonderkids",
            "individual": [
                {
                    "cnDepTitle": "神奇王国",
                    "depTitle": "Wonderkids",
                    "desc": "神奇王国是一个充满爱与关怀的地方，致力于为孩子们提供一个安全、快乐和富有启发性的环境。我们通过各种活动和课程，帮助孩子们在信仰、品格和社交能力等方面全面发展。",
                    "ministry": [
                        {
                            "img": "/images/get-involved/images/wonderkids_team.jpg",
                            "cnMinistryTitle": "神奇王国同工",
                            "ministry": "Wonderkids",
                            "desc": ["他们充满童真但绝不幼稚，他们善良、友爱、和蔼可亲又温柔，他们肩负培养下一代伟大的使命，喜欢小朋友且愿意耐心教导？来吧！我们需要你！"],
                            "rate": [
                                5,
                                3
                            ],
                            "display": true
                        }
                    ]
                }
            ]
        }
    }
]

export default function MinistriesData() {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"text-3xl font-bold text-white"}>Ministries Data</h1>
            <div className={"flex flex-col items-center justify-center"}>
                {ministriesData.map((team) => (
                    <div key={team.team_name_en} className={"flex flex-col items-center justify-center"}>
                        <h2 className={"text-2xl font-bold text-white"}>{team.team_name_en}</h2>
                        <p className={"text-lg font-bold text-white"}>{team.description_short}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}