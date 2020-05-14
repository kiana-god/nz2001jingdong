// titleWidth,titleHeight,titleColor,
//     titleHighColor,titles,contentColor,contents  这些用对象来实现数据传输

function Tab(boxDom, obj) {
    //容器对象，标题容器，内容容器，标题的宽度，标题的高度，标题的颜色，标题高亮的颜色，
    //标题的内容对象，内容的对象，
    this.boxDom = boxDom

    // this.titleWidth=titleWidth
    // this.titleHeight=titleHeight
    // this.titleColor=titleColor
    // this.titleHighColor=titleHighColor
    // this.titles=titles
    // this.contents=contents
    // this.contentColor=contentColor
    //这下面的都是默认值了，每次传参都把参数传入默认值里面，和默认值不一样的就覆盖，一样的用默认值的
    // let defaultObj={
    //     titleWidth:120,
    //     titleHeight:40,
    //     titleColor:"yellow",
    //     titleHighColor:"pink",
    //     titles:["科技", "探索", "NZ2001"],
    //     contentColor:"gray",
    //     contents:["科技科技科技科技", "探索探索探索", "NZ2001NZ2001NZ2001"]
    // }
    // for(let key in obj){
    //     defaultObj[key]=obj[key]
    // }
    let defaultObj = {
        titleWidth: 120,
        titleHeight: 40,
        titleColor: "gray",
        titleHighColor: "purple",
        titles: ["科技", "探索"],
        contentColor: "#ededed",
        contents: ["科技科技科技科技", "探索探索探索"]
    }

    for (let key in obj) { //key=titles，titleHeight，titleWidth，contents
        defaultObj[key] = obj[key]
    }
    for (let key in defaultObj) {
        this[key] = defaultObj[key];
    }


    // for(let key in obj){
    //     this[key]=obj[key]
    // }
    //下面是内部计算
    this.titleDom = null
    this.contentDom = null

    this.contentWidth = this.boxDom.offsetWidth
    this.contentHeight = this.boxDom.offsetHeight - this.titleHeight


    //创建使用方法
    //1.dom
    this.createDom = function () {
        {//标题部分
            this.titleDom = document.createElement("ul")
            this.titleDom.style.cssText = `
        width:${this.boxDom.offsetWidth}px;
        height:${this.titleHeight}px;
        background-color:${this.titleColor};
        `
            this.boxDom.appendChild(this.titleDom)
            for (let j = 0; j < this.titles.length; j++) {
                oLiDom = document.createElement("li")
                oLiDom.style.cssText = `
            width:${this.titleWidth}px;
            height:${this.titleHeight}px;
            float:left;
            line-height:${this.titleHeight}px;
            text-align:center;
            `
                if (j == 0) {
                    oLiDom.style.backgroundColor = this.titleHighColor
                }
                oLiDom.innerHTML = this.titles[j]
                this.titleDom.appendChild(oLiDom)
            }
        }
        {//内容部分
            this.contentDom = document.createElement("ul")
            this.contentDom.style.cssText = `
        width:${this.contentWidth}px;
        height:${this.contentHeight}px;
        
        `
            this.boxDom.appendChild(this.contentDom)
            for (let j = 0; j < this.contents.length; j++) {
                oLiDom = document.createElement("li")
                oLiDom.style.cssText = `
            width:${this.contentWidth}px;
            height:${this.contentHeight}px;
            background-color:${this.contentColor};
            display:none;
            `
                if (j == 0) {
                    oLiDom.style.display = "block"
                }
                oLiDom.innerHTML = this.contents[j]
                this.contentDom.appendChild(oLiDom)
            }
        }
    }
    //2.点击事件
    this.addEvent = function () {
        let oLiTitles = this.titleDom.children
        let oLiContents = this.contentDom.children
        for (let i = 0; i < oLiTitles.length; i++) {
            oLiTitles[i].onclick = () => {
                //改变标题的颜色
                for (let j = 0; j < oLiTitles.length; j++) {
                    oLiTitles[j].style.backgroundColor = this.titleColor
                }
                oLiTitles[i].style.backgroundColor = this.titleHighColor
                //改变内容的显示状态
                for (let j = 0; j < oLiContents.length; j++) {
                    oLiContents[j].style.display = "none"
                }
                oLiContents[i].style.display = "block"
            }
        }
    }
    //直接调用方法
    this.createDom()
    this.addEvent()
}



//Tab用innHTML插入的方式
function Tab2(boxDom, obj) {

    {
    this.boxDom = boxDom
        // for(let key in obj){//用forin遍历obj，把键赋给key。再把每一个obj【key】，赋给this【key】
        //     this[key]=obj[key]
        // }
        //key是键也是属性，那么obj.key 就是要obj的属性。因为key遍历过obj,所以它所有属性都给了key
        //下面是内部计算
        this.titleDom = null
        this.contentDom = null
        for (let key in obj) {
            this[key] = obj[key];
        }
        this.contentWidth = this.boxDom.offsetWidth
        this.contentHeight = this.boxDom.offsetHeight - this.titleHeight
    }
    //创建使用方法
    //1.创建dom
    this.createDom = function () {
        let htmlstr = ""
        {//标题部分

            htmlstr += `<ul
                style="
                width:${this.boxDom.offsetWidth}px;
                height:${this.titleHeight}px;
                background-color:${this.titleColor}">
                `
            for (let j = 0; j < this.titles.length; j++) {

                htmlstr += `
                <li style="float: left;
                            width: ${this.titleWidth}px;
                            height: ${this.titleHeight}px;
                            line-height: ${this.titleHeight}px;
                            text-align: center;
                            background-color:${j == 0 ? this.titleHighColor : this.titleColor}
                            ">
                    ${this.titles[j]}
                </li>`
            }

            htmlstr += "</ul>"
            // htmlstr += `</ul>`
        }

        {//内容部分
            htmlstr += `<ul
                style="
                width:${this.contentWidth}px;
                height:${this.contentHeight}px;">
                
                `
            for (let j = 0; j < this.contents.length; j++) {
                htmlstr += `<li
                    style="
                    width:${this.contentWidth}px;
                    height:${this.contentHeight}px;
                    background-color:${this.contentColor};
                    display:${j == 0 ? "block" : "none"};
                    ">${this.contents[j]}</li>`
            }
            htmlstr += `</ul>`
            // htmlstr+="</ul>"
        }
        this.boxDom.innerHTML = htmlstr
    }
    //2.点击事件
    this.addEvent = function () {
        let oLiTitles = this.boxDom.firstElementChild.children
        let oLiContents = this.boxDom.lastElementChild.children
        for (let i = 0; i < oLiTitles.length; i++) {
            oLiTitles[i].onclick = () => {
                //改变标题的颜色
                for (let j = 0; j < oLiTitles.length; j++) {
                    oLiTitles[j].style.backgroundColor = this.titleColor
                }
                oLiTitles[i].style.backgroundColor = this.titleHighColor
                //改变内容的显示状态
                for (let j = 0; j < oLiContents.length; j++) {
                    oLiContents[j].style.display = "none"
                }
                oLiContents[i].style.display = "block"
            }
        }
    }
    //直接调用方法
    this.createDom()
    this.addEvent()
}