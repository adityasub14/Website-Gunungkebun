/* =========================================================
   GUNUNGKEBUN.COM
   JAVASCRIPT UTAMA

   Fokus:
   CEK HARGA JUAL TBS
========================================================= */


/* =========================================================
   1. DATA WILAYAH ADMINISTRATIF — PULAU SUMATRA
   -----------------------------------------------------
   Sumber   : Data resmi wilayah administratif Kemendagri
              (Provinsi > Kabupaten/Kota > Kecamatan)
   Cakupan  : 10 Provinsi, 154 Kabupaten/Kota, 1.935 Kecamatan
              (Aceh, Sumut, Sumbar, Riau, Jambi, Sumsel,
              Bengkulu, Lampung, Babel, Kepri)

   Data ini HANYA berisi nama wilayah untuk mengisi dropdown
   Provinsi / Kabupaten / Kecamatan. Data ini TIDAK berisi
   harga — harga diatur terpisah di bagian "hargaTBS" di bawah,
   supaya tidak ada harga palsu/rekaan untuk wilayah yang
   datanya belum kamu masukkan.
========================================================= */

const wilayahSumatra = {
    "Aceh": {
        "Kabupaten Aceh Barat": [
            "Arongan Lambalek",
            "Bubon",
            "Johan Pahlawan",
            "Kaway XVI",
            "Meureubo",
            "Pantai Ceuremen",
            "Panton Reu",
            "Samatiga",
            "Sungai Mas",
            "Woyla",
            "Woyla Barat",
            "Woyla Timur"
        ],
        "Kabupaten Aceh Barat Daya": [
            "Babah Rot",
            "Blang Pidie",
            "Jeumpa",
            "Kuala Batee",
            "Lembah Sabil",
            "Manggeng",
            "Setia",
            "Susoh",
            "Tangan-tangan"
        ],
        "Kabupaten Aceh Besar": [
            "Baitussalam",
            "Blang Bintang",
            "Darul Imarah",
            "Darul Kamal",
            "Darussalam",
            "Indrapuri",
            "Ingin Jaya",
            "Kota Jantho",
            "Krueng Barona Jaya",
            "Kuta Baro",
            "Kuta Cot Glie",
            "Kuta Malaka",
            "Lembah Seulawah",
            "Leupung",
            "Lhoknga",
            "Lhoong",
            "Mesjid Raya",
            "Montasik",
            "Peukan Bada",
            "Pulo Aceh",
            "Seulimeum",
            "Simpang Tiga",
            "Suka Makmur"
        ],
        "Kabupaten Aceh Jaya": [
            "Darul Hikmah",
            "Indra Jaya",
            "Jaya",
            "Krueng Sabee",
            "Panga",
            "Pasie Raya",
            "Sampoiniet",
            "Setia Bakti",
            "Teunom"
        ],
        "Kabupaten Aceh Selatan": [
            "Bakongan",
            "Bakongan Timur",
            "Kluet Selatan",
            "Kluet Tengah",
            "Kluet Timur",
            "Kluet Utara",
            "Kota Bahagia",
            "Labuhan Haji",
            "Labuhan Haji Barat",
            "Labuhan Haji Timur",
            "Meukek",
            "Pasie Raja",
            "Sama Dua",
            "Sawang",
            "Tapak Tuan",
            "Trumon",
            "Trumon Tengah",
            "Trumon Timur"
        ],
        "Kabupaten Aceh Singkil": [
            "Danau Paris",
            "Gunung Meriah",
            "Kota Baharu",
            "Kuala Baru",
            "Pulau Banyak",
            "Pulau Banyak Barat",
            "Simpang Kanan",
            "Singkil",
            "Singkil Utara",
            "Singkohor",
            "Suro"
        ],
        "Kabupaten Aceh Tamiang": [
            "Banda Mulia",
            "Bandar Pusaka",
            "Bendahara",
            "Karang Baru",
            "Kejuruan Muda",
            "Kota Kuala Simpang",
            "Manyak Payed",
            "Rantau",
            "Sekerak",
            "Seruway",
            "Tamiang Hulu",
            "Tenggulun"
        ],
        "Kabupaten Aceh Tengah": [
            "Atu Lintang",
            "Bebesen",
            "Bies",
            "Bintang",
            "Celala",
            "Jagong Jeget",
            "Kebayakan",
            "Ketol",
            "Kute Panang",
            "Linge",
            "Lut Tawar",
            "Pegasing",
            "Rusip Antara",
            "Silih Nara"
        ],
        "Kabupaten Aceh Tenggara": [
            "Babul Makmur",
            "Babul Rahmah",
            "Babussalam",
            "Badar",
            "Bambel",
            "Bukit Tusam",
            "Darul Hasanah",
            "Deleng Pokhkisen",
            "Ketambe",
            "Lawe Alas",
            "Lawe Bulan",
            "Lawe Sigala-gala",
            "Lawe Sumur",
            "Leuser",
            "Semadam",
            "Tanoh Alas"
        ],
        "Kabupaten Aceh Timur": [
            "Banda Alam",
            "Birem Bayeun",
            "Darul Aman",
            "Darul Falah",
            "Darul Ihsan",
            "Idi Rayeuk",
            "Idi Timur",
            "Idi Tunong",
            "Indra Makmur",
            "Julok",
            "Madat",
            "Nurussalam",
            "Pante Bidari",
            "Peudawa",
            "Peunaron",
            "Peureulak",
            "Peureulak Barat",
            "Peureulak Timur",
            "Rantau Selamat",
            "Ranto Peureulak",
            "Serba Jadi",
            "Simpang Jernih",
            "Simpang Ulim",
            "Sungai Raya"
        ],
        "Kabupaten Aceh Utara": [
            "Baktiya",
            "Baktiya Barat",
            "Banda Baro",
            "Cot Girek",
            "Dewantara",
            "Geureudong Pase",
            "Kuta Makmur",
            "Langkahan",
            "Lapang",
            "Lhoksukon",
            "Matangkuli",
            "Meurah Mulia",
            "Muara Batu",
            "Nibong",
            "Nisam",
            "Nisam Antara",
            "Paya Bakong",
            "Pirak Timu",
            "Samudera",
            "Sawang",
            "Seunuddon",
            "Simpang Keramat",
            "Syamtalira Aron",
            "Syamtalira Bayu",
            "Tanah Jambo Aye",
            "Tanah Luas",
            "Tanah Pasir"
        ],
        "Kabupaten Bener Meriah": [
            "Bandar",
            "Bener Kelipah",
            "Bukit",
            "Gajah Putih",
            "Mesidah",
            "Permata",
            "Pintu Rime Gayo",
            "Syiah Utama",
            "Timang Gajah",
            "Wih Pesam"
        ],
        "Kabupaten Bireuen": [
            "Ganda Pura",
            "Jangka",
            "Jeumpa",
            "Jeunieb",
            "Juli",
            "Kota Juang",
            "Kuala",
            "Kuta Blang",
            "Makmur",
            "Pandrah",
            "Peudada",
            "Peulimbang",
            "Peusangan",
            "Peusangan Selatan",
            "Peusangan Siblah Krueng",
            "Samalanga",
            "Simpang Mamplam"
        ],
        "Kabupaten Gayo Lues": [
            "Blang Jerango",
            "Blang Pegayon",
            "Blangkejeren",
            "Dabun Gelang",
            "Kuta Panjang",
            "Pantan Cuaca",
            "Pining",
            "Putri Betung",
            "Rikit Gaib",
            "Terangun",
            "Tripe Jaya"
        ],
        "Kabupaten Nagan Raya": [
            "Beutong",
            "Beutong Ateuh Banggalang",
            "Darul Makmur",
            "Kuala",
            "Kuala Pesisir",
            "Seunagan",
            "Seunagan Timur",
            "Suka Makmue",
            "Tadu Raya",
            "Tripa Makmur"
        ],
        "Kabupaten Pidie": [
            "Batee",
            "Delima",
            "Geumpang",
            "Glumpang Baro",
            "Glumpang Tiga",
            "Grong Grong",
            "Indrajaya",
            "Kembang Tanjong",
            "Keumala",
            "Kota Sigli",
            "Mane",
            "Mila",
            "Muara Tiga",
            "Mutiara",
            "Mutiara Timur",
            "Padang Tiji",
            "Peukan Baro",
            "Pidie",
            "Sakti",
            "Simpang Tiga",
            "Tangse",
            "Tiro/truseb",
            "Titeue"
        ],
        "Kabupaten Pidie Jaya": [
            "Bandar Baru",
            "Bandar Dua",
            "Jangka Buya",
            "Meurah Dua",
            "Meureudu",
            "Panteraja",
            "Trienggadeng",
            "Ulim"
        ],
        "Kabupaten Simeulue": [
            "Alafan",
            "Salang",
            "Simeulue Barat",
            "Simeulue Cut",
            "Simeulue Tengah",
            "Simeulue Timur",
            "Teluk Dalam",
            "Teupah Barat",
            "Teupah Selatan",
            "Teupah Tengah"
        ],
        "Kota Banda Aceh": [
            "Baiturrahman",
            "Banda Raya",
            "Jaya Baru",
            "Kuta Alam",
            "Kuta Raja",
            "Lueng Bata",
            "Meuraxa",
            "Syiah Kuala",
            "Ulee Kareng"
        ],
        "Kota Langsa": [
            "Langsa Barat",
            "Langsa Baro",
            "Langsa Kota",
            "Langsa Lama",
            "Langsa Timur"
        ],
        "Kota Lhokseumawe": [
            "Banda Sakti",
            "Blang Mangat",
            "Muara Dua",
            "Muara Satu"
        ],
        "Kota Sabang": [
            "Sukajaya",
            "Sukakarya"
        ],
        "Kota Subulussalam": [
            "Longkib",
            "Penanggalan",
            "Rundeng",
            "Simpang Kiri",
            "Sultan Daulat"
        ]
    },
    "Sumatera Utara": {
        "Kabupaten Asahan": [
            "Aek Kuasan",
            "Aek Ledong",
            "Aek Songsongan",
            "Air Batu",
            "Air Joman",
            "Bandar Pasir Mandoge",
            "Bandar Pulau",
            "Buntu Pane",
            "Kisaran Barat",
            "Kisaran Timur",
            "Meranti",
            "Pulau Rakyat",
            "Pulo Bandring",
            "Rahuning",
            "Rawang Panca Arga",
            "Sei Dadap",
            "Sei Kepayang",
            "Sei Kepayang Barat",
            "Sei Kepayang Timur",
            "Setia Janji",
            "Silau Laut",
            "Simpang Empat",
            "Tanjung Balai",
            "Teluk Dalam",
            "Tinggi Raja"
        ],
        "Kabupaten Batu Bara": [
            "Air Putih",
            "Datuk Lima Puluh",
            "Datuk Tanah Datar",
            "Laut Tador",
            "Lima Puluh Pesisir",
            "Limapuluh",
            "Medang Deras",
            "Nibung Hangus",
            "Sei Balai",
            "Sei Suka",
            "Talawi",
            "Tanjung Tiram"
        ],
        "Kabupaten Dairi": [
            "Berampu",
            "Gunung Sitember",
            "Lae Parira",
            "Parbuluan",
            "Pegagan Hilir",
            "Sidikalang",
            "Siempat Nempu",
            "Siempat Nempu Hilir",
            "Siempat Nempu Hulu",
            "Silahisabungan",
            "Silima Pungga-pungga",
            "Sitinjo",
            "Sumbul",
            "Tanah Pinem",
            "Tiga Lingga"
        ],
        "Kabupaten Deli Serdang": [
            "Bangun Purba",
            "Batang Kuis",
            "Beringin",
            "Biru-biru",
            "Deli Tua",
            "Galang",
            "Gunung Meriah",
            "Hamparan Perak",
            "Kutalimbaru",
            "Labuhan Deli",
            "Lubuk Pakam",
            "Namo Rambe",
            "Pagar Merbau",
            "Pancur Batu",
            "Pantai Labu",
            "Patumbak",
            "Percut Sei Tuan",
            "Sibolangit",
            "Sinembah Tanjung Muda Hilir",
            "Sinembah Tanjung Muda Hulu",
            "Sunggal",
            "Tanjung Morawa"
        ],
        "Kabupaten Humbang Hasundutan": [
            "Bakti Raja",
            "Dolok Sanggul",
            "Lintong Nihuta",
            "Onan Ganjang",
            "Pakkat",
            "Paranginan",
            "Parlilitan",
            "Pollung",
            "Sijama Polang",
            "Tara Bintang"
        ],
        "Kabupaten Karo": [
            "Barusjahe",
            "Berastagi",
            "Dolat Rayat",
            "Juhar",
            "Kabanjahe",
            "Kuta Buluh",
            "Laubaleng",
            "Mardingding",
            "Merdeka",
            "Merek",
            "Munte",
            "Naman Teran",
            "Payung",
            "Simpang Empat",
            "Tiga Binanga",
            "Tiganderket",
            "Tigapanah"
        ],
        "Kabupaten Labuhan Batu": [
            "Bilah Barat",
            "Bilah Hilir",
            "Bilah Hulu",
            "Panai Hilir",
            "Panai Hulu",
            "Panai Tengah",
            "Pangkatan",
            "Rantau Selatan",
            "Rantau Utara"
        ],
        "Kabupaten Labuhan Batu Selatan": [
            "Kampung Rakyat",
            "Kota Pinang",
            "Silangkitang",
            "Sungai Kanan",
            "Torgamba"
        ],
        "Kabupaten Labuhan Batu Utara": [
            "Aek Kuo",
            "Aek Natas",
            "Kualuh Hilir",
            "Kualuh Hulu",
            "Kualuh Leidong",
            "Kualuh Selatan",
            "Marbau",
            "Na Ix-x"
        ],
        "Kabupaten Langkat": [
            "Babalan",
            "Batang Serangan",
            "Besitang",
            "Binjai",
            "Bohorok",
            "Brandan Barat",
            "Gebang",
            "Hinai",
            "Kuala",
            "Kutambaru",
            "Padang Tualang",
            "Pangkalan Susu",
            "Pematang Jaya",
            "Salapian",
            "Sawit Seberang",
            "Secanggang",
            "Sei Bingai",
            "Sei Lepan",
            "Selesai",
            "Sirapit",
            "Stabat",
            "Tanjung Pura",
            "Wampu"
        ],
        "Kabupaten Mandailing Natal": [
            "Batahan",
            "Batang Natal",
            "Bukit Malintang",
            "Huta Bargot",
            "Kotanopan",
            "Lembah Sorik Marapi",
            "Lingga Bayu",
            "Muara Batang Gadis",
            "Muara Sipongi",
            "Naga Juang",
            "Natal",
            "Pakantan",
            "Panyabungan",
            "Panyabungan Barat",
            "Panyabungan Selatan",
            "Panyabungan Timur",
            "Panyabungan Utara",
            "Puncak Sorik Marapi",
            "Ranto Baek",
            "Siabu",
            "Sinunukan",
            "Tambangan",
            "Ulu Pungkut"
        ],
        "Kabupaten Nias": [
            "Bawolato",
            "Botomuzoi",
            "Gido",
            "Hili Serangkai",
            "Hiliduho",
            "Idano Gawo",
            "Ma U",
            "Sogaeadu",
            "Somolo - Molo",
            "Ulugawo"
        ],
        "Kabupaten Nias Barat": [
            "Lahomi",
            "Lolofitu Moi",
            "Mandrehe",
            "Mandrehe Barat",
            "Mandrehe Utara",
            "Moro O",
            "Sirombu",
            "Ulu Moro O"
        ],
        "Kabupaten Nias Selatan": [
            "Amandraya",
            "Aramo",
            "Boronadu",
            "Fanayama",
            "Gomo",
            "Hibala",
            "Hilimegai",
            "Hilisalawaahe",
            "Huruna",
            "Idanotae",
            "Lahusa",
            "Lolomatua",
            "Lolowa'u",
            "Luahagundre Maniamolo",
            "Maniamolo",
            "Mazino",
            "Mazo",
            "Onohazumba",
            "Onolalu",
            "Oou",
            "Pulau-pulau Batu",
            "Pulau-pulau Batu Barat",
            "Pulau-pulau Batu Timur",
            "Pulau-pulau Batu Utara",
            "Siduaori",
            "Simuk",
            "Somambawa",
            "Susua",
            "Tanah Masa",
            "Teluk Dalam",
            "Toma",
            "Uluidanotae",
            "Ulunoyo",
            "Ulususua",
            "Umbunasi"
        ],
        "Kabupaten Nias Utara": [
            "Afulu",
            "Alasa",
            "Alasa Talu Muzoi",
            "Lahewa",
            "Lahewa Timur",
            "Lotu",
            "Namohalu Esiwa",
            "Sawo",
            "Sitolu Ori",
            "Tugala Oyo",
            "Tuhemberua"
        ],
        "Kabupaten Padang Lawas": [
            "Aek Nabara Barumun",
            "Barumun",
            "Barumun Selatan",
            "Barumun Tengah",
            "Batang Lubu Sutam",
            "Huristak",
            "Huta Raja Tinggi",
            "Lubuk Barumun",
            "Sihapas Barumun",
            "Sosa",
            "Sosopan",
            "Ulu Barumun"
        ],
        "Kabupaten Padang Lawas Utara": [
            "Batang Onang",
            "Dolok",
            "Dolok Sigompulon",
            "Halongonan",
            "Halongonan Timur",
            "Hulu Sihapas",
            "Padang Bolak",
            "Padang Bolak Julu",
            "Padang Bolak Tenggara",
            "Portibi",
            "Simangambat",
            "Ujung Batu"
        ],
        "Kabupaten Pakpak Bharat": [
            "Kerajaan",
            "Pagindar",
            "Pergetteng-getteng Sengkut",
            "Salak",
            "Siempat Rube",
            "Sitellu Tali Urang Jehe",
            "Sitellu Tali Urang Julu",
            "Tinada"
        ],
        "Kabupaten Samosir": [
            "Harian",
            "Nainggolan",
            "Onan Runggu",
            "Palipi",
            "Pangururan",
            "Ronggur Nihuta",
            "Sianjur Mula Mula",
            "Simanindo",
            "Sitio-tio"
        ],
        "Kabupaten Serdang Bedagai": [
            "Bandar Khalipah",
            "Bintang Bayu",
            "Dolok Masihul",
            "Dolok Merawan",
            "Kotarih",
            "Pantai Cermin",
            "Pegajahan",
            "Perbaungan",
            "Sei Bamban",
            "Sei Rampah",
            "Serbajadi",
            "Silinda",
            "Sipispis",
            "Tanjung Beringin",
            "Tebing Syahbandar",
            "Tebingtinggi",
            "Teluk Mengkudu"
        ],
        "Kabupaten Simalungun": [
            "Bandar",
            "Bandar Huluan",
            "Bandar Masilam",
            "Bosar Maligas",
            "Dolog Masagal",
            "Dolok Batu Nanggar",
            "Dolok Panribuan",
            "Dolok Silau",
            "Girsang Sipangan Bolon",
            "Gunung Malela",
            "Gunung Maligas",
            "Haranggaol Horison",
            "Hatonduhan",
            "Hutabayu Raja",
            "Jawa Maraja Bah Jambi",
            "Jorlang Hataran",
            "Panei",
            "Panombean Panei",
            "Pematang Bandar",
            "Pematang Sidamanik",
            "Pematang Silimahuta",
            "Purba",
            "Raya",
            "Raya Kahean",
            "Siantar",
            "Sidamanik",
            "Silau Kahean",
            "Silimakuta",
            "Tanah Jawa",
            "Tapian Dolok",
            "Ujung Padang"
        ],
        "Kabupaten Tapanuli Selatan": [
            "Aek Bilah",
            "Angkola Barat",
            "Angkola Sangkunur",
            "Angkola Selatan",
            "Angkola Timur",
            "Arse",
            "Batang Angkola",
            "Batang Toru",
            "Marancar",
            "Muara Batang Toru",
            "Saipar Dolok Hole",
            "Sayur Matinggi",
            "Sipirok",
            "Tano Tombangan Angkola"
        ],
        "Kabupaten Tapanuli Tengah": [
            "Andam Dewi",
            "Badiri",
            "Barus",
            "Barus Utara",
            "Kolang",
            "Lumut",
            "Manduamas",
            "Pandan",
            "Pasaribu Tobing",
            "Pinang Sori",
            "Sarudik",
            "Sibabangun",
            "Sirandorung",
            "Sitahuis",
            "Sorkam",
            "Sorkam Barat",
            "Sosor Gadong",
            "Sukabangun",
            "Tapian Nauli",
            "Tukka"
        ],
        "Kabupaten Tapanuli Utara": [
            "Adiankoting",
            "Garoga",
            "Muara",
            "Pagaran",
            "Pahae Jae",
            "Pahae Julu",
            "Pangaribuan",
            "Parmonangan",
            "Purbatua",
            "Siatas Barita",
            "Siborongborong",
            "Simangumban",
            "Sipahutar",
            "Sipoholon",
            "Tarutung"
        ],
        "Kabupaten Toba Samosir": [
            "Ajibata",
            "Balige",
            "Bonatua Lunasi",
            "Borbor",
            "Habinsaran",
            "Laguboti",
            "Lumban Julu",
            "Nassau",
            "Parmaksian",
            "Pintu Pohan Meranti",
            "Porsea",
            "Siantar Narumonda",
            "Sigumpar",
            "Silaen",
            "Tampahan",
            "Uluan"
        ],
        "Kota Binjai": [
            "Binjai Barat",
            "Binjai Kota",
            "Binjai Selatan",
            "Binjai Timur",
            "Binjai Utara"
        ],
        "Kota Gunungsitoli": [
            "Gunung Sitoli",
            "Gunungsitoli Alo Oa",
            "Gunungsitoli Barat",
            "Gunungsitoli Idanoi",
            "Gunungsitoli Selatan",
            "Gunungsitoli Utara"
        ],
        "Kota Medan": [
            "Medan Amplas",
            "Medan Area",
            "Medan Barat",
            "Medan Baru",
            "Medan Belawan",
            "Medan Deli",
            "Medan Denai",
            "Medan Helvetia",
            "Medan Johor",
            "Medan Kota",
            "Medan Labuhan",
            "Medan Maimun",
            "Medan Marelan",
            "Medan Perjuangan",
            "Medan Petisah",
            "Medan Polonia",
            "Medan Selayang",
            "Medan Sunggal",
            "Medan Tembung",
            "Medan Timur",
            "Medan Tuntungan"
        ],
        "Kota Padangsidimpuan": [
            "Padangsidimpuan Angkola Julu",
            "Padangsidimpuan Batunadua",
            "Padangsidimpuan Hutaimbaru",
            "Padangsidimpuan Selatan",
            "Padangsidimpuan Tenggara",
            "Padangsidimpuan Utara"
        ],
        "Kota Pematang Siantar": [
            "Siantar Barat",
            "Siantar Marihat",
            "Siantar Marimbun",
            "Siantar Martoba",
            "Siantar Selatan",
            "Siantar Sitalasari",
            "Siantar Timur",
            "Siantar Utara"
        ],
        "Kota Sibolga": [
            "Sibolga Kota",
            "Sibolga Sambas",
            "Sibolga Selatan",
            "Sibolga Utara"
        ],
        "Kota Tanjung Balai": [
            "Datuk Bandar",
            "Datuk Bandar Timur",
            "Sei Tualang Raso",
            "Tanjung Balai Selatan",
            "Tanjung Balai Utara",
            "Teluk Nibung"
        ],
        "Kota Tebing Tinggi": [
            "Bajenis",
            "Padang Hilir",
            "Padang Hulu",
            "Rambutan",
            "Tebing Tinggi Kota"
        ]
    },
    "Sumatera Barat": {
        "Kabupaten Agam": [
            "Ampek Angkek",
            "Ampek Nagari",
            "Banuhampu",
            "Baso",
            "Canduang",
            "IV Koto",
            "Kamang Magek",
            "Lubuk Basung",
            "Malalak",
            "Matur",
            "Palembayan",
            "Palupuh",
            "Sungai Pua",
            "Tanjung Mutiara",
            "Tanjung Raya",
            "Tilatang Kamang"
        ],
        "Kabupaten Dharmasraya": [
            "Asam Jujuhan",
            "IX Koto",
            "Koto Baru",
            "Koto Besar",
            "Koto Salak",
            "Padang Laweh",
            "Pulau Punjung",
            "Sitiung",
            "Sungai Rumbai",
            "Timpeh",
            "Tiumang"
        ],
        "Kabupaten Kepulauan Mentawai": [
            "Pagai Selatan",
            "Pagai Utara",
            "Seberut Barat Daya",
            "Siberut Barat",
            "Siberut Selatan",
            "Siberut Tengah",
            "Siberut Utara",
            "Sikakap",
            "Sipora Selatan",
            "Sipora Utara"
        ],
        "Kabupaten Lima Puluh Kota": [
            "Akabiluru",
            "Bukik Barisan",
            "Guguak",
            "Gunuang Omeh",
            "Harau",
            "Kapur IX",
            "Lareh Sago Halaban",
            "Luak",
            "Mungka",
            "Pangkalan Koto Baru",
            "Payakumbuh",
            "Situjuah Limo Nagari",
            "Suliki"
        ],
        "Kabupaten Padang Pariaman": [
            "2 X 11 Enam Lingkung",
            "2 X 11 Kayu Tanam",
            "Batang Anai",
            "Batang Gasan",
            "Enam Lingkung",
            "IV Koto Aur Malintang",
            "Lubuk Alung",
            "Nan Sabaris",
            "Padang Sago",
            "Patamuan",
            "Sintuk Toboh Gadang",
            "Sungai Geringging",
            "Sungai Limau",
            "Ulakan Tapakis",
            "V Koto Kp Dalam",
            "V Koto Timur",
            "VII Koto Sungai Sariak"
        ],
        "Kabupaten Pasaman": [
            "Bonjol",
            "Dua Koto",
            "Lubuk Sikaping",
            "Mapat Tunggul",
            "Mapat Tunggul Selatan",
            "Padang Gelugur",
            "Panti",
            "Rao",
            "Rao Selatan",
            "Rao Utara",
            "Simpang Alahan Mati",
            "Tigo Nagari"
        ],
        "Kabupaten Pasaman Barat": [
            "Gunung Tuleh",
            "Kinali",
            "Koto Balingka",
            "Lembah Malintang",
            "Luhak Nan Duo",
            "Pasaman",
            "Ranah Batahan",
            "Sasak Ranah Pasisie",
            "Sungai Aur",
            "Sungai Beremas",
            "Talamau"
        ],
        "Kabupaten Pesisir Selatan": [
            "Airpura",
            "Basa Ampek Balai Tapan",
            "Batang Kapas",
            "Bayang",
            "IV Nagari Bayang Utara",
            "IV Jurai",
            "Koto XI Tarusan",
            "Lengayang",
            "Linggo Sari Baganti",
            "Lunang",
            "Pancung Soal",
            "Ranah Ampek Hulu Tapan",
            "Ranah Pesisir",
            "Silaut",
            "Sutera"
        ],
        "Kabupaten Sijunjung": [
            "IV Nagari",
            "Kamang Baru",
            "Koto Tujuh",
            "Kupitan",
            "Lubuk Tarok",
            "Sijunjung",
            "Sumpur Kudus",
            "Tanjung Gadang"
        ],
        "Kabupaten Solok": [
            "Bukit Sundi",
            "Danau Kembar",
            "Gunung Talang",
            "Hiliran Gumanti",
            "IX Koto Sungai Lasi",
            "Junjung Sirih",
            "Kubung",
            "Lembah Gumanti",
            "Lembang Jaya",
            "Pantai Cermin",
            "Payung Sekaki",
            "Tigo Lurah",
            "X Koto Diatas",
            "X Koto Singkarak"
        ],
        "Kabupaten Solok Selatan": [
            "Koto Parik Gadang Diateh",
            "Pauah Duo",
            "Sangir",
            "Sangir Balai Janggo",
            "Sangir Batang Hari",
            "Sangir Jujuan",
            "Sungai Pagu"
        ],
        "Kabupaten Tanah Datar": [
            "Batipuh",
            "Batipuh Selatan",
            "Lima Kaum",
            "Lintau Buo",
            "Lintau Buo Utara",
            "Padang Ganting",
            "Pariangan",
            "Rambatan",
            "Salimpaung",
            "Sepuluh Koto",
            "Sungai Tarab",
            "Sungayang",
            "Tanjung Baru",
            "Tanjung Emas"
        ],
        "Kota Bukittinggi": [
            "Aur Birugo Tigo Baleh",
            "Guguk Panjang",
            "Mandiangin Koto Selayan"
        ],
        "Kota Padang": [
            "Bungus Teluk Kabung",
            "Koto Tangah",
            "Kuranji",
            "Lubuk Begalung",
            "Lubuk Kilangan",
            "Nanggalo",
            "Padang Barat",
            "Padang Selatan",
            "Padang Timur",
            "Padang Utara",
            "Pauh"
        ],
        "Kota Padang Panjang": [
            "Padang Panjang Barat",
            "Padang Panjang Timur"
        ],
        "Kota Pariaman": [
            "Pariaman Selatan",
            "Pariaman Tengah",
            "Pariaman Timur",
            "Pariaman Utara"
        ],
        "Kota Payakumbuh": [
            "Lamposi Tigo Nagori",
            "Payakumbuh Barat",
            "Payakumbuh Selatan",
            "Payakumbuh Timur",
            "Payakumbuh Utara"
        ],
        "Kota Sawah Lunto": [
            "Barangin",
            "Lembah Segar",
            "Silungkang",
            "Talawi"
        ],
        "Kota Solok": [
            "Lubuk Sikarah",
            "Tanjung Harapan"
        ]
    },
    "Riau": {
        "Kabupaten Bengkalis": [
            "Bandar Laksamana",
            "Bantan",
            "Bathin Solapan",
            "Bengkalis",
            "Bukit Batu",
            "Mandau",
            "Pinggir",
            "Rupat",
            "Rupat Utara",
            "Siak Kecil",
            "Talang Muandau"
        ],
        "Kabupaten Indragiri Hilir": [
            "Batang Tuaka",
            "Concong",
            "Enok",
            "Gaung",
            "Gaung Anak Serka",
            "Kateman",
            "Kempas",
            "Kemuning",
            "Keritang",
            "Kuala Indragiri",
            "Mandah",
            "Pelangiran",
            "Pulau Burung",
            "Reteh",
            "Sungai Batang",
            "Tanah Merah",
            "Teluk Belengkong",
            "Tembilahan",
            "Tembilahan Hulu",
            "Tempuling"
        ],
        "Kabupaten Indragiri Hulu": [
            "Batang Cenaku",
            "Batang Gansal",
            "Batang Peranap",
            "Kelayang",
            "Kuala Cenaku",
            "Lirik",
            "Lubuk Batu Jaya",
            "Pasir Penyu",
            "Peranap",
            "Rakit Kulim",
            "Rengat",
            "Rengat Barat",
            "Seberida",
            "Sungai Lala"
        ],
        "Kabupaten Kampar": [
            "Bangkinang",
            "Bangkinang Kota",
            "Gunung Sahilan",
            "Kampa",
            "Kampar",
            "Kampar Kiri",
            "Kampar Kiri Hilir",
            "Kampar Kiri Hulu",
            "Kampar Kiri Tengah",
            "Kampar Utara",
            "Koto Kampar Hulu",
            "Kuok",
            "Perhentian Raja",
            "Rumbio Jaya",
            "Salo",
            "Siak Hulu",
            "Tambang",
            "Tapung",
            "Tapung Hilir",
            "Tapung Hulu",
            "XIII Koto Kampar"
        ],
        "Kabupaten Kepulauan Meranti": [
            "Merbau",
            "Pulau Merbau",
            "Rangsang",
            "Rangsang Barat",
            "Rangsang Pesisir",
            "Tasik Putri Puyu",
            "Tebing Tinggi",
            "Tebing Tinggi Barat",
            "Tebing Tinggi Timur"
        ],
        "Kabupaten Kuantan Singingi": [
            "Benai",
            "Cerenti",
            "Gunung Toar",
            "Hulu Kuantan",
            "Inuman",
            "Kuantan Hilir",
            "Kuantan Hilir Seberang",
            "Kuantan Mudik",
            "Kuantan Tengah",
            "Logas Tanah Darat",
            "Pangean",
            "Pucuk Rantau",
            "Sentajo Raya",
            "Singingi",
            "Singingi Hilir"
        ],
        "Kabupaten Pelalawan": [
            "Bandar Petalangan",
            "Bandar Seikijang",
            "Bunut",
            "Kerumutan",
            "Kuala Kampar",
            "Langgam",
            "Pangkalan Kerinci",
            "Pangkalan Kuras",
            "Pangkalan Lesung",
            "Pelalawan",
            "Teluk Meranti",
            "Ukui"
        ],
        "Kabupaten Rokan Hilir": [
            "Bagan Sinembah",
            "Bagan Sinembah Raya",
            "Balai Jaya",
            "Bangko",
            "Bangko Pusako",
            "Batu Hampar",
            "Kubu",
            "Kubu Babussalam",
            "Pasir Limau Kapas",
            "Pekaitan",
            "Pujud",
            "Rantau Kopar",
            "Rimba Melintang",
            "Simpang Kanan",
            "Sinaboi",
            "Tanah Putih",
            "Tanah Putih Tanjung Melawan",
            "Tanjung Medan"
        ],
        "Kabupaten Rokan Hulu": [
            "Bangun Purba",
            "Bonai Darussalam",
            "Kabun",
            "Kepenuhan",
            "Kepenuhan Hulu",
            "Kunto Darussalam",
            "Pagaran Tapah Darussalam",
            "Pendalian IV Koto",
            "Rambah",
            "Rambah Hilir",
            "Rambah Samo",
            "Rokan IV Koto",
            "Tambusai",
            "Tambusai Utara",
            "Tandun",
            "Ujung Batu"
        ],
        "Kabupaten Siak": [
            "Bunga Raya",
            "Dayun",
            "Kandis",
            "Kerinci Kanan",
            "Koto Gasib",
            "Lubuk Dalam",
            "Mempura",
            "Minas",
            "Pusako",
            "Sabak Auh",
            "Siak",
            "Sungai Apit",
            "Sungai Mandau",
            "Tualang"
        ],
        "Kota Dumai": [
            "Bukit Kapur",
            "Dumai Barat",
            "Dumai Kota",
            "Dumai Selatan",
            "Dumai Timur",
            "Medang Kampai",
            "Sungai Sembilan"
        ],
        "Kota Pekanbaru": [
            "Bukit Raya",
            "Limapuluh",
            "Marpoyan Damai",
            "Payung Sekaki",
            "Pekanbaru Kota",
            "Rumbai",
            "Rumbai Pesisir",
            "Sail",
            "Senapelan",
            "Sukajadi",
            "Tampan",
            "Tenayan Raya"
        ]
    },
    "Jambi": {
        "Kabupaten Batang Hari": [
            "Bajubang",
            "Batin XXIV",
            "Maro Sebo Ilir",
            "Maro Sebo Ulu",
            "Mersam",
            "Muara Bulian",
            "Muara Tembesi",
            "Pemayung"
        ],
        "Kabupaten Bungo": [
            "Bathin II Babeko",
            "Bathin II Pelayang",
            "Bathin III",
            "Bathin III Ulu",
            "Bungo Dani",
            "Jujuhan",
            "Jujuhan Ilir",
            "Limbur Lubuk Mengkuang",
            "Muko-muko Bathin VII",
            "Pasar Muara Bungo",
            "Pelepat",
            "Pelepat Ilir",
            "Rantau Pandan",
            "Rimbo Tengah",
            "Tanah Sepenggal",
            "Tanah Sepenggal Lintas",
            "Tanah Tumbuh"
        ],
        "Kabupaten Kerinci": [
            "Air Hangat",
            "Air Hangat Barat",
            "Air Hangat Timur",
            "Batang Merangin",
            "Bukit Kerman",
            "Danau Kerinci",
            "Depati VII",
            "Gunung Kerinci",
            "Gunung Raya",
            "Gunung Tujuh",
            "Kayu Aro",
            "Kayu Aro Barat",
            "Keliling Danau",
            "Sitinjau Laut",
            "Siulak",
            "Siulak Mukai"
        ],
        "Kabupaten Merangin": [
            "Bangko",
            "Bangko Barat",
            "Batang Masumai",
            "Jangkat",
            "Lembah Masurai",
            "Margo Tabir",
            "Muara Siau",
            "Nalo Tantan",
            "Pamenang",
            "Pamenang Barat",
            "Pamenang Selatan",
            "Pangkalan Jambu",
            "Renah Pamenang",
            "Renah Pembarap",
            "Sungai Manau",
            "Sungai Tenang",
            "Tabir",
            "Tabir Barat",
            "Tabir Ilir",
            "Tabir Lintas",
            "Tabir Selatan",
            "Tabir Timur",
            "Tabir Ulu",
            "Tiang Pumpung"
        ],
        "Kabupaten Muaro Jambi": [
            "Bahar Selatan",
            "Bahar Utara",
            "Jambi Luar Kota",
            "Kumpeh",
            "Kumpeh Ulu",
            "Maro Sebo",
            "Mestong",
            "Sekernan",
            "Sungai Bahar",
            "Sungai Gelam",
            "Taman Rajo"
        ],
        "Kabupaten Sarolangun": [
            "Air Hitam",
            "Batang Asai",
            "Bathin VIII",
            "Cermin Nan Gedang",
            "Limun",
            "Mandiangin",
            "Pauh",
            "Pelawan",
            "Sarolangun",
            "Singkut"
        ],
        "Kabupaten Tanjung Jabung Barat": [
            "Batang Asam",
            "Betara",
            "Bram Itam",
            "Kuala Betara",
            "Merlung",
            "Muara Papalik",
            "Pengabuan",
            "Renah Mendaluh",
            "Seberang Kota",
            "Senyerang",
            "Tebing Tinggi",
            "Tungkal Ilir",
            "Tungkal Ulu"
        ],
        "Kabupaten Tanjung Jabung Timur": [
            "Berbak",
            "Dendang",
            "Geragai",
            "Kuala Jambi",
            "Mendahara",
            "Mendahara Ulu",
            "Muara Sabak Barat",
            "Muara Sabak Timur",
            "Nipah Panjang",
            "Rantau Rasau",
            "Sadu"
        ],
        "Kabupaten Tebo": [
            "Muara Tabir",
            "Rimbo Bujang",
            "Rimbo Ilir",
            "Rimbo Ulu",
            "Serai Serumpun",
            "Sumay",
            "Tebo Ilir",
            "Tebo Tengah",
            "Tebo Ulu",
            "Tengah Ilir",
            "VII Koto",
            "VII Koto Ilir"
        ],
        "Kota Jambi": [
            "Alam Barajo",
            "Danau Sipin",
            "Danau Teluk",
            "Jambi Selatan",
            "Jambi Timur",
            "Jelutung",
            "Kota Baru",
            "Paal Merah",
            "Pasar Jambi",
            "Pelayangan",
            "Telanaipura"
        ],
        "Kota Sungai Penuh": [
            "Hamparan Rawang",
            "Koto Baru",
            "Kumun Debai",
            "Pesisir Bukit",
            "Pondok Tinggi",
            "Sungai Bungkal",
            "Sungai Penuh",
            "Tanah Kampung"
        ]
    },
    "Sumatera Selatan": {
        "Kabupaten Banyu Asin": [
            "Air Kumbang",
            "Air Saleh",
            "Banyuasin I",
            "Banyuasin II",
            "Banyuasin III",
            "Betung",
            "Makarti Jaya",
            "Muara Padang",
            "Muara Sugihan",
            "Muara Telang",
            "Pulau Rimau",
            "Rambutan",
            "Rantau Bayur",
            "Sembawa",
            "Suak Tapeh",
            "Sumber Marga Telang",
            "Talang Kelapa",
            "Tanjung Lago",
            "Tungkal Ilir"
        ],
        "Kabupaten Empat Lawang": [
            "Lintang Kanan",
            "Muara Pinang",
            "Pasemah Air Keruh",
            "Pendopo",
            "Pendopo Barat",
            "Saling",
            "Sikap Dalam",
            "Talang Padang",
            "Tebing Tinggi",
            "Ulu Musi"
        ],
        "Kabupaten Lahat": [
            "Gumay Talang",
            "Gumay Ulu",
            "Jarai",
            "Kikim Barat",
            "Kikim Selatan",
            "Kikim Tengah",
            "Kikim Timur",
            "Kota Agung",
            "Lahat",
            "Lahat Selatan",
            "Merapi Barat",
            "Merapi Selatan",
            "Merapi Timur",
            "Muara Payang",
            "Mulak Sebingkai",
            "Mulak Ulu",
            "Pagar Gunung",
            "Pajar Bulan",
            "Pseksu",
            "Pulau Pinang",
            "Sukamerindu",
            "Tanjung Sakti Pumi",
            "Tanjung Sakti Pumu",
            "Tanjung Tebat"
        ],
        "Kabupaten Muara Enim": [
            "Belida Darat",
            "Belimbing",
            "Benakat",
            "Gelumbang",
            "Gunung Megang",
            "Kelekar",
            "Lawang Kidul",
            "Lembak",
            "Lubai",
            "Lubai Ulu",
            "Muara Belida",
            "Muara Enim",
            "Rambang",
            "Rambang Dangku",
            "Semendo Darat Laut",
            "Semendo Darat Tengah",
            "Semendo Darat Ulu",
            "Sungai Rotan",
            "Tanjung Agung",
            "Ujan Mas"
        ],
        "Kabupaten Musi Banyuasin": [
            "Babat Supat",
            "Babat Toman",
            "Batanghari Leko",
            "Bayung Lencir",
            "Keluang",
            "Lais",
            "Lalan",
            "Lawang Wetan",
            "Plakat Tinggi",
            "Sanga Desa",
            "Sekayu",
            "Sungai Keruh",
            "Sungai Lilin",
            "Tungkal Jaya"
        ],
        "Kabupaten Musi Rawas": [
            "Bulang Tengah Suku Ulu",
            "Jayaloka",
            "Megang Sakti",
            "Muara Beliti",
            "Muara Kelingi",
            "Muara Lakitan",
            "Purwodadi",
            "Selangit",
            "Suka Karya",
            "Suku Tengah Lakitan Ulu",
            "Sumber Harta",
            "Tiang Pumpung Kepungut",
            "Tuah Negeri",
            "Tugumulyo"
        ],
        "Kabupaten Musi Rawas Utara": [
            "Karang Dapo",
            "Karang Jaya",
            "Nibung",
            "Rawas Ilir",
            "Rawas Ulu",
            "Rupit",
            "Ulu Rawas"
        ],
        "Kabupaten Ogan Ilir": [
            "Indralaya",
            "Indralaya Selatan",
            "Indralaya Utara",
            "Kandis",
            "Lubuk Keliat",
            "Muara Kuang",
            "Payaraman",
            "Pemulutan",
            "Pemulutan Barat",
            "Pemulutan Selatan",
            "Rambang Kuang",
            "Rantau Alai",
            "Rantau Panjang",
            "Sungai Pinang",
            "Tanjung Batu",
            "Tanjung Raja"
        ],
        "Kabupaten Ogan Komering Ilir": [
            "Air Sugihan",
            "Cengal",
            "Jejawi",
            "Kota Kayu Agung",
            "Lempuing",
            "Lempuing Jaya",
            "Mesuji",
            "Mesuji Makmur",
            "Mesuji Raya",
            "Pampangan",
            "Pangkalan Lapam",
            "Pedamaran",
            "Pedamaran Timur",
            "Sirah Pulau Padang",
            "Sungai Menang",
            "Tanjung Lubuk",
            "Teluk Gelam",
            "Tulung Selapan"
        ],
        "Kabupaten Ogan Komering Ulu": [
            "Batu Raja Barat",
            "Batu Raja Timur",
            "Kedaton Peninjauan Raya",
            "Lengkiti",
            "Lubuk Batang",
            "Lubuk Raja",
            "Muara Jaya",
            "Pengandonan",
            "Peninjauan",
            "Semidang Aji",
            "Sinar Peninjauan",
            "Sosoh Buay Rayap",
            "Ulu Ogan"
        ],
        "Kabupaten Ogan Komering Ulu Selatan": [
            "Banding Agung",
            "Buana Pemaca",
            "Buay Pemaca",
            "Buay Pematang Ribu Ranau Tengah",
            "Buay Rawan",
            "Buay Runjung",
            "Buay Sandang Aji",
            "Kisam Ilir",
            "Kisam Tinggi",
            "Mekakau Ilir",
            "Muaradua",
            "Muaradua Kisam",
            "Pulau Beringin",
            "Runjung Agung",
            "Simpang",
            "Sindang Danau",
            "Sungai Are",
            "Tiga Dihaji",
            "Warkuk Ranau Selatan"
        ],
        "Kabupaten Ogan Komering Ulu Timur": [
            "Belitang",
            "Belitang II",
            "Belitang III",
            "Belitang Jaya",
            "Belitang Madang Raya",
            "Belitang Mulya",
            "Buay Madang",
            "Buay Madang Timur",
            "Buay Pemuka Bangsa Raja",
            "Buay Pemuka Peliung",
            "Bunga Mayang",
            "Cempaka",
            "Jaya Pura",
            "Madang Suku I",
            "Madang Suku II",
            "Madang Suku III",
            "Martapura",
            "Semendawai Barat",
            "Semendawai Suku III",
            "Semendawai Timur"
        ],
        "Kabupaten Penukal Abab Lematang Ilir": [
            "Abab",
            "Penukal",
            "Penukal Utara",
            "Talang Ubi",
            "Tanah Abang"
        ],
        "Kota Lubuklinggau": [
            "Lubuk Linggau Barat I",
            "Lubuk Linggau Barat II",
            "Lubuk Linggau Selatan I",
            "Lubuk Linggau Selatan II",
            "Lubuk Linggau Timur I",
            "Lubuk Linggau Timur II",
            "Lubuk Linggau Utara I",
            "Lubuk Linggau Utara II"
        ],
        "Kota Pagar Alam": [
            "Dempo Selatan",
            "Dempo Tengah",
            "Dempo Utara",
            "Pagar Alam Selatan",
            "Pagar Alam Utara"
        ],
        "Kota Palembang": [
            "Alang Alang Lebar",
            "Bukit Kecil",
            "Gandus",
            "Ilir Barat I",
            "Ilir Barat II",
            "Ilir Timur I",
            "Ilir Timur II",
            "Ilir Timur III",
            "Jakabaring",
            "Kalidoni",
            "Kemuning",
            "Kertapati",
            "Plaju",
            "Sako",
            "Seberang Ulu I",
            "Seberang Ulu II",
            "Sematang Borang",
            "Sukarami"
        ],
        "Kota Prabumulih": [
            "Cambai",
            "Prabumulih Barat",
            "Prabumulih Selatan",
            "Prabumulih Timur",
            "Prabumulih Utara",
            "Rambang Kapak Tengah"
        ]
    },
    "Bengkulu": {
        "Kabupaten Bengkulu Selatan": [
            "Air Nipis",
            "Bunga Mas",
            "Kedurang",
            "Kedurang Ilir",
            "Kota Manna",
            "Manna",
            "Pasar Manna",
            "Pino",
            "Pinoraya",
            "Seginim",
            "Ulu Manna"
        ],
        "Kabupaten Bengkulu Tengah": [
            "Bang Haji",
            "Karang Tinggi",
            "Merigi Kelindang",
            "Merigi Sakti",
            "Pagar Jati",
            "Pematang Tiga",
            "Pondok Kelapa",
            "Pondok Kubang",
            "Taba Penanjung",
            "Talang Empat"
        ],
        "Kabupaten Bengkulu Utara": [
            "Air Besi",
            "Air Napal",
            "Air Padang",
            "Arga Makmur",
            "Arma Jaya",
            "Batik Nau",
            "Enggano",
            "Giri Mulya",
            "Hulu Palik",
            "Kerkap",
            "Ketahun",
            "Lais",
            "Marga Sakti Sebelat",
            "Napal Putih",
            "Padang Jaya",
            "Pinang Raya",
            "Putri Hijau",
            "Tanjung Agung Palik",
            "Ulok Kupai"
        ],
        "Kabupaten Kaur": [
            "Kaur Selatan",
            "Kaur Tengah",
            "Kaur Utara",
            "Kelam Tengah",
            "Kinal",
            "Luas",
            "Lungkang Kule",
            "Maje",
            "Muara Sahung",
            "Nasal",
            "Padang Guci Hilir",
            "Padang Guci Hulu",
            "Semidang Gumay",
            "Tanjung Kemuning",
            "Tetap"
        ],
        "Kabupaten Kepahiang": [
            "Bermani Ilir",
            "Kaba Wetan",
            "Kepahiang",
            "Merigi",
            "Muara Kemumu",
            "Seberang Musi",
            "Tebat Karai",
            "Ujan Mas"
        ],
        "Kabupaten Lebong": [
            "Amen",
            "Bingin Kuning",
            "Lebong Atas",
            "Lebong Sakti",
            "Lebong Selatan",
            "Lebong Tengah",
            "Lebong Utara",
            "Pelabai",
            "Pinang Belapis",
            "Rimbo Pengadang",
            "Topos",
            "Uram Jaya"
        ],
        "Kabupaten Mukomuko": [
            "Air Dikit",
            "Air Manjunto",
            "Air Rami",
            "Ipuh",
            "Kota Mukomuko",
            "Lubuk Pinang",
            "Malin Deman",
            "Penarik",
            "Pondok Suguh",
            "Selagan Raya",
            "Sungai Rumbai",
            "Teramang Jaya",
            "Teras Terunjam",
            "V Koto",
            "XIV Koto"
        ],
        "Kabupaten Rejang Lebong": [
            "Bermani Ulu",
            "Bermani Ulu Raya",
            "Bindu Riang",
            "Curup",
            "Curup Selatan",
            "Curup Tengah",
            "Curup Timur",
            "Curup Utara",
            "Kota Padang",
            "Padang Ulak Tanding",
            "Selupu Rejang",
            "Sindang Beliti Ilir",
            "Sindang Beliti Ulu",
            "Sindang Dataran",
            "Sindang Kelingi"
        ],
        "Kabupaten Seluma": [
            "Air Periukan",
            "Ilir Talo",
            "Lubuk Sandi",
            "Seluma",
            "Seluma Barat",
            "Seluma Selatan",
            "Seluma Timur",
            "Seluma Utara",
            "Semidang Alas",
            "Semidang Alas Maras",
            "Sukaraja",
            "Talo",
            "Talo Kecil",
            "Ulu Talo"
        ],
        "Kota Bengkulu": [
            "Gading Cempaka",
            "Kampung Melayu",
            "Muara Bangka Hulu",
            "Ratu Agung",
            "Ratu Samban",
            "Selebar",
            "Singaran Pati",
            "Sungai Serut",
            "Teluk Segara"
        ]
    },
    "Lampung": {
        "Kabupaten Lampung Barat": [
            "Air Hitam",
            "Balik Bukit",
            "Bandar Negeri Suoh",
            "Batu Brak",
            "Batu Ketulis",
            "Belalau",
            "Gedung Surian",
            "Kebun Tebu",
            "Lumbok Seminung",
            "Pagar Dewa",
            "Sekincau",
            "Sukau",
            "Sumber Jaya",
            "Suoh",
            "Way Tenong"
        ],
        "Kabupaten Lampung Selatan": [
            "Bakauheni",
            "Candipuro",
            "Jati Agung",
            "Kalianda",
            "Katibung",
            "Ketapang",
            "Merbau Mataram",
            "Natar",
            "Palas",
            "Penengahan",
            "Rajabasa",
            "Sidomulyo",
            "Sragi",
            "Tanjung Bintang",
            "Tanjung Sari",
            "Way Panji",
            "Way Sulan"
        ],
        "Kabupaten Lampung Tengah": [
            "Anak Ratu Aji",
            "Anak Tuha",
            "Bandar Mataram",
            "Bandar Surabaya",
            "Bangunrejo",
            "Bekri",
            "Bumi Nabung",
            "Bumi Ratu Nuban",
            "Gunung Sugih",
            "Kalirejo",
            "Kota Gajah",
            "Padang Ratu",
            "Pubian",
            "Punggur",
            "Putra Rumbia",
            "Rumbia",
            "Selagai Lingga",
            "Sendang Agung",
            "Seputih Agung",
            "Seputih Banyak",
            "Seputih Mataram",
            "Seputih Raman",
            "Seputih Surabaya",
            "Terbanggi Besar",
            "Terusan Nunyai",
            "Trimurjo",
            "Way Pengubuan",
            "Way Seputih"
        ],
        "Kabupaten Lampung Timur": [
            "Bandar Sribawono",
            "Batanghari",
            "Batanghari Nuban",
            "Braja Slebah",
            "Bumi Agung",
            "Gunung Pelindung",
            "Jabung",
            "Labuhan Maringgai",
            "Labuhan Ratu",
            "Marga Sekampung",
            "Margatiga",
            "Mataram Baru",
            "Melinting",
            "Metro Kibang",
            "Pasir Sakti",
            "Pekalongan",
            "Purbolinggo",
            "Raman Utara",
            "Sekampung",
            "Sekampung Udik",
            "Sukadana",
            "Waway Karya",
            "Way Bungur",
            "Way Jepara"
        ],
        "Kabupaten Lampung Utara": [
            "Abung Kunang",
            "Abung Barat",
            "Abung Pekurun",
            "Abung Selatan",
            "Abung Semuli",
            "Abung Surakarta",
            "Abung Tengah",
            "Abung Timur",
            "Abung Tinggi",
            "Blambangan Pagar",
            "Bukit Kemuning",
            "Bunga Mayang",
            "Hulusungkai",
            "Kotabumi",
            "Kotabumi Selatan",
            "Kotabumi Utara",
            "Muara Sungkai",
            "Sungkai Barat",
            "Sungkai Jaya",
            "Sungkai Selatan",
            "Sungkai Tengah",
            "Sungkai Utara",
            "Tanjung Raja"
        ],
        "Kabupaten Mesuji": [
            "Mesuji",
            "Mesuji Timur",
            "Panca Jaya",
            "Rawajitu Utara",
            "Simpang Pematang",
            "Tanjung Raya",
            "Way Serdang"
        ],
        "Kabupaten Pesawaran": [
            "Gedung Tataan",
            "Kedondong",
            "Marga Punduh",
            "Negeri Katon",
            "Padang Cermin",
            "Punduh Pidada",
            "Tegineneng",
            "Teluk Pandan",
            "Way Khilau",
            "Way Lima",
            "Way Ratai"
        ],
        "Kabupaten Pesisir Barat": [
            "Bengkunat",
            "Bengkunat Belimbing",
            "Karya Penggawa",
            "Krui Selatan",
            "Lemong",
            "Ngambur",
            "Pesisir Selatan",
            "Pesisir Tengah",
            "Pesisir Utara",
            "Pulau Pisang",
            "Way Krui"
        ],
        "Kabupaten Pringsewu": [
            "Adi Luwih",
            "Ambarawa",
            "Banyumas",
            "Gading Rejo",
            "Pagelaran",
            "Pagelaran Utara",
            "Pardasuka",
            "Pringsewu",
            "Sukoharjo"
        ],
        "Kabupaten Tanggamus": [
            "Air Naningan",
            "Bandar Negeri Semuong",
            "Bulok",
            "Cukuh Balak",
            "Gisting",
            "Gunung Alip",
            "Kelumbayan",
            "Kelumbayan Barat",
            "Kota Agung",
            "Kota Agung Barat",
            "Kota Agung Timur",
            "Limau",
            "Pematang Sawa",
            "Pugung",
            "Pulau Panggung",
            "Semaka",
            "Sumberejo",
            "Talang Padang",
            "Ulubelu",
            "Wonosobo"
        ],
        "Kabupaten Tulang Bawang Barat": [
            "Batu Putih",
            "Gunung Agung",
            "Gunung Terang",
            "Lambu Kibang",
            "Pagar Dewa",
            "Tulang Bawang Tengah",
            "Tulang Bawang Udik",
            "Tumi Jajar",
            "Way Kenanga"
        ],
        "Kabupaten Tulangbawang": [
            "Banjar Agung",
            "Banjar Baru",
            "Banjar Margo",
            "Dente Teladas",
            "Gedung Aji",
            "Gedung Aji Baru",
            "Gedung Meneng",
            "Menggala",
            "Menggala Timur",
            "Meraksa Aji",
            "Penawar Aji",
            "Penawar Tama",
            "Rawa Pitu",
            "Rawajitu Selatan",
            "Rawajitu Timur"
        ],
        "Kabupaten Way Kanan": [
            "Bahuga",
            "Banjit",
            "Baradatu",
            "Blambangan Umpu",
            "Buay Bahuga",
            "Bumi Agung",
            "Gunung Labuhan",
            "Kasui",
            "Negara Batin",
            "Negeri Agung",
            "Negeri Besar",
            "Pakuan Ratu",
            "Rebang Tangkas",
            "Way Tuba"
        ],
        "Kota Bandar Lampung": [
            "Bumi Waras",
            "Enggal",
            "Kedamaian",
            "Kedaton",
            "Kemiling",
            "Labuhan Ratu",
            "Langkapura",
            "Panjang",
            "Rajabasa",
            "Sukabumi",
            "Sukarame",
            "Tanjung Karang Barat",
            "Tanjung Karang Pusat",
            "Tanjung Karang Timur",
            "Tanjung Senang",
            "Teluk Betung Barat",
            "Teluk Betung Selatan",
            "Teluk Betung Utara",
            "Telukbetung Timur",
            "Way Halim"
        ],
        "Kota Metro": [
            "Metro Barat",
            "Metro Pusat",
            "Metro Selatan",
            "Metro Timur",
            "Metro Utara"
        ]
    },
    "Kepulauan Bangka Belitung": {
        "Kabupaten Bangka": [
            "Bakam",
            "Belinyu",
            "Mendo Barat",
            "Merawang",
            "Pemali",
            "Puding Besar",
            "Riau Silip",
            "Sungai Liat"
        ],
        "Kabupaten Bangka Barat": [
            "Jebus",
            "Kelapa",
            "Mentok",
            "Parittiga",
            "Simpang Teritip",
            "Tempilang"
        ],
        "Kabupaten Bangka Selatan": [
            "Air Gegas",
            "Kepulauan Pongok",
            "Lepar Pongok",
            "Payung",
            "Pulau Besar",
            "Simpang Rimba",
            "Toboali",
            "Tukak Sadai"
        ],
        "Kabupaten Bangka Tengah": [
            "Koba",
            "Lubuk Besar",
            "Namang",
            "Pangkalan Baru",
            "Simpang Katis",
            "Sungai Selan"
        ],
        "Kabupaten Belitung": [
            "Badau",
            "Membalong",
            "Selat Nasik",
            "Sijuk",
            "Tanjung Pandan"
        ],
        "Kabupaten Belitung Timur": [
            "Damar",
            "Dendang",
            "Gantung",
            "Kelapa Kampit",
            "Manggar",
            "Simpang Pesak",
            "Simpang Renggiang"
        ],
        "Kota Pangkal Pinang": [
            "Bukit Intan",
            "Gabek",
            "Gerunggang",
            "Girimaya",
            "Pangkal Balam",
            "Rangkui",
            "Taman Sari"
        ]
    },
    "Kepulauan Riau": {
        "Kabupaten Bintan": [
            "Bintan Pesisir",
            "Bintan Timur",
            "Bintan Utara",
            "Gunung Kijang",
            "Mantang",
            "Seri Kuala Lobam",
            "Tambelan",
            "Teluk Bintan",
            "Teluk Sebong",
            "Toapaya"
        ],
        "Kabupaten Karimun": [
            "Belat",
            "Buru",
            "Durai",
            "Karimun",
            "Kundur",
            "Kundur Barat",
            "Kundur Utara",
            "Meral",
            "Meral Barat",
            "Moro",
            "Tebing",
            "Ungar"
        ],
        "Kabupaten Kepulauan Anambas": [
            "Jemaja",
            "Jemaja Timur",
            "Palmatak",
            "Siantan",
            "Siantan Selatan",
            "Siantan Tengah",
            "Siantan Timur"
        ],
        "Kabupaten Lingga": [
            "Kepulauan Posek",
            "Lingga",
            "Lingga Timur",
            "Lingga Utara",
            "Selayar",
            "Senayang",
            "Singkep",
            "Singkep Barat",
            "Singkep Pesisir",
            "Singkep Selatan"
        ],
        "Kabupaten Natuna": [
            "Bunguran Barat",
            "Bunguran Batubi",
            "Bunguran Selatan",
            "Bunguran Tengah",
            "Bunguran Timur",
            "Bunguran Timur Laut",
            "Bunguran Utara",
            "Midai",
            "Pulau Laut",
            "Pulau Tiga",
            "Pulau Tiga Barat",
            "Serasan",
            "Serasan Timur",
            "Suak Midai",
            "Subi"
        ],
        "Kota Batam": [
            "Batam Kota",
            "Batu Aji",
            "Batu Ampar",
            "Belakang Padang",
            "Bengkong",
            "Bulang",
            "Galang",
            "Lubuk Baja",
            "Nongsa",
            "Sagulung",
            "Sei Beduk",
            "Sekupang"
        ],
        "Kota Tanjung Pinang": [
            "Bukit Bestari",
            "Tanjungpinang Barat",
            "Tanjungpinang Kota",
            "Tanjungpinang Timur"
        ]
    }
};


