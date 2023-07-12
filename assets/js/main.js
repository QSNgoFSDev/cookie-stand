let containerImgTotal = document.createElement('section');
containerImgTotal.setAttribute('class','fish-img-container fish-img-container2')
let mainInJavaScript = document.getElementsByTagName('main')[0];
mainInJavaScript.appendChild(containerImgTotal);

function CookieStandImg(imgTitle, imgPath) {
    this.imgTitle = imgTitle;
    this.imgPath = imgPath;

}

const salmon = new CookieStandImg('Salmon', 'assets/img/salmon.png');
const chinhook = new CookieStandImg('Chinook', 'assets/img/chinook.jpg')
const family = new CookieStandImg('family', 'assets/img/family.jpg')
const fish = new CookieStandImg('fish', 'assets/img/fish.jpg')

const frostedCookie = new CookieStandImg('frosted-cookie', 'assets/img/frosted-cookie.jpg')

const shirt = new CookieStandImg('shirt', 'assets/img/shirt.jpg')

const cutter = new CookieStandImg('cutter', 'assets/img/cutter.jpeg')






let fishImgUpdate = [salmon, fish, chinhook, family, fish, cutter, frostedCookie]

function CookieStandImgRenderUpdate(fishImgUpdate) {


    



    this.render = function () {
        

        
        for (let i = 0; i < fishImgUpdate.length; i++) {
            let divImg = document.createElement('div');
            containerImgTotal.appendChild(divImg);


            let titleImgRender = document.createElement('h2');
            titleImgRender.innerHTML = fishImgUpdate[i].imgTitle;
            divImg.appendChild(titleImgRender);

            let imgPathRender = document.createElement('img');
            imgPathRender.src = fishImgUpdate[i].imgPath;
            divImg.appendChild(imgPathRender);
        }





    }
}

let renderHtmlImg = new CookieStandImgRenderUpdate(fishImgUpdate);
renderHtmlImg.render()