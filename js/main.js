const COUNT_OF_POSTS = 25;
const MIN_PHOTO_INDEX = 1;
const MAX_PHOTO_INDEX = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COUNT_OF_COMMENTS = 0;
const MAX_COUNT_OF_COMMENTS = 30;

const DESCRIPTIONS = [
  'Интересная фотография',
  'Мои будни',
  'Сегодня был особенный день',
  'Прекрасно, не так ли?',
  'Фоткал на тапок',
  'Еще одна фотография',
  'Я на отдыхе',
  'Фотография для лайков',
  'Успешный успех',
  'Не хватает фоток с едой',
  'Отличное настроение',
  'А как вы проводите свой день?',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Максим',
  'Есения',
  'Тимофей',
  'Дарья',
  'Ольга',
  'Константин',
  'Арина',
  'Виктория',
  'Даниил',
  'Мирон',
];

// Стартовые значения идентификаторов
let postID = 1;
let urlId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomValueOfArray = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}.svg`,
  message: getRandomValueOfArray(COMMENTS),
  name: getRandomValueOfArray(NAMES),
});

const createPost = () => ({
  id: postID++,
  url: `photos/${urlId++}.jpg`,
  description: getRandomValueOfArray(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInteger(MIN_COUNT_OF_COMMENTS, MAX_COUNT_OF_COMMENTS)}, createComment),
});

const createPosts = Array.from({length: COUNT_OF_POSTS}, createPost);

console.log(createPosts);
