var mapWidth;
if ($(window).width() <= 800)
    mapWidth = "responsive";
else
    mapWidth = "550";
var globalMapLocationsArray = mapLocationsArray = {
    "0": {
        lat: 26.287,
        lng: 91.504,
        name: "Gramya Vikash Manch (GVM)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Assam"
    },
    "1": {
        lat: 25.245,
        lng: 84.664,
        name: "Bihar Bal Awaz Manch (BBAM) ",
        description: "<h3>Alliance</h3><span>Education</span>",
        type: "circle",
        state: "Bihar"
    },
    "2": {
        lat: "22.5008671",
        lng: "86.1533663",
        name: "CRY",
        description: "<h3>Direct Project</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "West Bengal"
    },
    "3": {
        lat: "26.6374385",
        lng: "84.3272885",
        name: "Comprehensive Health And Rural Development Society (CHARDS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Bihar"
    },
    "4": {
        lat: "27.0504883",
        lng: "83.7387393",
        name: "Development Education And Environmental Program (DEEP)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Bihar"
    },
    "5": {
        lat: "25.8560457",
        lng: "85.7780685",
        name: "Jawahar Jyoti Bal Vikas Kendra (JJBVK)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Bihar"
    },
    "6": {
        lat: "22.960728",
        lng: "76.0075266",
        name: "Aim For The Awareness Of Society (AAS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "7": {
        lat: "22.613145",
        lng: "85.9187761",
        name: "Adarsh Seva Sansthan (ASES)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Jharkhand"
    },
    "8": {
        lat: "22.913145",
        lng: "84.9187761",
        name: "Bal Sakha",
        description: "<h3>Project Partner</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Jharkhand"
    },
    "9": {
        lat: "23.913145",
        lng: "84.9187761",
        name: "CREJ Jan Mukti Andolan ",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span>",
        type: "circle",
        state: "Jharkhand"
    },
    "10": {
        lat: "24.1898881",
        lng: "86.2719403",
        name: "Jago Foundation",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Jharkhand"
    },
    "11": {
        lat: "24.4667856",
        lng: "85.5898357",
        name: "Rashtriya Jharkhand Seva Sansthan (RJSS) ",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Jharkhand"
    },
    "12": {
        lat: "26.4532261",
        lng: "74.565673",
        name: "CRY",
        description: "<h3>Direct Project</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Rajasthan"
    },
    "13": {
        lat: "24.739",
        lng: "93.506",
        name: "Manipur Alliance For Child Rights ",
        description: "<h3>Alliance</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Manipur"
    },
    "14": {
        lat: 24.339,
        lng: 94.006,
        name: "New Era Environmental And Development Society (NEEDS)",
        description: "<h3>Project Partner</h3><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Manipur"
    },
    "15": {
        lat: 25.147,
        lng: 93.969,
        name: "Wide Angle",
        description: "<h3>Project Partner</h3><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Manipur"
    },
    "16": {
        lat: 19.442,
        lng: 82.847,
        name: "Chale Chalo",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Odisha"
    },
    "17": {
        lat: 21.338,
        lng: 83.621,
        name: "Palli Alok Pathagar ",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Odisha"
    },
    "18": {
        lat: 21.724,
        lng: 86.744,
        name: "Siksha Sadhan",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Odisha"
    },
    "19": {
        lat: 18.811,
        lng: 82.713,
        name: "Society For Promotion Of Rural Education And Development (SPREAD)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Odisha"
    },
    "20": {
        lat: "20.011",
        lng: "82.713",
        name: "Voice Of Child Rights ",
        description: "<h3>Alliance</h3><span>Education</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Odisha"
    },
    "21": {
        lat: 20.059,
        lng: 84.247,
        name: "Society Welfare Agency & Training Institute (SWATI)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span>",
        type: "circle",
        state: "Odisha"
    },
    "22": {
        lat: 22.571,
        lng: 88.371,
        name: "Diksha",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "West Bengal"
    },
    "23": {
        lat: 22.635,
        lng: 88.415,
        name: "New Alipore Praajak Development Society ",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "West Bengal"
    },
    "24": {
        lat: 27.039,
        lng: 88.264,
        name: "Sanlaap",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "West Bengal"
    },
    "25": {
        lat: 23.241,
        lng: 87.867,
        name: "Vikramshila Education Resource Society (VERS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "West Bengal"
    },
    "26": {
        lat: "22.241",
        lng: "87.867",
        name: "West Bengal Education Network (WBEN)",
        description: "<h3>Alliance</h3><span>Education</span>",
        type: "circle",
        state: "West Bengal"
    },
    "27": {
        lat: "28.6472799",
        lng: "76.8130635",
        name: "Alliance For People's Rights",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Delhi"
    },
    "28": {
        lat: "28.4822229",
        lng: "77.1185141",
        name: "Matrisudha ",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Delhi"
    },
    "29": {
        lat: "28.6542826",
        lng: "76.9973191",
        name: "Navshrishti ",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Delhi"
    },
    "30": {
        lat: "28.7851837",
        lng: "76.9552122",
        name: "Pahal Multipurpose Organization",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Delhi"
    },
    "31": {
        lat: "28.8822229",
        lng: "77.5185141",
        name: "Rajeev Neelu Kachwaha Public Charitable Trust (SWATI) ",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Delhi"
    },
    "32": {
        lat: "29.6542826",
        lng: "76.9973191",
        name: "Saksham",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Delhi"
    },
    "33": {
        lat: "28.3693136",
        lng: "77.2386295",
        name: "Association For Social Justice & Research (ASOJ)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "34": {
        lat: "29.2689718",
        lng: "73.7820844",
        name: "Bal Bigul ",
        description: "<h3>Alliance</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Haryana"
    },
    "35": {
        lat: "30.7026338",
        lng: "76.792287",
        name: "Peoples Action for People In Need (PAPN) ",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Haryana"
    },
    "36": {
        lat: "34.4374637",
        lng: "74.5786056",
        name: "Jammu Kashmir Association Of Social Workers (JKASW)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Jammu & Kashmir"
    },
    "37": {
        lat: "33.8972829",
        lng: "74.3908639",
        name: "Koshish",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Jammu & Kashmir"
    },
    "38": {
        lat: "24.5795245",
        lng: "80.7330076",
        name: "Anandi Lal",
        description: "<h3>Fellowship</h3><span>Health & Nutrition</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "39": {
        lat: 23.836,
        lng: 79.444,
        name: "Gramin Vikas Samiti (GVS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "40": {
        lat: "22.836",
        lng: "79.444",
        name: "Hifazat",
        description: "<h3>Alliance</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "41": {
        lat: 24.909,
        lng: 79.596,
        name: "Madhya Pradesh Lok Sangharsh Sajha Manch ",
        description: "<h3>Alliance</h3><span>Health & Nutrition</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "42": {
        lat: 24.526,
        lng: 81.303,
        name: "Ramnaresh",
        description: "<h3>Fellowship</h3><span>Health & Nutrition</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "43": {
        lat: 28.631,
        lng: 75.382,
        name: "Samvedna",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "44": {
        lat: 23.265,
        lng: 77.405,
        name: "Vikas Samvad Samity (VSS) ",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "45": {
        lat: 25.419,
        lng: 77.655,
        name: "Vikas Samvad Samity (VSS) ",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Madhya Pradesh"
    },
    "46": {
        lat: 24.587,
        lng: 73.698,
        name: "Kotra Adivasi Sansthan (KAS)",
        description: "<h3>Project Partner</h3><span>Education</span>",
        type: "circle",
        state: "Rajasthan"
    },
    "47": {
        lat: 26.466,
        lng: 74.632,
        name: "Mahila Jan Adhikar Samiti (MJAS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Rajasthan"
    },
    "48": {
        lat: 27.948,
        lng: 80.778,
        name: "Asian Institute of Management (AIM) Trust",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "49": {
        lat: 25.377,
        lng: 81.515,
        name: "Doaba Vikas Evam Utthan Samiti (DVEUS)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "50": {
        lat: 25.333,
        lng: 82.997,
        name: "Dr. Sambhunath Singh Research Foundation (SRF)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "51": {
        lat: 25.436,
        lng: 81.847,
        name: "Education Resource Society (ERS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "52": {
        lat: 25.333,
        lng: 82.997,
        name: "Jan Mitra Nyas (JMN)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "53": {
        lat: "13.1297361",
        lng: "78.0910556",
        name: "Prabhavathi",
        description: "<h3>Fellowship</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Karnataka"
    },
    "54": {
        lat: 25.26,
        lng: 83.268,
        name: "Rural Organisation For Social Advancement (ROSA)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "55": {
        lat: 28.036,
        lng: 79.123,
        name: "Samagra Vikas Sansthan (SVS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "56": {
        lat: 24.688,
        lng: 83.065,
        name: "Sonebhadra Vikas Samiti (SVSS)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "57": {
        lat: "26.688",
        lng: "83.065",
        name: "Voice Of People ",
        description: "<h3>Alliance</h3><span>Education</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Uttar Pradesh"
    },
    "58": {
        lat: "16.4320599",
        lng: "80.220894",
        name: "Compassionate Rural Association For Social Action (CRASA)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "59": {
        lat: "17.7391275",
        lng: "82.9823875",
        name: "G. Vijaya Lakshmi & Associates",
        description: "<h3>Fellowship</h3><span>Education</span><span>Safety & Protection</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "60": {
        lat: "13.2164459",
        lng: "79.0712941",
        name: "People's Organisation For Rural Development (PORD)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "61": {
        lat: "14.6651157",
        lng: "77.5241653",
        name: "People's Voice For Child Rights (PVCR) ",
        description: "<h3>Alliance</h3><span>Education</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "62": {
        lat: "13.9164459",
        lng: "79.1712941",
        name: "Pragathi",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "63": {
        lat: "17.1570239",
        lng: "80.618807",
        name: "Society For Rural Agriculturalists And Mass Awareness (SRAMA)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Andhra Pradesh"
    },
    "64": {
        lat: "12.954517",
        lng: "77.3507347",
        name: "Ananya Edu Trust",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Karnataka"
    },
    "65": {
        lat: "15.866867",
        lng: "74.4383994",
        name: "Empowering Girl Child (Through Margadarshi)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Karnataka"
    },
    "66": {
        lat: "12.54517",
        lng: "77.0507347",
        name: "CRY",
        description: "<h3>Driect Project</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Karnataka"
    },
    "67": {
        lat: "17.3391569",
        lng: "76.7698991",
        name: "Margadarshi",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Karnataka"
    },
    "68": {
        lat: "15.3391569",
        lng: "76.7698991",
        name: "Samajika Parivartana Jana Andolana",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Karnataka"
    },
    "69": {
        lat: "16.2165209",
        lng: "77.3171632",
        name: "Shruti Samskruti Samsthe (SSS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Karnataka"
    },
    "70": {
        lat: "8.7217247",
        lng: "77.6721366",
        name: "Human Rights Education and Protection Council (HREPC)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "71": {
        lat: "10.3623791",
        lng: "77.9607031",
        name: "M. Leelavathy & Associates",
        description: "<h3>Fellowship</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "72": {
        lat: "13.0473748",
        lng: "79.9288104",
        name: "Slum Children Sports Talents Education Development Society (SCSTEDS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "73": {
        lat: "9.3678273",
        lng: "78.8257136",
        name: "Rural Workers Development Society (RWDS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "74": {
        lat: "11.6537266",
        lng: "78.0682563",
        name: "Salem People's Trust (SPT)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "75": {
        lat: "11.6537266",
        lng: "78.0882563",
        name: "Tamil Nadu Samakalvi Vazhurimai Iyakkam",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Tamil Nadu"
    },
    "76": {
        lat: "17.6309878",
        lng: "78.4653867",
        name: "J. Prathap & Associates",
        description: "<h3>Fellowship</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Telangana"
    },
    "77": {
        lat: "17.6309878",
        lng: "78.4953867",
        name: "People's Voice For Child Rights ",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Telangana"
    },
    "78": {
        lat: "16.4919731",
        lng: "78.2898186",
        name: "Shramika Vikasa Kendram (SVK)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Telangana"
    },
    "79": {
        lat: "16.4919731",
        lng: "78.2898186",
        name: "Chattisgarh Bal Adhikar Abhiyan ",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "80": {
        lat: "20.9359392",
        lng: "80.0753691",
        name: "Chattisgarh Bal Adhikar Abhiyan ",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Protection</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "81": {
        lat: "20.9159392",
        lng: "80.0553691",
        name: "Gram Mitra Samaj Sevi Sanstha (GMSSS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "82": {
        lat: "22.0796539",
        lng: "82.1321604",
        name: "Mitwa Mahila Kalyan Evam Seva Samiti (MMKSS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "83": {
        lat: "21.2618911",
        lng: "81.5490325",
        name: "Navadhar Samajik Evam Sanskrutik Vikas Manch (NSESVM)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "84": {
        lat: "22.949794",
        lng: "82.9418666",
        name: "Path Pradarshak",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Child Participation</span>",
        type: "circle",
        state: "Chattisgarh"
    },
    "85": {
        lat: "22.3180733",
        lng: "74.881405",
        name: "Adivasi Vikas Trust (AVT)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "86": {
        lat: "22.2734719",
        lng: "70.7512556",
        name: "Bahujan Samajik Trust (BST)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "87": {
        lat: "24.2672428",
        lng: "71.5795093",
        name: "Danta Taluka Adivasi Sarvangi Vikash Sangh",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "88": {
        lat: "23.8481797",
        lng: "72.0873063",
        name: "Gram Swaraj Sangh (GSS)",
        description: "<h3>Project Partner</h3><span>Health & Nutrition</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "89": {
        lat: "22.2467142",
        lng: "69.851884",
        name: "Gramya Vikas Trust (GVT)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "90": {
        lat: "23.0201818",
        lng: "72.4396553",
        name: "Sahyog Charitable Trust (SCT)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "91": {
        lat: "24.2672428",
        lng: "71.5795093",
        name: "CRY",
        description: "<h3>Direct Project</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Gujarat"
    },
    "92": {
        lat: "21.1591425",
        lng: "72.6822088",
        name: "Samata Charitable Trust (SCT)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Child Participation</span>",
        type: "circle",
        state: "Gujarat"
    },
    "93": {
        lat: "18.802004",
        lng: "74.5304815",
        name: "Bal Hakk Abhiyan ",
        description: "<h3>Alliance</h3><span>Education</span><span>Safety & Participation</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "94": {
        lat: "19.0821978",
        lng: "73.7800985",
        name: "Habitat And Livelihood Welfare Association (HALWA)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Participation</span><span>Child Participation</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "95": {
        lat: "18.4031567",
        lng: "76.531948",
        name: "Kalapandhari Magasvargiya And Adivasi Gramin Vikas Sansthan (KMAGVS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Participation</span><span>Child Participation</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "96": {
        lat: "19.2596008",
        lng: "76.7467969",
        name: "Sankalp Manav Vikas Sansthan (SMVS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Participation</span><span>Child Participation</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "97": {
        lat: "18.4061567",
        lng: "76.551948",
        name: "SPARSHA Charitable Trust",
        description: "<h3>Project Partner</h3><span>Education</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "98": {
        lat: "20.1749707",
        lng: "79.9782545",
        name: "Srishti",
        description: "<h3>Project Partner</h3><span>Education</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "99": {
        lat: "19.1103092",
        lng: "74.6726326",
        name: "Vanchit Vikas Sanstha (VVS)",
        description: "<h3>Project Partner</h3><span>Education</span><span>Safety & Protection</span><span>Health & Nutrition</span>",
        type: "circle",
        state: "Maharashtra"
    },
    "100": {
        lat: "19.1203092",
        lng: "74.6826326",
        name: "Vidhayak Bharti",
        description: "<h3>Project Partner</h3><span>Safety & Protection</span>",
        type: "circle",
        state: "Maharashtra"
    }
};
var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: mapWidth, //'700' or 'responsive'
        background_color: "#d42750",
        background_transparent: "yes",
        border_color: "#bca84d",

        //State defaults
        state_description: "",
        state_color: "#fdd831",
        state_hover_color: "#ffb900",
        state_url: "#/",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "no",

        //Location defaults
        location_description: "Location description",
        location_color: "#d42750",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: "20",
        location_type: "circle",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "yes",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "no",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "",
        manual_zoom: "no"
    },
    state_specific: {
        "1": {
            name: "Andaman and Nicobar"
        },
        "2": {
            name: "Andhra Pradesh",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "3": {
            name: "Arunachal Pradesh"
        },
        "4": {
            name: "Assam",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "5": {
            name: "Bihar",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "6": {
            name: "Chandigarh"
        },
        "7": {
            name: "Chhattisgarh",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "8": {
            name: "Dadra and Nagar Haveli"
        },
        "9": {
            name: "Daman and Diu"
        },
        "10": {
            name: "Delhi",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "11": {
            name: "Goa"
        },
        "12": {
            name: "Gujarat",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "13": {
            name: "Haryana",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "14": {
            name: "Himachal Pradesh"
        },
        "16": {
            name: "Jharkhand",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "17": {
            name: "Karnataka",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "18": {
            name: "Kerala"
        },
        "19": {
            name: "Lakshadweep"
        },
        "20": {
            name: "Madhya Pradesh",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "21": {
            name: "Maharashtra",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "22": {
            name: "Manipur",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "23": {
            name: "Meghalaya"
        },
        "24": {
            name: "Mizoram"
        },
        "25": {
            name: "Nagaland"
        },
        "26": {
            name: "Orissa",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "27": {
            name: "Puducherry"
        },
        "28": {
            name: "Punjab"
        },
        "29": {
            name: "Rajasthan",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "30": {
            name: "Sikkim"
        },
        "31": {
            name: "Tamil Nadu",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "32": {
            name: "Tripura"
        },
        "33": {
            name: "Uttar Pradesh",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "34": {
            name: "Uttaranchal"
        },
        "35": {
            name: "West Bengal",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "36": {
            name: "Jammu and Kashmir",
            color: "#fdd831",
            hover_color: "#ffb900"
        },
        "37": {
            name: "Telangana",
            color: "#fdd831",
            hover_color: "#ffb900"
        }
    },
    locations: mapLocationsArray,
    labels: {},
    regions: {}
};
