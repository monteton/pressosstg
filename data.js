// Данные программы «Осанка и пресс».
// Чтобы поменять видео или упражнения — правьте этот файл, страницы подтянут изменения сами.

const WELCOME_VIDEO = 'https://file-storage.bothelp.io/myuppy/9e/9e34/9e34cf110dca59a06f1bbe1fe1068643/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE.mp4';
const INSTRUCTION_VIDEO = 'https://file-storage.bothelp.io/myuppy/75/7592/759279c47e0e4b1fac06622e87f7d4a2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F.mp4';

// Осанка: 7 тренировок по 4 видео-упражнения
const POSTURE = [
  {
    "id": 1,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/30/300a/300ae9091ad5c72c62bb10088d7ef7e0/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2011.mp4",
      "https://file-storage.bothelp.io/myuppy/69/693d/693dabd67723a1fdbaf0c57fa943b33c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2012.mp4",
      "https://file-storage.bothelp.io/myuppy/c2/c25c/c25c094f82e15182cf9ca2cfc45827af/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2013.mp4",
      "https://file-storage.bothelp.io/myuppy/2c/2ce5/2ce5c309585d1d3a826209df39ab03d0/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2014.mp4"
    ]
  },
  {
    "id": 2,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/47/4745/47458df4847b78c1b225834593fd9207/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2021.mp4",
      "https://file-storage.bothelp.io/myuppy/e4/e479/e479933bba2e995ca84405e3fd9653eb/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2022.mp4",
      "https://file-storage.bothelp.io/myuppy/c1/c157/c1576131a1faede83df16819b0d435e1/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2023.mp4",
      "https://file-storage.bothelp.io/myuppy/90/907f/907f7e7ec8d07053e20c055380503786/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2024.mp4"
    ]
  },
  {
    "id": 3,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/15/151d/151d1a5760c9423c3ee7d3959e2f4e22/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2031.mp4",
      "https://file-storage.bothelp.io/myuppy/39/3979/3979311aa583aaa3e9af1265eb3aaaa9/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2032.mp4",
      "https://file-storage.bothelp.io/myuppy/fe/fee8/fee88f771543697bb71a26e3c65e152e/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2033.mp4",
      "https://file-storage.bothelp.io/myuppy/6c/6c5e/6c5e67b5747226f854f8194f3d0ff38c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2034.mp4"
    ]
  },
  {
    "id": 4,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/0b/0bb2/0bb249a29ac1fad91776c7fede6fafa2/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2041.mp4",
      "https://file-storage.bothelp.io/myuppy/34/347d/347d5bd6f930905465a933dc50e4c132/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2042.mp4",
      "https://file-storage.bothelp.io/myuppy/b9/b958/b9588db2c6a89fdcadeff5289af955fe/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2043.mp4",
      "https://file-storage.bothelp.io/myuppy/21/2158/2158d7f09c00ad6cc7f468d3690327c8/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2044.mp4"
    ]
  },
  {
    "id": 5,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/8e/8e55/8e558a17957aa3afa7772885050bf94c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2051.mp4",
      "https://file-storage.bothelp.io/myuppy/4e/4e17/4e178cf929fb5e49ee61ac90095fd3b1/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2052.mp4",
      "https://file-storage.bothelp.io/myuppy/62/6289/628961a0181f82ba7002ffd2a476a79c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2053.mp4",
      "https://file-storage.bothelp.io/myuppy/76/76f3/76f37861954d12270676dbe986918250/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2054.mp4"
    ]
  },
  {
    "id": 6,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/b7/b792/b792f394248f91666a60e491885234ad/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2061.mp4",
      "https://file-storage.bothelp.io/myuppy/b9/b9bf/b9bfebf3f0cd37d6514d596d2db86b0f/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2062.mp4",
      "https://file-storage.bothelp.io/myuppy/6d/6dd7/6dd74fc3171d73c8a8c903bccef8c21f/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2063.mp4",
      "https://file-storage.bothelp.io/myuppy/70/70b7/70b7e80ab3b50dc6e849bc2c26381e0d/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2064.mp4"
    ]
  },
  {
    "id": 7,
    "videos": [
      "https://file-storage.bothelp.io/myuppy/08/08c9/08c9f89001e6a3a974832d08064b4f32/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2071.mp4",
      "https://file-storage.bothelp.io/myuppy/86/86f4/86f4ccaebb21380ce26f9de2ea771b14/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2072.mp4",
      "https://file-storage.bothelp.io/myuppy/2b/2b3a/2b3a5802075c607d4ad74492caff801c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2073.mp4",
      "https://file-storage.bothelp.io/myuppy/ad/ad02/ad0277272584435ffdefaab0541d20dc/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2074.mp4"
    ]
  }
];