/* =========================================================
   2. DATA HARGA JUAL TBS (SWADAYA)
   -----------------------------------------------------
   Data harga TIDAK di-hardcode di sini lagi. Data diambil
   otomatis dari Google Sheet lewat Apps Script setiap kali
   halaman dibuka, supaya kamu bisa update harga cukup dengan
   edit Google Sheet — TIDAK PERLU edit kode ini lagi.

   Cara kerja:
   1. Google Sheet berisi kolom:
      Provinsi | Kabupaten | Kecamatan | Harga | Tanggal | Status | Sumber
   2. Google Apps Script (file terpisah "harga-api.gs")
      membaca sheet itu dan mengubahnya jadi JSON.
   3. JS di bawah ini fetch JSON tsb dan mengisinya ke
      variabel "hargaTBS", persis format yang sama seperti
      sebelumnya.

   GANTI URL DI BAWAH dengan URL Web App Apps Script kamu
   sendiri (didapat setelah proses "Deploy > Web app").
========================================================= */

const URL_API_HARGA =
    "https://script.google.com/macros/s/AKfycbyI0klLlUS5T8011LUxx2zg2jNXyanwc6Rdw8ZclSxMbjt9SCk_3sIjd9GUBPyPY0Bt/exec";


/* =========================================================
   LINK GOOGLE FORM — LAPORKAN HARGA
   -----------------------------------------------------
   Ganti dengan link Google Form kamu (klik Send > ikon
   link di form, lalu copy). Dipakai untuk ajakan lapor
   harga, termasuk otomatis muncul saat wilayah yang dicari
   belum ada datanya.
========================================================= */

