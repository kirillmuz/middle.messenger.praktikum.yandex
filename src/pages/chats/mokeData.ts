import { ChatItemProps } from '../../components/chatItem/chatItemProps';

export const Chats: Array<ChatItemProps> = [{
    chatName: 'Андрей',
    onClick: ()=>console.log('Clicked on chat: Андрей'),
    lastMessage: 'Изображение',
    sentTime: '10:49',
    unreadedMessagesCount: 2
},{
    chatName: 'Киноклуб',
    onClick: ()=>console.log('Clicked on chat: Киноклуб'),
    lastMessage: 'Кино отстой!',
    sentTime: '12:00',
    who: 'Вы'
},{
    chatName: 'Илья',
    onClick: ()=>console.log('Clicked on chat: Илья'),
    lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis magni error tempore id. Officiis, optio quae voluptatum laborum aperiam possimus ducimus modi perferendis obcaecati, eius deleniti at omnis voluptate.',
    sentTime: '15:12',
    unreadedMessagesCount: 4
},{
    chatName: 'Вадим',
    onClick: ()=>console.log('Clicked on chat: Вадим'),
    lastMessage: 'Круто!',
    sentTime: 'Пт',
    who: 'Вы',
    selected: true
},{
    chatName: 'тет-а-теты',
    onClick: ()=>console.log('Clicked on chat: тет-а-теты'),
    lastMessage: 'Никто не должен это увидеть!',
    sentTime: 'Ср',
    who: 'Сережа'
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
}]