// Пресс: 8 тренировок, одно видео + список упражнений
const PRESS = [
  {
    "id": 1,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/e7/e70f/e70f45884392de112aeed3d154f090b0/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B01.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Планка",
        "reps": "3/45 секунд"
      },
      {
        "name": "Русский твист",
        "reps": "3 подхода по 20 раз"
      },
      {
        "name": "Лодочка",
        "reps": "10 глубоких вдохов-выдохов 3 подхода"
      },
      {
        "name": "Тянемся к носкам",
        "reps": "2 подхода 20 раз"
      }
    ]
  },
  {
    "id": 2,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/66/6644/664492a606d545b3696c8f64992aa0a3/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B02.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Опускание ног",
        "reps": "3/20 раз"
      },
      {
        "name": "Колени к груди",
        "reps": "3 подхода 20 раз"
      },
      {
        "name": "Планка с подъемом рук",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 3,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/69/69c4/69c403ebbfd0fc4b09edfd56007993d7/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B03.mp4",
    "exercises": [
      {
        "name": "Боковая скрутка (руки к пятке)",
        "reps": "3/20"
      },
      {
        "name": "Велосипед",
        "reps": "3/20"
      },
      {
        "name": "Мертвый жук",
        "reps": "3/20"
      },
      {
        "name": "Скалолаз",
        "reps": "4/20"
      }
    ]
  },
  {
    "id": 4,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/f6/f66f/f66f4dddd16c0665dfc7f036e6578ee1/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B04.mp4",
    "exercises": [
      {
        "name": "Боковая планка со скручиванием",
        "reps": "3/12 На каждую сторону"
      },
      {
        "name": "Скручивание",
        "reps": "3/20"
      },
      {
        "name": "Боковые скручивания",
        "reps": "2/12 на каждую сторону"
      },
      {
        "name": "Обратные скручивания",
        "reps": "3/20"
      }
    ]
  },
  {
    "id": 5,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/6e/6e3b/6e3b08058d091747b980f2ddeebd8427/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B05.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Скручивание с поднятыми ногами",
        "reps": "3/15"
      },
      {
        "name": "Ножницы",
        "reps": "3/20"
      },
      {
        "name": "Обратная планка",
        "reps": "2/20"
      },
      {
        "name": "Опускание ног",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 6,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/6a/6a60/6a60f49a0f77a9f207027ef4271a517d/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B06.mp4",
    "exercises": [
      {
        "name": "Хлопок под коленкой",
        "reps": "3/20"
      },
      {
        "name": "Планка с разворотом",
        "reps": "3/12 по 6 на каждую сторону"
      },
      {
        "name": "Скручивание -ноги вверх",
        "reps": "3/20"
      },
      {
        "name": "Опускание ног",
        "reps": "3/20"
      }
    ]
  },
  {
    "id": 7,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/56/56b4/56b4e85e131a6a1e5cf13f982718cd06/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B07.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Планка динамичная",
        "reps": "3/20"
      },
      {
        "name": "Диагонали",
        "reps": "3/20 по 10 на каждую сторону"
      },
      {
        "name": "Колени к груди",
        "reps": "2/20"
      },
      {
        "name": "Стол",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 8,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/a1/a178/a178b747cb600009d15bb737c644aa64/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B08.mp4",
    "exercises": [
      {
        "name": "Скалолаз",
        "reps": "3/20"
      },
      {
        "name": "Косые скручивания",
        "reps": "3/20"
      },
      {
        "name": "Обратные скручивания",
        "reps": "3/20"
      },
      {
        "name": "Мертвый жук",
        "reps": "2/20"
      }
    ]
  }
];