const URL_FORM_LAPORAN =
    "https://docs.google.com/forms/d/e/1FAIpQLSdaSQlMi4PfVL7P0YOUx0GTjCRuZRtcQkw79fkKj1ogXmw0Lw/viewform?usp=header";


// Diisi otomatis setelah berhasil fetch dari Google Sheet
let hargaTBS = {};

// Status pengambilan data: "memuat" | "siap" | "gagal"
let statusDataHarga = "memuat";


/* =========================================================
   AMBIL DATA HARGA DARI GOOGLE SHEET
========================================================= */

function muatDataHarga() {

    return fetch(URL_API_HARGA)
        .then(
            function (response) {

                if (!response.ok) {

                    throw new Error(
                        "Gagal mengambil data (status " +
                        response.status +
                        ")"
                    );

                }

                return response.json();

            }
        )
        .then(
            function (json) {

                hargaTBS = json;
                statusDataHarga = "siap";

            }
        )
        .catch(
            function (error) {

                console.error(
                    "Gagal memuat data harga TBS:",
                    error
                );

                statusDataHarga = "gagal";

            }
        );

}



/* =========================================================
   FORMAT RUPIAH
========================================================= */

function rupiah(angka) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(angka);

}


/* =========================================================
   FORMAT TANGGAL INDONESIA
   Input : "2026-08-30"  ->  Output: "30 Agustus 2026"
========================================================= */

