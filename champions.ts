import { PositionFilter, RoleFilter } from 'data';

export type Champion = {
  id: number;
  name: string;
  rung: string;
  position: PositionFilter[];
  role: RoleFilter[];
  img: string;
};

export const champions: Champion[] = [
  {
    id: 1,
    name: 'Азир',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/swTcxBq/azir.jpg',
  },
  {
    id: 2,
    name: 'Акали',
    rung: '1',
    position: ['mid', 'top'],
    role: ['apk'],
    img: 'https://i.ibb.co/Lz3qZSK/akali.jpg',
  },
  {
    id: 3,
    name: 'Акшан',
    rung: '5',
    position: ['bot', 'mid'],
    role: ['adk'],
    img: 'https://i.ibb.co/JBNDTy6/akshan.jpg',
  },
  {
    id: 4,
    name: 'Алистар',
    rung: '2',
    position: ['bot'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/0K8BY1z/alistar.jpg',
  },
  {
    id: 5,
    name: 'Амуму',
    rung: '4',
    position: ['jungle'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/8cCzCqG/amumu.jpg',
  },
  {
    id: 6,
    name: 'Анивия',
    rung: '4',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/DPBn4k7/anivia.jpg',
  },
  {
    id: 7,
    name: 'Ари',
    rung: '6',
    position: ['mid'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/y8hq1Qt/ahri.jpg',
  },
  {
    id: 8,
    name: 'Атрокс',
    rung: '1',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/qJFLFLW/aatrox.jpg',
  },
  {
    id: 9,
    name: 'Аурелион Cол',
    rung: '1',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/M99XQk5/aurelionsol.jpg',
  },
  {
    id: 10,
    name: 'Афелий',
    rung: '1',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/mz2YcKG/aphelios.jpg',
  },
  {
    id: 11,
    name: 'Бард',
    rung: '7',
    position: ['bot'],
    role: ['support', 'apk'],
    img: 'https://i.ibb.co/Jx03BtF/bard.jpg',
  },
  {
    id: 12,
    name: 'Бел Вет',
    rung: '0',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/th4SxwS/belveth.jpg',
  },
  {
    id: 13,
    name: 'Блицкранк',
    rung: '3',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/S55YSvN/blitzcrank.jpg',
  },
  {
    id: 14,
    name: 'Браум',
    rung: '1',
    position: ['bot'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/DtRyBnw/braum.jpg',
  },
  {
    id: 15,
    name: 'Брэнд',
    rung: '7',
    position: ['mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/5ctT7VD/brand.jpg',
  },
  {
    id: 16,
    name: 'Вай',
    rung: '1',
    position: ['jungle'],
    role: ['tank', 'fighter', 'support'],
    img: 'https://i.ibb.co/Pz0CrzF/vi.jpg',
  },
  {
    id: 17,
    name: 'Варвик',
    rung: '6',
    position: ['jungle'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/G3RyHYz/warwick.jpg',
  },
  {
    id: 18,
    name: 'Варус',
    rung: '6',
    position: ['bot', 'mid'],
    role: ['adk'],
    img: 'https://i.ibb.co/gr7zqrZ/varus.jpg',
  },
  {
    id: 19,
    name: 'Вейгар',
    rung: '7',
    position: ['mid'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/NVs4sL3/veigar.jpg',
  },
  {
    id: 20,
    name: 'Вейн',
    rung: '3',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/n0CMdWQ/vayne.jpg',
  },
  {
    id: 21,
    name: 'Векс',
    rung: '7',
    position: ['mid', 'top'],
    role: ['apk'],
    img: 'https://i.ibb.co/jHR23NK/vex.jpg',
  },
  {
    id: 22,
    name: 'Велкоз',
    rung: '4',
    position: ['mid', 'bot'],
    role: ['apk'],
    img: 'https://i.ibb.co/4d9JtxS/velkoz.jpg',
  },
  {
    id: 23,
    name: 'Виего',
    rung: '1',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/KhNX3zZ/viego.jpg',
  },
  {
    id: 24,
    name: 'Виктор',
    rung: '3',
    position: ['mid'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/1LtnbJD/viktor.jpg',
  },
  {
    id: 25,
    name: 'Владимир',
    rung: '7',
    position: ['top', 'mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/BCJtqVh/vladimir.jpg',
  },
  {
    id: 26,
    name: 'Волибир',
    rung: '2',
    position: ['jungle'],
    role: ['tank', 'fighter', 'support'],
    img: 'https://i.ibb.co/QHjvWGx/volibear.jpg',
  },
  {
    id: 27,
    name: 'Вуконг',
    rung: '6',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/gt9x1Sp/monkeyking.jpg',
  },
  {
    id: 28,
    name: 'Галио',
    rung: '7',
    position: ['mid', 'top', 'bot'],
    role: ['tank', 'apk'],
    img: 'https://i.ibb.co/9WmnfB3/galio.jpg',
  },
  {
    id: 29,
    name: 'Ганк Планк',
    rung: '7',
    position: ['top', 'mid'],
    role: ['fighter'],
    img: 'https://i.ibb.co/THVdVn5/gangplank.jpg',
  },
  {
    id: 30,
    name: 'Гарен',
    rung: '7',
    position: ['top', 'mid'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/9nvGzb4/garen.jpg',
  },
  {
    id: 31,
    name: 'Гвен',
    rung: '1',
    position: ['top'],
    role: ['apk', 'fighter'],
    img: 'https://i.ibb.co/q1yPKNV/gwen.jpg',
  },
  {
    id: 32,
    name: 'Гекарим',
    rung: '1',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/8dWV5yR/hecarim.jpg',
  },
  {
    id: 33,
    name: 'Гнар',
    rung: '7',
    position: ['top', 'mid'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/6vb20Dd/gnar.jpg',
  },
  {
    id: 34,
    name: 'Грагас',
    rung: '3',
    position: ['top', 'mid', 'bot', 'jungle'],
    role: ['tank', 'apk', 'support'],
    img: 'https://i.ibb.co/7Kz5YHj/gragas.jpg',
  },
  {
    id: 35,
    name: 'Грейвз',
    rung: '3',
    position: ['top', 'jungle'],
    role: ['adk'],
    img: 'https://i.ibb.co/8rS5BTQ/graves.jpg',
  },
  {
    id: 36,
    name: 'Дариус',
    rung: '7',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/4K9LyF6/darius.jpg',
  },
  {
    id: 37,
    name: 'Джакс',
    rung: '2',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/cgtbXBH/jax.jpg',
  },
  {
    id: 38,
    name: 'Джарван',
    rung: '1',
    position: ['jungle'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/hyLF2m7/jarvaniv.jpg',
  },
  {
    id: 39,
    name: 'Джейс',
    rung: '4',
    position: ['top', 'mid'],
    role: ['fighter'],
    img: 'https://i.ibb.co/T0f0XHZ/jayce.jpg',
  },
  {
    id: 40,
    name: 'Джин',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/17WNXpS/jhin.jpg',
  },
  {
    id: 41,
    name: 'Джинкс',
    rung: '3',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/bN7Vfqp/jinx.jpg',
  },
  {
    id: 42,
    name: 'Диана',
    rung: '1',
    position: ['mid', 'jungle'],
    role: ['assasin', 'apk'],
    img: 'https://i.ibb.co/ZYR1yqb/diana.jpg',
  },
  {
    id: 43,
    name: 'Доктор Мундо',
    rung: '7',
    position: ['top'],
    role: ['tank', 'fighter', 'support'],
    img: 'https://i.ibb.co/L6Yb0q9/drmundo.jpg',
  },
  {
    id: 44,
    name: 'Дрейвен',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/Gx6Wzqg/draven.jpg',
  },
  {
    id: 45,
    name: 'Ёнэ',
    rung: '7',
    position: ['mid', 'top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/b3XqdkH/yone.jpg',
  },
  {
    id: 46,
    name: 'Жанна',
    rung: '4',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/LQ1hYww/janna.jpg',
  },
  {
    id: 47,
    name: 'Зайра',
    rung: '5',
    position: ['mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/JH5zPYB/zyra.jpg',
  },
  {
    id: 48,
    name: 'Зак',
    rung: '2',
    position: ['jungle'],
    role: ['tank'],
    img: 'https://i.ibb.co/rMGNqzR/zac.jpg',
  },
  {
    id: 49,
    name: 'Зед',
    rung: '3',
    position: ['mid'],
    role: ['assasin'],
    img: 'https://i.ibb.co/9pD8knc/zed.jpg',
  },
  {
    id: 50,
    name: 'Зерат',
    rung: '4',
    position: ['mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/gPK534z/xeratth.jpg',
  },
  {
    id: 51,
    name: 'Зери',
    rung: '0',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/N3ncL38/zeri.jpg',
  },
  {
    id: 52,
    name: 'Зиггс',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/3csBTqt/ziggs.jpg',
  },
  {
    id: 53,
    name: 'Зилеан',
    rung: '7',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/hdL1qLR/zilean.jpg',
  },
  {
    id: 54,
    name: 'Зои',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/C9GhynB/zoe.jpg',
  },
  {
    id: 55,
    name: 'Иверн',
    rung: '4',
    position: ['jungle'],
    role: ['support', 'tank'],
    img: 'https://i.ibb.co/wr6K1Cp/ivern.jpg',
  },
  {
    id: 56,
    name: 'Иллаой',
    rung: '2',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/1ZVnYmY/illaoi.jpg',
  },
  {
    id: 57,
    name: 'Ирелия',
    rung: '3',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/qCXpzPC/irelia.jpg',
  },
  {
    id: 58,
    name: 'Йорик',
    rung: '7',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/LvZTTkr/yorick.jpg',
  },
  {
    id: 59,
    name: 'Казикс',
    rung: '1',
    position: ['jungle'],
    role: ['assasin'],
    img: 'https://i.ibb.co/qFW9Jbw/khazix.jpg',
  },
  {
    id: 60,
    name: 'Каин',
    rung: '1',
    position: ['jungle'],
    role: ['assasin', 'fighter', 'tank'],
    img: 'https://i.ibb.co/tQfDKkP/kayn.jpg',
  },
  {
    id: 61,
    name: 'Кайса',
    rung: '3',
    position: ['bot'],
    role: ['adk', 'apk'],
    img: 'https://i.ibb.co/6832Mpb/kaisa.jpg',
  },
  {
    id: 62,
    name: 'Калиста',
    rung: '2',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/dQVRc1z/kalista.jpg',
  },
  {
    id: 63,
    name: 'Камилла',
    rung: '1',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/nw7YLrG/camille.jpg',
  },
  {
    id: 64,
    name: 'Карма',
    rung: '7',
    position: ['bot', 'mid', 'top'],
    role: ['support', 'apk'],
    img: 'https://i.ibb.co/6YHKT5j/karma.jpg',
  },
  {
    id: 65,
    name: 'Картус',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/pKVXTvL/karthus.jpg',
  },
  {
    id: 66,
    name: 'Кассадин',
    rung: '6',
    position: ['mid', 'top'],
    role: ['assasin'],
    img: 'https://i.ibb.co/XbZh9v7/kassadin.jpg',
  },
  {
    id: 67,
    name: 'Кассиопея',
    rung: '4',
    position: ['mid', 'top'],
    role: ['apk'],
    img: 'https://i.ibb.co/1d5VYd8/cassiopeia.jpg',
  },
  {
    id: 68,
    name: 'Катарина',
    rung: '4',
    position: ['mid'],
    role: ['assasin'],
    img: 'https://i.ibb.co/ts54Qf0/katarina.jpg',
  },
  {
    id: 69,
    name: 'Квинн',
    rung: '7',
    position: ['top'],
    role: ['adk'],
    img: 'https://i.ibb.co/q5qTNx1/quinn.jpg',
  },
  {
    id: 70,
    name: 'Кейл',
    rung: '7',
    position: ['top'],
    role: ['adk'],
    img: 'https://i.ibb.co/zG7fqJx/kayle.jpg',
  },
  {
    id: 71,
    name: 'Кейтлин',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/Ntv9L3k/caitlyn.jpg',
  },
  {
    id: 72,
    name: 'Кеннен',
    rung: '7',
    position: ['top'],
    role: ['apk'],
    img: 'https://i.ibb.co/4Zk0qgs/kennen.jpg',
  },
  {
    id: 73,
    name: 'Киана',
    rung: '3',
    position: ['mid'],
    role: ['assasin'],
    img: 'https://i.ibb.co/GsMLj13/qiyana.jpg',
  },
  {
    id: 74,
    name: 'Киндред',
    rung: '2',
    position: ['jungle'],
    role: ['adk'],
    img: 'https://i.ibb.co/ncm4P5b/kindred.jpg',
  },
  {
    id: 75,
    name: 'Клед',
    rung: '3',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/3CHd5gM/kled.jpg',
  },
  {
    id: 76,
    name: 'Ког Мао',
    rung: '3',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/sJFdM35/kogmaw.jpg',
  },
  {
    id: 77,
    name: 'Корки',
    rung: '2',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/7X82kgn/corki.jpg',
  },
  {
    id: 78,
    name: 'Ксин Жао',
    rung: '2',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/3ysfKn7/xinzhao.jpg',
  },
  {
    id: 79,
    name: 'Ле Блан',
    rung: '3',
    position: ['mid'],
    role: ['assasin', 'apk', 'support'],
    img: 'https://i.ibb.co/kK79JZ3/leblanc.jpg',
  },
  {
    id: 80,
    name: 'Леона',
    rung: '3',
    position: ['bot'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/DQdxZsb/leona.jpg',
  },
  {
    id: 81,
    name: 'Лиллия',
    rung: '7',
    position: ['top', 'jungle'],
    role: ['apk', 'fighter'],
    img: 'https://i.ibb.co/ynDSJLZ/lillia.jpg',
  },
  {
    id: 82,
    name: 'Ли Син',
    rung: '0',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://i.ibb.co/FXyRmS9/leesin.jpg',
  },
  {
    id: 83,
    name: 'Лиссандра',
    rung: '7',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/GtCbCRN/lissandra.jpg',
  },
  {
    id: 84,
    name: 'Лулу',
    rung: '7',
    position: ['bot'],
    role: ['support', 'apk'],
    img: 'https://i.ibb.co/HDgMRdY/lulu.jpg',
  },
  {
    id: 85,
    name: 'Люкс',
    rung: '7',
    position: ['mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/bgcBdHZ/lux.jpg',
  },
  {
    id: 86,
    name: 'Люциан',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/xfys6qT/lucian.jpg',
  },
  {
    id: 87,
    name: 'Мальзахар',
    rung: '7',
    position: ['mid'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/B2NNY6p/malzahar.jpg',
  },
  {
    id: 88,
    name: 'Мальфит',
    rung: '7',
    position: ['top', 'jungle'],
    role: ['tank', 'apk', 'support'],
    img: 'https://i.ibb.co/r7nf0vR/malaphite.jpg',
  },
  {
    id: 89,
    name: 'Маокай',
    rung: '7',
    position: ['top'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/GWyVVzH/maokai.jpg',
  },
  {
    id: 90,
    name: 'Мастер Йи',
    rung: '4',
    position: ['jungle'],
    role: ['assasin', 'fighter'],
    img: 'https://i.ibb.co/qkXjRDZ/masteryi.jpg',
  },
  {
    id: 91,
    name: 'Мисс Фортуна',
    rung: '7',
    position: ['bot', 'mid'],
    role: ['adk', 'apk'],
    img: 'https://i.ibb.co/5BZdpNv/missfortune.jpg',
  },
  {
    id: 92,
    name: 'Моргана',
    rung: '7',
    position: ['bot', 'mid'],
    role: ['support', 'apk'],
    img: 'https://i.ibb.co/1qsGJcb/morgana.jpg',
  },
  {
    id: 93,
    name: 'Мордекайзер',
    rung: '7',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/LZtyKNd/mordekaiser.jpg',
  },
  {
    id: 94,
    name: 'Нами',
    rung: '3',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/1vGBRwS/nami.jpg',
  },
  {
    id: 95,
    name: 'Насус',
    rung: '7',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/FzdynJH/nasus.jpg',
  },
  {
    id: 96,
    name: 'Наутилус',
    rung: '7',
    position: ['bot'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/4ZYzW6h/nautilus.jpg',
  },
  {
    id: 97,
    name: 'Нидали',
    rung: '5',
    position: ['bot', 'top', 'mid', 'jungle'],
    role: ['support', 'assasin', 'fighter', 'apk'],
    img: 'https://i.ibb.co/WWbC3sj/nidalee.jpg',
  },
  {
    id: 98,
    name: 'Нико',
    rung: '3',
    position: ['mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/vHJvj0f/neeko.jpg',
  },
  {
    id: 99,
    name: 'Ноктюрн',
    rung: '1',
    position: ['jungle'],
    role: ['fighter', 'assasin'],
    img: 'https://i.ibb.co/0r4VY9L/nocturne.jpg',
  },
  {
    id: 100,
    name: 'Нуну',
    rung: '7',
    position: ['jungle'],
    role: ['tank'],
    img: 'https://i.ibb.co/PxkT70r/nunu.jpg',
  },
  {
    id: 101,
    name: 'Олаф',
    rung: '2',
    position: ['top', 'jungle'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/17zDsX8/olaf.jpg',
  },
  {
    id: 102,
    name: 'Орианна',
    rung: '6',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/LJQKvzh/orianna.jpg',
  },
  {
    id: 103,
    name: 'Орн',
    rung: '7',
    position: ['top'],
    role: ['tank'],
    img: 'https://i.ibb.co/P4wK8GV/ornn.jpg',
  },
  {
    id: 104,
    name: 'Пайк',
    rung: '7',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/VvJN1b3/pyke.jpg',
  },
  {
    id: 105,
    name: 'Пантеон',
    rung: '2',
    position: ['jungle', 'bot'],
    role: ['fighter'],
    img: 'https://i.ibb.co/8r9B3sc/pantheon.jpg',
  },
  {
    id: 106,
    name: 'Поппи',
    rung: '2',
    position: ['top'],
    role: ['tank'],
    img: 'https://i.ibb.co/4NFBMtW/poppy.jpg',
  },
  {
    id: 107,
    name: 'Райз',
    rung: '7',
    position: ['mid', 'top'],
    role: ['apk'],
    img: 'https://i.ibb.co/CvX9yG0/ryze.jpg',
  },
  {
    id: 108,
    name: 'Рамбл',
    rung: '2',
    position: ['top'],
    role: ['apk'],
    img: 'https://i.ibb.co/8dgnRxB/rumble.jpg',
  },
  {
    id: 109,
    name: 'Раммус',
    rung: '3',
    position: ['jungle'],
    role: ['tank'],
    img: 'https://i.ibb.co/JFWSmGD/rammus.jpg',
  },
  {
    id: 110,
    name: 'РекСай',
    rung: '1',
    position: ['jungle'],
    role: ['assasin', 'fighter'],
    img: 'https://i.ibb.co/M9NtQx3/reksai.jpg',
  },
  {
    id: 111,
    name: 'Релл',
    rung: '1',
    position: ['bot'],
    role: ['tank'],
    img: 'https://i.ibb.co/b5bx5JK/rell.jpg',
  },
  {
    id: 112,
    name: 'Рената Гласк',
    rung: '0',
    position: ['bot'],
    role: ['support', 'apk'],
    img: 'https://i.ibb.co/3vfXVD5/renata-glasc.jpg',
  },
  {
    id: 113,
    name: 'Ренгар',
    rung: '1',
    position: ['jungle'],
    role: ['assassin'],
    img: 'https://i.ibb.co/hL0CYNd/rengar.jpg',
  },
  {
    id: 114,
    name: 'Ренектон',
    rung: '6',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/BtdSF5s/renekton.jpg',
  },
  {
    id: 115,
    name: 'Ривен',
    rung: '2',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/kg6W9p7/riven.jpg',
  },
  {
    id: 116,
    name: 'Рэйкан',
    rung: '1',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/hRgGsyG/rakan.jpg',
  },
  {
    id: 117,
    name: 'Сайлас',
    rung: '2',
    position: ['mid'],
    role: ['apk', 'fighter'],
    img: 'https://i.ibb.co/DWw4FC7/sylas.jpg',
  },
  {
    id: 118,
    name: 'Самира',
    rung: '2',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/d6vGSHn/samira.jpg',
  },
  {
    id: 119,
    name: 'Свейн',
    rung: '7',
    position: ['top', 'mid', 'bot'],
    role: ['apk', 'support'],
    img: 'https://i.ibb.co/gmBZ5BB/swain.jpg',
  },
  {
    id: 120,
    name: 'Седжуани',
    rung: '2',
    position: ['jungle'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/hDkw82M/sejuani.jpg',
  },
  {
    id: 121,
    name: 'Сенна',
    rung: '7',
    position: ['bot'],
    role: ['support', 'adk'],
    img: 'https://i.ibb.co/pLpm2gr/senna.jpg',
  },
  {
    id: 122,
    name: 'Серафина',
    rung: '2',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/w6gc70M/seraphine.jpg',
  },
  {
    id: 123,
    name: 'Сетт',
    rung: '2',
    position: ['top'],
    role: ['fighter', 'tank'],
    img: 'https://i.ibb.co/X4kJ4zf/sett.jpg',
  },
  {
    id: 124,
    name: 'Сивир',
    rung: '3',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/kGbJ8Hn/sivir.jpg',
  },
  {
    id: 125,
    name: 'Синджед',
    rung: '2',
    position: ['top'],
    role: ['tank'],
    img: 'https://i.ibb.co/5x4nDGw/singed.jpg',
  },
  {
    id: 126,
    name: 'Синдра',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/42zxJp9/syndra.jpg',
  },
  {
    id: 127,
    name: 'Сион',
    rung: '1',
    position: ['top'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/sJ8xKnV/sion.jpg',
  },
  {
    id: 128,
    name: 'Скарнер',
    rung: '2',
    position: ['jungle'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/PC0r0sB/skarner.jpg',
  },
  {
    id: 129,
    name: 'Сона',
    rung: '7',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/NNqK91P/sona.jpg',
  },
  {
    id: 130,
    name: 'Сорака',
    rung: '7',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/SvC0LV9/soraka.jpg',
  },
  {
    id: 131,
    name: 'Таам Кенч',
    rung: '4',
    position: ['top'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/hRJgqB2/tahmkench.jpg',
  },
  {
    id: 132,
    name: 'Талия',
    rung: '1',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/6cMB7kV/ialiyah.jpg',
  },
  {
    id: 133,
    name: 'Талон',
    rung: '7',
    position: ['mid'],
    role: ['assasin'],
    img: 'https://i.ibb.co/Fq4XHnq/talon.jpg',
  },
  {
    id: 134,
    name: 'Тарик',
    rung: '1',
    position: ['bot'],
    role: ['support', 'tank'],
    img: 'https://i.ibb.co/7Ks03kD/taric.jpg',
  },
  {
    id: 135,
    name: 'ТвистедФейт',
    rung: '7',
    position: ['mid', 'bot'],
    role: ['apk', 'adk', 'support'],
    img: 'https://i.ibb.co/CwGXKdY/twistedfate.jpg',
  },
  {
    id: 136,
    name: 'Твич',
    rung: '7',
    position: ['bot'],
    role: ['adk', 'apk'],
    img: 'https://i.ibb.co/zZj1tN4/twitch.jpg',
  },
  {
    id: 137,
    name: 'Тимо',
    rung: '6',
    position: ['top'],
    role: ['apk'],
    img: 'https://i.ibb.co/DKhctpv/teemo.jpg',
  },
  {
    id: 138,
    name: 'Трандл',
    rung: '6',
    position: ['top', 'jungle'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/VpQyfxJ/trundle.jpg',
  },
  {
    id: 139,
    name: 'Треш',
    rung: '2',
    position: ['bot'],
    role: ['tank', 'support'],
    img: 'https://i.ibb.co/2hFSfdQ/thresh.jpg',
  },
  {
    id: 140,
    name: 'Триндамир',
    rung: '3',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/YDr0B0y/tryndamere.jpg',
  },
  {
    id: 141,
    name: 'Тристана',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/z2w3Qkp/tristana.jpg',
  },
  {
    id: 142,
    name: 'Удир',
    rung: '1',
    position: ['top', 'jungle'],
    role: ['tank', 'fighter'],
    img: 'https://i.ibb.co/54tSr5X/udyr.jpg',
  },
  {
    id: 143,
    name: 'Ургот',
    rung: '3',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/qRx4S57/urgot.jpg',
  },
  {
    id: 144,
    name: 'Фиддлстикс',
    rung: '4',
    position: ['jungle'],
    role: ['apk'],
    img: 'https://i.ibb.co/r3DKVCx/fiddlesticks.jpg',
  },
  {
    id: 145,
    name: 'Физз',
    rung: '2',
    position: ['mid'],
    role: ['assasin'],
    img: 'https://i.ibb.co/zm0X4gf/fizz.jpg',
  },
  {
    id: 146,
    name: 'Фиора',
    rung: '4',
    position: ['top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/xSWm38w/fiora.jpg',
  },
  {
    id: 147,
    name: 'Хеймердингер',
    rung: '3',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/fvxxMC1/heimerdinger.jpg',
  },
  {
    id: 148,
    name: 'ЧоГат',
    rung: '2',
    position: ['top'],
    role: ['tank'],
    img: 'https://i.ibb.co/ZMJdCWH/chogath.jpg',
  },
  {
    id: 149,
    name: 'Шако',
    rung: '7',
    position: ['top', 'mid', 'jungle', 'bot'],
    role: ['apk', 'assassin'],
    img: 'https://i.ibb.co/ZxgyBQN/shaco.jpg',
  },
  {
    id: 150,
    name: 'Шая',
    rung: '2',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/NVqsBqm/xayah.jpg',
  },
  {
    id: 151,
    name: 'Шен',
    rung: '3',
    position: ['top'],
    role: ['tank'],
    img: 'https://i.ibb.co/T2MG3nz/shen.jpg',
  },
  {
    id: 152,
    name: 'Шивана',
    rung: '2',
    position: ['top', 'jungle'],
    role: ['apk', 'tank', 'fighter'],
    img: 'https://i.ibb.co/99JFQJK/shyvana.jpg',
  },
  {
    id: 153,
    name: 'Эвелинн',
    rung: '2',
    position: ['jungle'],
    role: ['assasin'],
    img: 'https://i.ibb.co/ZYjjZ3F/evelynn.jpg',
  },
  {
    id: 154,
    name: 'Эзреаль',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/5935767/ezreal.jpg',
  },
  {
    id: 155,
    name: 'Экко',
    rung: '2',
    position: ['jungle'],
    role: ['apk'],
    img: 'https://i.ibb.co/hLFdcq1/ekko.jpg',
  },
  {
    id: 156,
    name: 'Элиза',
    rung: '4',
    position: ['jungle'],
    role: ['apk'],
    img: 'https://i.ibb.co/wSfjfpF/elise.jpg',
  },
  {
    id: 157,
    name: 'Энни',
    rung: '7',
    position: ['mid'],
    role: ['apk'],
    img: 'https://i.ibb.co/BZYrgPS/annie.jpg',
  },
  {
    id: 158,
    name: 'Эш',
    rung: '7',
    position: ['bot'],
    role: ['adk'],
    img: 'https://i.ibb.co/rstf1r5/ashe.jpg',
  },
  {
    id: 159,
    name: 'Юми',
    rung: '7',
    position: ['bot'],
    role: ['support'],
    img: 'https://i.ibb.co/k9nMk41/yuumi.jpg',
  },
  {
    id: 160,
    name: 'Ясуо',
    rung: '7',
    position: ['mid', 'top'],
    role: ['fighter'],
    img: 'https://i.ibb.co/VtSP34T/yasuo.jpg',
  },
];

// https://i.ibb.co/swTcxBq/azir.jpg
// https://i.ibb.co/Lz3qZSK/akali.jpg
// https://i.ibb.co/JBNDTy6/akshan.jpg
// https://i.ibb.co/0K8BY1z/alistar.jpg
// https://i.ibb.co/8cCzCqG/amumu.jpg
// https://i.ibb.co/DPBn4k7/anivia.jpg
// https://i.ibb.co/y8hq1Qt/ahri.jpg
// https://i.ibb.co/qJFLFLW/aatrox.jpg
// https://i.ibb.co/M99XQk5/aurelionsol.jpg
// https://i.ibb.co/mz2YcKG/aphelios.jpg
// https://i.ibb.co/Jx03BtF/bard.jpg
// https://i.ibb.co/th4SxwS/belveth.jpg
// https://i.ibb.co/S55YSvN/blitzcrank.jpg
// https://i.ibb.co/DtRyBnw/braum.jpg
// https://i.ibb.co/5ctT7VD/brand.jpg
// https://i.ibb.co/Pz0CrzF/vi.jpg
// https://i.ibb.co/G3RyHYz/warwick.jpg
// https://i.ibb.co/gr7zqrZ/varus.jpg
// https://i.ibb.co/NVs4sL3/veigar.jpg
// https://i.ibb.co/n0CMdWQ/vayne.jpg
// https://i.ibb.co/jHR23NK/vex.jpg
// https://i.ibb.co/4d9JtxS/velkoz.jpg
// https://i.ibb.co/KhNX3zZ/viego.jpg
// https://i.ibb.co/1LtnbJD/viktor.jpg
// https://i.ibb.co/BCJtqVh/vladimir.jpg
// https://i.ibb.co/QHjvWGx/volibear.jpg
// https://i.ibb.co/gt9x1Sp/monkeyking.jpg
// https://i.ibb.co/9WmnfB3/galio.jpg
// https://i.ibb.co/THVdVn5/gangplank.jpg
// https://i.ibb.co/9nvGzb4/garen.jpg
// https://i.ibb.co/q1yPKNV/gwen.jpg
// https://i.ibb.co/8dWV5yR/hecarim.jpg
// https://i.ibb.co/6vb20Dd/gnar.jpg
// https://i.ibb.co/7Kz5YHj/gragas.jpg
// https://i.ibb.co/8rS5BTQ/graves.jpg
// https://i.ibb.co/4K9LyF6/darius.jpg
// https://i.ibb.co/cgtbXBH/jax.jpg
// https://i.ibb.co/hyLF2m7/jarvaniv.jpg
// https://i.ibb.co/T0f0XHZ/jayce.jpg
// https://i.ibb.co/17WNXpS/jhin.jpg
// https://i.ibb.co/bN7Vfqp/jinx.jpg
// https://i.ibb.co/ZYR1yqb/diana.jpg
// https://i.ibb.co/L6Yb0q9/drmundo.jpg
// https://i.ibb.co/Gx6Wzqg/draven.jpg
// https://i.ibb.co/b3XqdkH/yone.jpg
// https://i.ibb.co/LQ1hYww/janna.jpg
// https://i.ibb.co/JH5zPYB/zyra.jpg
// https://i.ibb.co/rMGNqzR/zac.jpg
// https://i.ibb.co/9pD8knc/zed.jpg
// https://i.ibb.co/gPK534z/xeratth.jpg
// https://i.ibb.co/N3ncL38/zeri.jpg
// https://i.ibb.co/3csBTqt/ziggs.jpg
// https://i.ibb.co/hdL1qLR/zilean.jpg
// https://i.ibb.co/C9GhynB/zoe.jpg
// https://i.ibb.co/wr6K1Cp/ivern.jpg
// https://i.ibb.co/1ZVnYmY/illaoi.jpg
// https://i.ibb.co/qCXpzPC/irelia.jpg
// https://i.ibb.co/LvZTTkr/yorick.jpg
// https://i.ibb.co/qFW9Jbw/khazix.jpg
// https://i.ibb.co/tQfDKkP/kayn.jpg
// https://i.ibb.co/6832Mpb/kaisa.jpg
// https://i.ibb.co/dQVRc1z/kalista.jpg
// https://i.ibb.co/nw7YLrG/camille.jpg
// https://i.ibb.co/6YHKT5j/karma.jpg
// https://i.ibb.co/pKVXTvL/karthus.jpg
// https://i.ibb.co/XbZh9v7/kassadin.jpg
// https://i.ibb.co/1d5VYd8/cassiopeia.jpg
// https://i.ibb.co/ts54Qf0/katarina.jpg
// https://i.ibb.co/q5qTNx1/quinn.jpg
// https://i.ibb.co/zG7fqJx/kayle.jpg
// https://i.ibb.co/Ntv9L3k/caitlyn.jpg
// https://i.ibb.co/4Zk0qgs/kennen.jpg
// https://i.ibb.co/GsMLj13/qiyana.jpg
// https://i.ibb.co/ncm4P5b/kindred.jpg
// https://i.ibb.co/3CHd5gM/kled.jpg
// https://i.ibb.co/sJFdM35/kogmaw.jpg
// https://i.ibb.co/7X82kgn/corki.jpg
// https://i.ibb.co/3ysfKn7/xinzhao.jpg
// https://i.ibb.co/kK79JZ3/leblanc.jpg
// https://i.ibb.co/DQdxZsb/leona.jpg
// https://i.ibb.co/ynDSJLZ/lillia.jpg
// https://i.ibb.co/FXyRmS9/leesin.jpg
// https://i.ibb.co/GtCbCRN/lissandra.jpg
// https://i.ibb.co/HDgMRdY/lulu.jpg
// https://i.ibb.co/bgcBdHZ/lux.jpg
// https://i.ibb.co/xfys6qT/lucian.jpg
// https://i.ibb.co/B2NNY6p/malzahar.jpg
// https://i.ibb.co/r7nf0vR/malaphite.jpg
// https://i.ibb.co/GWyVVzH/maokai.jpg
// https://i.ibb.co/qkXjRDZ/masteryi.jpg
// https://i.ibb.co/5BZdpNv/missfortune.jpg
// https://i.ibb.co/1qsGJcb/morgana.jpg
// https://i.ibb.co/LZtyKNd/mordekaiser.jpg
// https://i.ibb.co/1vGBRwS/nami.jpg
// https://i.ibb.co/FzdynJH/nasus.jpg
// https://i.ibb.co/4ZYzW6h/nautilus.jpg
// https://i.ibb.co/WWbC3sj/nidalee.jpg
// https://i.ibb.co/vHJvj0f/neeko.jpg
// https://i.ibb.co/0r4VY9L/nocturne.jpg
// https://i.ibb.co/PxkT70r/nunu.jpg
// https://i.ibb.co/17zDsX8/olaf.jpg
// https://i.ibb.co/LJQKvzh/orianna.jpg
// https://i.ibb.co/P4wK8GV/ornn.jpg
// https://i.ibb.co/VvJN1b3/pyke.jpg
// https://i.ibb.co/8r9B3sc/pantheon.jpg
// https://i.ibb.co/4NFBMtW/poppy.jpg
// https://i.ibb.co/CvX9yG0/ryze.jpg
// https://i.ibb.co/8dgnRxB/rumble.jpg
// https://i.ibb.co/JFWSmGD/rammus.jpg
// https://i.ibb.co/M9NtQx3/reksai.jpg
// https://i.ibb.co/b5bx5JK/rell.jpg
// https://i.ibb.co/3vfXVD5/renata-glasc.jpg
// https://i.ibb.co/hL0CYNd/rengar.jpg
// https://i.ibb.co/BtdSF5s/renekton.jpg
// https://i.ibb.co/kg6W9p7/riven.jpg
// https://i.ibb.co/hRgGsyG/rakan.jpg
// https://i.ibb.co/DWw4FC7/sylas.jpg
// https://i.ibb.co/d6vGSHn/samira.jpg
// https://i.ibb.co/gmBZ5BB/swain.jpg
// https://i.ibb.co/hDkw82M/sejuani.jpg
// https://i.ibb.co/pLpm2gr/senna.jpg
// https://i.ibb.co/w6gc70M/seraphine.jpg
// https://i.ibb.co/X4kJ4zf/sett.jpg
// https://i.ibb.co/kGbJ8Hn/sivir.jpg
// https://i.ibb.co/5x4nDGw/singed.jpg
// https://i.ibb.co/42zxJp9/syndra.jpg
// https://i.ibb.co/sJ8xKnV/sion.jpg
// https://i.ibb.co/PC0r0sB/skarner.jpg
// https://i.ibb.co/NNqK91P/sona.jpg
// https://i.ibb.co/SvC0LV9/soraka.jpg
// https://i.ibb.co/hRJgqB2/tahmkench.jpg
// https://i.ibb.co/6cMB7kV/ialiyah.jpg
// https://i.ibb.co/Fq4XHnq/talon.jpg
// https://i.ibb.co/7Ks03kD/taric.jpg
// https://i.ibb.co/CwGXKdY/twistedfate.jpg
// https://i.ibb.co/zZj1tN4/twitch.jpg
// https://i.ibb.co/DKhctpv/teemo.jpg
// https://i.ibb.co/VpQyfxJ/trundle.jpg
// https://i.ibb.co/2hFSfdQ/thresh.jpg
// https://i.ibb.co/YDr0B0y/tryndamere.jpg
// https://i.ibb.co/z2w3Qkp/tristana.jpg
// https://i.ibb.co/54tSr5X/udyr.jpg
// https://i.ibb.co/qRx4S57/urgot.jpg
// https://i.ibb.co/r3DKVCx/fiddlesticks.jpg
// https://i.ibb.co/zm0X4gf/fizz.jpg
// https://i.ibb.co/xSWm38w/fiora.jpg
// https://i.ibb.co/fvxxMC1/heimerdinger.jpg
// https://i.ibb.co/ZMJdCWH/chogath.jpg
// https://i.ibb.co/ZxgyBQN/shaco.jpg
// https://i.ibb.co/NVqsBqm/xayah.jpg
// https://i.ibb.co/T2MG3nz/shen.jpg
// https://i.ibb.co/99JFQJK/shyvana.jpg
// https://i.ibb.co/ZYjjZ3F/evelynn.jpg
// https://i.ibb.co/5935767/ezreal.jpg
// https://i.ibb.co/hLFdcq1/ekko.jpg
// https://i.ibb.co/wSfjfpF/elise.jpg
// https://i.ibb.co/BZYrgPS/annie.jpg
// https://i.ibb.co/rstf1r5/ashe.jpg
// https://i.ibb.co/k9nMk41/yuumi.jpg
// https://i.ibb.co/VtSP34T/yasuo.jpg

// Key
// 4870058c-5a7d-11ed-b1c3-0242ac110002
// https://extendsclass.com/mock/rest/eec80d67d8d5edbc8949336f913bed41/champions
