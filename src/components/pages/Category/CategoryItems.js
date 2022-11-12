var categoryItems = [
    {
        name: "Laptop Dell Inspiron T7420 N4I5021W",
        image: "../../../image/pc_sample.png",
        category: "Dell Inspiron"
    },
    {
        name: "Laptop Dell Vostro 3405",
        image: "../../../image/pc_sample.png",
        category: "Dell Vostro"
    },
    {
        name: "Laptop Dell Inspiron 16 5625 99VP91",
        image: "../../../image/pc_sample.png",
        category: "Dell Inspiron"
    },
    {
        name: "Laptop Dell XPS 13 Plus 9320 5CG56",
        image: "../../../image/pc_sample.png",
        category: "Dell XPS"
    },
    {
        name: "Laptop Dell XPS 15 9520 70295790",
        image: "../../../image/pc_sample.png",
        category: "Dell XPS"
    },
    {
        name: "Laptop Dell XPS 13 9320 70295789",
        image: "../../../image/pc_sample.png",
        category: "Dell XPS"
    },
    {
        name: "Dell Inspiron 5620 N6I7110W1",
        image: "../../../image/pc_sample.png",
        category: "Dell Inspiron"
    },
    {
        name: "Laptop Dell Vostro 13 5320 M32DH1",
        image: "../../../image/pc_sample.png",
        category: "Dell Vostro"
    },
    {
        name: "Laptop Dell Vostro 5320 V3I7005W",
        image: "../../../image/pc_sample.png",
        category: "Dell Vostro"
    },
    
]

function getItems() {
    return categoryItems
}

function setItems(newItems) {
    categoryItems = newItems
}

export {getItems, setItems}