function formatTanggalIndo(tanggalISO) {

    const tgl = new Date(tanggalISO + "T00:00:00");

    return new Intl.DateTimeFormat(
        "id-ID",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(tgl);

}


/* =========================================================
   HITUNG UMUR DATA (dalam hari)
   Dipakai untuk menandai data yang sudah lama tidak
   diperbarui (dianggap usang jika lebih dari 14 hari)
========================================================= */

const BATAS_HARI_USANG = 14;

function umurDataHari(tanggalISO) {

    const tglData = new Date(tanggalISO + "T00:00:00");
    const sekarang = new Date();

    const selisihMs =
        sekarang.setHours(0, 0, 0, 0) -
        tglData.setHours(0, 0, 0, 0);

    return Math.floor(
        selisihMs / (1000 * 60 * 60 * 24)
    );

}


/* =========================================================
   LABEL STATUS DATA
========================================================= */

function labelStatus(status) {

    if (status === "verifikasi") {

        return {
            teks: "Terverifikasi Lapangan",
            kelas: "status-badge--verifikasi"
        };

    }

    return {
        teks: "Estimasi (acuan provinsi)",
        kelas: "status-badge--estimasi"
    };

}


/* =========================================================
   SEMUA JAVASCRIPT DIJALANKAN
   SETELAH HTML SIAP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           HAMBURGER MENU
           (aktif hanya jika tombolnya ada di HTML,
           lihat catatan saran di bagian akhir chat)
        ================================================= */

        const menuToggle =
            document.getElementById("menuToggle");

        const menuPanel =
            document.getElementById("menuPanel");


        if (menuToggle && menuPanel) {


            /* Buka / tutup menu */

            menuToggle.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const sedangTerbuka =
                        menuPanel.classList.toggle(
                            "active"
                        );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        sedangTerbuka
                            ? "true"
                            : "false"
                    );

                }
            );


            /* Klik item menu */

            const menuItems =
                menuPanel.querySelectorAll(
                    ".menu-item"
                );


            menuItems.forEach(
                function (item) {

                    item.addEventListener(
                        "click",
                        function () {

                            menuPanel.classList.remove(
                                "active"
                            );

                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );


            /* Klik di luar menu */

            document.addEventListener(
                "click",
                function (event) {

                    if (
                        !menuPanel.contains(
                            event.target
                        ) &&
                        !menuToggle.contains(
                            event.target
                        )
                    ) {

                        menuPanel.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );


            /* Tombol ESC */

            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape"
                    ) {

                        menuPanel.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }


        /* =================================================
           CEK HARGA JUAL TBS
        ================================================= */

        const provinsi =
            document.getElementById(
                "provinsi"
            );

        const kabupaten =
            document.getElementById(
                "kabupaten"
            );

        const kecamatan =
            document.getElementById(
                "kecamatan"
            );

        const cekHarga =
            document.getElementById(
                "cekHarga"
            );

        const hasilHarga =
            document.getElementById(
                "hasilHarga"
            );


        /* =================================================
           SET LINK GOOGLE FORM (AJAKAN LAPOR UMUM)
        ================================================= */

        const linkLaporUmum =
            document.getElementById(
                "linkLaporUmum"
            );

        if (linkLaporUmum) {

            linkLaporUmum.href =
                URL_FORM_LAPORAN;

        }


        const linkLaporTentang =
            document.getElementById(
                "linkLaporTentang"
            );

        if (linkLaporTentang) {

            linkLaporTentang.href =
                URL_FORM_LAPORAN;

        }


        if (
            !provinsi ||
            !kabupaten ||
            !kecamatan ||
            !cekHarga ||
            !hasilHarga
        ) {

            return;

        }


        /* =================================================
           MULAI AMBIL DATA HARGA DARI GOOGLE SHEET
           Tombol "Cek Harga" dinonaktifkan dulu sampai data
           selesai dimuat, supaya tidak ada yang klik saat
           hargaTBS masih kosong.
        ================================================= */

        const labelTombolAsli =
            cekHarga.textContent;

        cekHarga.disabled = true;
        cekHarga.textContent = "Memuat data...";

        muatDataHarga().then(
            function () {

                cekHarga.disabled = false;
                cekHarga.textContent = labelTombolAsli;

                if (statusDataHarga === "gagal") {

                    hasilHarga.innerHTML = `

                        <div class="empty-state">

                            <strong>
                                Gagal memuat data harga
                            </strong>

                            <p>
                                Periksa koneksi internet kamu,
                                lalu muat ulang halaman ini.
                            </p>

                        </div>

                    `;

                }

            }
        );


        /* =================================================
           ISI DROPDOWN PROVINSI
           (diambil dari wilayahSumatra, bukan dari hargaTBS,
           supaya semua provinsi Sumatra tetap muncul walau
           belum ada data harganya)
        ================================================= */

        Object.keys(wilayahSumatra)
            .forEach(
                function (namaProvinsi) {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        namaProvinsi;

                    option.textContent =
                        namaProvinsi;

                    provinsi.appendChild(
                        option
                    );

                }
            );


        /* =================================================
           PROVINSI BERUBAH
        ================================================= */

        provinsi.addEventListener(
            "change",
            function () {

                const namaProvinsi =
                    this.value;


                kabupaten.innerHTML =
                    '<option value="">Pilih kabupaten</option>';

                kecamatan.innerHTML =
                    '<option value="">Pilih kecamatan</option>';


                kabupaten.disabled =
                    true;

                kecamatan.disabled =
                    true;


                if (!namaProvinsi) {

                    return;

                }


                const daftarKabupaten =
                    wilayahSumatra[
                        namaProvinsi
                    ];


                Object.keys(
                    daftarKabupaten
                ).forEach(
                    function (namaKabupaten) {

                        const option =
                            document.createElement(
                                "option"
                            );

                        option.value =
                            namaKabupaten;

                        option.textContent =
                            namaKabupaten;

                        kabupaten.appendChild(
                            option
                        );

                    }
                );


                kabupaten.disabled =
                    false;

            }
        );


        /* =================================================
           KABUPATEN BERUBAH
           (daftar kecamatan sekarang berupa array,
           diambil dari wilayahSumatra)
        ================================================= */

        kabupaten.addEventListener(
            "change",
            function () {

                const namaProvinsi =
                    provinsi.value;

                const namaKabupaten =
                    this.value;


                kecamatan.innerHTML =
                    '<option value="">Pilih kecamatan</option>';

                kecamatan.disabled =
                    true;


                if (
                    !namaProvinsi ||
                    !namaKabupaten
                ) {

                    return;

                }


                const daftarKecamatan =
                    wilayahSumatra[
                        namaProvinsi
                    ][
                        namaKabupaten
                    ];


                daftarKecamatan.forEach(
                    function (namaKecamatan) {

                        const option =
                            document.createElement(
                                "option"
                            );

                        option.value =
                            namaKecamatan;

                        option.textContent =
                            namaKecamatan;

                        kecamatan.appendChild(
                            option
                        );

                    }
                );


                kecamatan.disabled =
                    false;

            }
        );


        /* =================================================
           TOMBOL CEK HARGA
        ================================================= */

        cekHarga.addEventListener(
            "click",
            function () {


                if (statusDataHarga !== "siap") {

                    alert(
                        "Data harga belum selesai dimuat, coba lagi sebentar."
                    );

                    return;

                }


                const namaProvinsi =
                    provinsi.value;

                const namaKabupaten =
                    kabupaten.value;

                const namaKecamatan =
                    kecamatan.value;


                /* Validasi */

                if (
                    !namaProvinsi ||
                    !namaKabupaten ||
                    !namaKecamatan
                ) {

                    alert(
                        "Silakan pilih provinsi, kabupaten/kota, dan kecamatan."
                    );

                    return;

                }


                /* Ambil data harga (bisa jadi belum ada) */

                const data =
                    hargaTBS[namaProvinsi]
                        &&
                    hargaTBS[namaProvinsi][namaKabupaten]
                        &&
                    hargaTBS[namaProvinsi][namaKabupaten][namaKecamatan];


                if (!data) {

                    hasilHarga.innerHTML = `

                        <div class="empty-state">

                            <strong>
                                Data harga jual TBS untuk
                                ${namaKecamatan}, ${namaKabupaten}
                                belum tersedia
                            </strong>

                            <p>
                                Wilayah ini sudah terdaftar,
                                tapi belum ada laporan harga
                                yang masuk.
                            </p>

                            <a
                                href="${URL_FORM_LAPORAN}"
                                target="_blank"
                                rel="noopener"
                                class="lapor-link"
                            >
                                Tahu Update harga TBS di ${namaKecamatan}? Laporkan di sini
                            </a>

                        </div>

                    `;

                    return;

                }


                /* =================================================
                   SIAPKAN INFO STATUS & UMUR DATA
                ================================================= */

                const status =
                    labelStatus(data.status);

                const umurHari =
                    umurDataHari(data.tanggal);

                const dataUsang =
                    umurHari > BATAS_HARI_USANG;


                /* =================================================
                   TAMPILKAN HASIL
                ================================================= */

                hasilHarga.innerHTML = `

                    <div class="price-result-box">

                        <div class="price-result-main">

                            <div class="price-result-label">
                                Harga Jual TBS (Swadaya)
                            </div>


                            <div class="price-result-number">
                                ${rupiah(data.harga)}
                            </div>


                            <div class="price-result-unit">
                                /Kg
                            </div>


                            <span class="status-badge ${status.kelas}">
                                ${status.teks}
                            </span>


                            ${
                                dataUsang
                                    ? `<div class="price-warning">
                                        ⚠️ Data ini sudah ${umurHari} hari,
                                        harga di lapangan mungkin sudah berubah
                                    </div>`
                                    : ""
                            }

                        </div>


                        <div class="price-result-info">

                            <strong>
                                ${namaKecamatan}
                            </strong>


                            <span>
                                ${namaKabupaten}
                            </span>


                            <span>
                                ${namaProvinsi}
                            </span>


                            <span>
                                Update:
                                ${formatTanggalIndo(data.tanggal)}
                            </span>


                            <span>
                                Sumber:
                                ${data.sumber}
                            </span>

                        </div>

                    </div>

                `;


            }
        );

    }
);


/* =================================================
   LIGHT / DARK MODE
================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


if (themeToggle && themeIcon) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );

            const darkMode =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (darkMode) {

                themeIcon.textContent = "☀";

                themeToggle.setAttribute(
                    "aria-label",
                    "Aktifkan light mode"
                );

            }

            else {

                themeIcon.textContent = "☾";

                themeToggle.setAttribute(
                    "aria-label",
                    "Aktifkan dark mode"
                );

            }

        }
    );

}
