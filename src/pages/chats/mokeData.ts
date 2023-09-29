import { FeedMessage } from '../../types/commonTypes';
import { ChatItemProps } from '../../components/chatItem/chatItemProps';

export const Chats: Array<ChatItemProps> = [{
    chatName: 'Тут ошибка 500',
    onClick: ()=>{}, //navigate(PagesNames.Error500),
    lastMessage: 'Изображение',
    sentTime: '10:49',
    unreadedMessagesCount: 2
},{
    chatName: 'Тут ошибка 404',
    onClick: ()=>{}, //navigate(PagesNames.Error404),
    lastMessage: 'Кино отстой!',
    sentTime: '12:00',
    who: 'Вы'
},{
    chatName: 'Илья',
    onClick: ()=>console.log('Clicked on chat: Илья'),
    lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique officiis magni error tempore id. Officiis, optio quae voluptatum 
        laborum aperiam possimus ducimus modi perferendis obcaecati, eius deleniti at omnis voluptate.`,
    sentTime: '15:12',
    unreadedMessagesCount: 4
},{
    chatName: 'Вадим',
    onClick: ()=>console.log('Clicked on chat: Вадим'),
    lastMessage: 'Круто!',
    sentTime: 'Пт',
    who: 'Вы'
},{
    chatName: 'Для своих',
    onClick: ()=>console.log('Clicked on chat: Для своих'),
    lastMessage: 'Ну ладно',
    sentTime: 'Ср',
    who: 'Сережа',
    selected: true
},{
    chatName: 'Работа',
    onClick: ()=>console.log('Clicked on chat: Работа'),
    lastMessage: 'Вы все уволены, идиоты!',
    sentTime: 'Пн',
    who: 'Шеф'
},{
    chatName: 'МЧС (Мужчины честной судьбы)',
    onClick: ()=>console.log('Clicked on chat: МЧС (Мужчины честной судьбы)'),
    lastMessage: 'Стикер',
    sentTime: 'Вт',
},{
    chatName: 'Флуд',
    onClick: ()=>console.log('Clicked on chat: Флуд'),
    lastMessage: 'Аудиофайл',
    sentTime: 'Ср',
    who: 'Олег'
},{
    chatName: 'Радиокружок',
    onClick: ()=>console.log('Clicked on chat: Радиокружок'),
    lastMessage: 'А если бахнет?',
    sentTime: 'Ср',
    who: 'Вы'
},{
    chatName: 'Игорь Негода',
    onClick: ()=>console.log('Clicked on chat: Игорь Негода'),
    lastMessage: 'Ставим гоночный боллид на колеса!',
    sentTime: 'Ср',
},{
    chatName: 'Просто чат',
    onClick: ()=>console.log('Clicked on chat: Просто чат'),
    lastMessage: '\\_(*|*)_/',
    sentTime: 'Вс',
    who: 'machoman_2009',
    unreadedMessagesCount: 42
},{
    chatName: 'Техподдержка',
    onClick: ()=>console.log('Clicked on chat: Техподдержка'),
    lastMessage: 'Вы мне ответите, подлецы?!',
    sentTime: 'Вс',
    who: 'Вы'
},{
    chatName: 'Видосики',
    onClick: ()=>console.log('Clicked on chat: Видосики'),
    lastMessage: 'Видеофайл',
    sentTime: 'Сб'
},{
    chatName: 'Рецепты',
    onClick: ()=>console.log('Clicked on chat: Рецепты'),
    lastMessage: 'Суп из 7...',
    sentTime: 'Пт',
    who: 'Вы'
},{
    chatName: 'Обучение',
    onClick: ()=>console.log('Clicked on chat: Обучение'),
    lastMessage: 'Че-т не получается!',
    sentTime: 'Пт',
    who: 'Марго',
    unreadedMessagesCount: 1
}];

export const Messages: Array<FeedMessage> = [{
    message: 'Привет, есть тема!)',
    sentTime: '12:32',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: 'Какая?',
    sentTime: '12:33',
    type: 'incoming',
    who: 'Олег'
}, {
    message: 'Ага, заинтриговал, что за тема?',
    sentTime: '12:33',
    type: 'outgoing'
}, {
    message: 'Короче, для моковой длинной строки можно ввести "lorem", и IDE сгенерирует длинную строку',
    sentTime: '12:34',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: 'Типа того:',
    sentTime: '12:36',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique officiis magni error tempore id. Officiis, optio quae voluptatum 
        laborum aperiam possimus ducimus modi perferendis obcaecati, eius deleniti at omnis voluptate.`,
    sentTime: '12:36',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: 'Ты серьезно? Это ж каждый дурак знает!))',
    sentTime: '12:37',
    type: 'outgoing'
}, {
    message: 'Ахах, ага)',
    sentTime: '12:38',
    type: 'incoming',
    who: 'Олег'
}, {
    message: 'Ой, все! Вот и делись с вами чем-то полезным...',
    sentTime: '12:40',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: 'Уйду я от вас, злые вы!',
    sentTime: '12:45',
    type: 'incoming',
    who: 'Сережа'
}, {
    message: 'Да ладно тебе, не обижайся!',
    sentTime: '12:46',
    type: 'incoming',
    who: 'Олег'
}, {
    message: 'Ну да, не кипятись, это на самом деле полезная инфа',
    sentTime: '12:48',
    type: 'outgoing'
}, {
    message: 'Ну ладно',
    sentTime: '12:49',
    type: 'incoming',
    who: 'Сережа'
}];

export const SelectedChat = 'Для своих';
