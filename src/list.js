const netflix = [
    {key: 1, value: "Night Agent"}, {key: 2, value:"Bodyguard"}, {key:3, value:"class"}, {key:4,value:"Rana Naidu"}, {key:5,value:"manifest"}, {key:6,value:"Peaky Blinders"}
];

const today = new Date();

const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export {netflix, date, time};