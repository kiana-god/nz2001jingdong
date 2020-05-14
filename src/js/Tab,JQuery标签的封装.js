
class Tab{
    constructor(selector, obj) {
        //1.盒子
        this.$box = $(selector) 
        //2.标题ul和li
        this.$ulTitles =  this.$box.find("ul").eq(0)
        this.$liTitles = this.$ulTitles.find("li")
        //3.内容ul和li
        this.$ulContent =  this.$box.find("ul").eq(1)
        this.$liContent = this.$ulContent.find("li")

        let defaultObj = {
            titleWidth: 120,
            titleHeight: 40,
            titleColor: "gray",
            titleHighColor: "purple",
            titles: ["科技", "人文","娱乐"],
            contentColor: "#ededed",
            contents: ["特拉斯线圈", "国际疫情跟踪","家有小猫如何照顾"],
            contentWidth:this.$box.width(),
            contentHeight:this.$box.height() - 40,
        
        }
        if(obj){
           for (let key in obj) { //key=titles，titleHeight，titleWidth，contents
            defaultObj[key] = obj[key]
            } 
        }
        
        for (let key in defaultObj) {
            this[key] = defaultObj[key];
        }
    
    this.render()
    this.addEvent()
        
    
    
    }
    //容器对象，标题容器，内容容器，标题的宽度，标题的高度，标题的颜色，标题高亮的颜色，
    //标题的内容对象，内容的对象，
    
    render(){
        //1.标题的ul
        this.$ulTitles.css({
            width:`${this.$box.width()}px`,
            height:`${this.titleHeight}px`,
            "background-color":`${this.titleColor}`,

        })
        //2.li
        this.$liTitles.css({
            width:`${this.titleWidth}px`,
            height:`${this.titleHeight}px`,
            "float":"left",
            "line-height":`${this.titleHeight}px`,
            "text-align":"center",
            "background-color":`${this.titleColor}`

        })
        this.$liTitles.eq(0).css({
            "background-color":`${this.titleHighColor}`
        })
        

        //加个默认文本，内容我懒得写了
        // for(let i = 0; i<this.titles.length;i++){
        //     this.$liTitles.eq(i).html(this.titles[i])
        // }   
        this.$liTitles.each((i)=>{
            this.$liTitles.eq(i).html(this.titles[i])
        })

        //3.内容部分ul
        this.$ulContent.css({
            width:`${this.contentWidth}px`,
            height:`${this.contentHeight}px`,
            "border":"1px solid black",


        })

        //4.内容部分li
        this.$liContent.css({
            width:`${this.contentWidth}px`,
            height:`${this.contentHeight}px`,
           " background-color":`${this.contentColor}`,
            display:"none",



        })
        //第一个显示，其他不显示
        this.$liContent.eq(0).css({
            "display":"block"
        })



    }


    addEvent() {

        //标题部分的li，内容部分的li
        this.$liTitles.click((event)=>{
            this.$liTitles.css({
                backgroundColor:this.titleColor
            });
            //点击的颜色高亮
            $(event.target).css({
                backgroundColor : this.titleHighColor
            });

            this.$liContent.css({
                "display":"none"
            })
            let index = $(event.target).index();
            this.$liContent.eq(index).css({
                "display":"block"
            })

        })




        
    }










}