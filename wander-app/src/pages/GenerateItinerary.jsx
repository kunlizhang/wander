import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import CategoryGrid from "../components/CategoryGrid";
import { useNavigate } from "react-router-dom"; 
import categories from "../backend/categories.json";
import OtherButton from "../components/OtherButton";


<div style="width: 100%; height: 100%; position: relative; background: white">
    <div style="left: 24px; top: 130px; position: absolute; color: #0C0C20; font-size: 22px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Jan 1 </div>
    <div style="width: 349px; height: 0px; left: 20px; top: 112px; position: absolute; border: 2px #43AA8B solid"></div>
    <div style="width: 27px; height: 27px; left: 366px; top: 157px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0; background: #0C0C20"></div>
    <div style="width: 15px; height: 487px; left: 63px; top: 186px; position: absolute">
        <div style="width: 0px; height: 479.85px; left: 8px; top: 7.15px; position: absolute; border: 3px #43AA8B solid"></div>
        <div style="width: 15px; height: 15.31px; left: 0px; top: 0px; position: absolute; background: #325D59; border-radius: 9999px"></div>
        <div style="width: 15px; height: 15.31px; left: 0px; top: 138px; position: absolute; background: #325D59; border-radius: 9999px"></div>
        <div style="width: 15px; height: 15.31px; left: 0px; top: 102px; position: absolute; background: #325D59; border-radius: 9999px"></div>
        <div style="width: 15px; height: 15.31px; left: 0px; top: 276.53px; position: absolute; background: #325D59; border-radius: 9999px"></div>
        <div style="width: 15px; height: 15.31px; left: 0px; top: 410px; position: absolute; background: #325D59; border-radius: 9999px"></div>
    </div>
    <div style="left: 24px; top: 186px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">5pm</div>
    <div style="left: 16px; top: 324px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">5:30pm</div>
    <div style="left: 16px; top: 461px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">6:30pm</div>
    <div style="left: 19px; top: 594px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">7pm</div>
    <div style="width: 25px; height: 25px; left: 79px; top: 184px; position: absolute">
        <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 14.58px; height: 20.83px; left: 5.21px; top: 2.08px; position: absolute; background: black"></div>
        <div style="width: 5.21px; height: 5.21px; left: 9.90px; top: 7.29px; position: absolute; background: black"></div>
    </div>
    <div style="left: 104px; top: 182px; position: absolute; color: black; font-size: 20px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Pike Street Market</div>
    <div style="width: 25px; height: 25px; left: 78px; top: 456px; position: absolute">
        <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 14.58px; height: 20.83px; left: 5.21px; top: 2.08px; position: absolute; background: black"></div>
        <div style="width: 5.21px; height: 5.21px; left: 9.90px; top: 7.29px; position: absolute; background: black"></div>
    </div>
    <div style="left: 103px; top: 456px; position: absolute; color: black; font-size: 20px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Gum Wall</div>
    <div style="left: 85px; top: 248px; position: absolute; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
        <div style="width: 67px; height: 24px; position: relative">
            <div style="width: 67px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 35px; height: 12px; left: 16px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Quirky </div>
        </div>
        <div style="width: 102.09px; height: 24px; position: relative">
            <div style="width: 102.09px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 92px; height: 12px; left: 5px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">LGBTQIA+ Owned</div>
        </div>
        <div style="width: 68px; height: 24px; position: relative">
            <div style="width: 68px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 51.18px; height: 12px; left: 8.77px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Local Gem</div>
        </div>
    </div>
    <div style="width: 25px; height: 25px; left: 79px; top: 321px; position: absolute">
        <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 14.58px; height: 20.83px; left: 5.21px; top: 2.08px; position: absolute; background: black"></div>
        <div style="width: 5.21px; height: 5.21px; left: 9.90px; top: 7.29px; position: absolute; background: black"></div>
    </div>
    <div style="left: 84px; top: 384px; position: absolute; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
        <div style="width: 70px; height: 24px; position: relative">
            <div style="width: 70px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 47.72px; height: 12px; left: 10.66px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Dining</div>
        </div>
        <div style="width: 79px; height: 24px; position: relative">
            <div style="width: 79px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 55px; height: 12px; left: 11px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Classic</div>
        </div>
        <div style="width: 91px; height: 24px; position: relative">
            <div style="width: 91px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 76px; height: 15px; left: 8px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Upscale</div>
        </div>
    </div>
    <div style="left: 104px; top: 285px; position: absolute; color: black; font-size: 16px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">10 minute walk</div>
    <div style="left: 104px; top: 321px; position: absolute; color: black; font-size: 20px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Etta’s Seafood</div>
    <div style="width: 271px; left: 85px; top: 209px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">One of the oldest public markets in the U.S. See the fish get thrown around at the classic fish market!</div>
    <div style="left: 84px; top: 516px; position: absolute; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
        <div style="width: 73px; height: 24px; position: relative">
            <div style="width: 73px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 45px; height: 12px; left: 14px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Local</div>
        </div>
        <div style="width: 74px; height: 24px; position: relative">
            <div style="width: 74px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 64px; height: 12px; left: 5px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Quirky</div>
        </div>
        <div style="width: 100px; height: 24px; position: relative">
            <div style="width: 100px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 84px; height: 12px; left: 7px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Instagrammable</div>
        </div>
    </div>
    <div style="left: 84px; top: 654px; position: absolute; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
        <div style="width: 73px; height: 24px; position: relative">
            <div style="width: 73px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 45px; height: 12px; left: 14px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Popular</div>
        </div>
        <div style="width: 79px; height: 24px; position: relative">
            <div style="width: 79px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 64px; height: 12px; left: 8px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Dessert</div>
        </div>
        <div style="width: 78px; height: 24px; position: relative">
            <div style="width: 78px; height: 24px; left: 0px; top: 0px; position: absolute; background: #788FCE; border-radius: 20px"></div>
            <div style="width: 58.71px; height: 12px; left: 10.06px; top: 6px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Must See</div>
        </div>
    </div>
    <div style="width: 271px; left: 84px; top: 481px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Trendy spot which can be a bit disgusting if you think about it too hard...</div>
    <div style="width: 25px; height: 25px; left: 79px; top: 592px; position: absolute">
        <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 14.58px; height: 20.83px; left: 5.21px; top: 2.08px; position: absolute; background: black"></div>
        <div style="width: 5.21px; height: 5.21px; left: 9.90px; top: 7.29px; position: absolute; background: black"></div>
    </div>
    <div style="left: 104px; top: 592px; position: absolute; color: black; font-size: 20px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Fran’s Chocolates</div>
    <div style="width: 271px; left: 85px; top: 625px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Yummy chocolates that will satisfy any sweet tooth.</div>
    <div style="width: 271px; left: 85px; top: 346px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">A world class seafood restaurant on the oceanside. Be sure to try the lobster roll!</div>
    <div style="width: 15px; height: 15px; left: 63px; top: 415px; position: absolute; background: #325D59; border-radius: 9999px"></div>
    <div style="left: 104px; top: 416px; position: absolute; color: black; font-size: 16px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">15 minute bus</div>
    <div style="width: 15px; height: 15px; left: 64px; top: 553px; position: absolute; background: #325D59; border-radius: 9999px"></div>
    <div style="left: 104px; top: 551px; position: absolute; color: black; font-size: 16px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">5 minute walk</div>
    <div style="width: 22px; height: 22px; left: 81px; top: 284px; position: absolute">
        <div style="width: 22px; height: 22px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 11.92px; height: 19.71px; left: 5.50px; top: 1.38px; position: absolute; background: black"></div>
    </div>
    <div style="width: 22px; height: 22px; left: 81px; top: 550px; position: absolute">
        <div style="width: 22px; height: 22px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 11.92px; height: 19.71px; left: 5.50px; top: 1.38px; position: absolute; background: black"></div>
    </div>
    <div style="width: 24px; height: 24px; left: 79px; top: 415px; position: absolute">
        <div style="width: 24px; height: 24px; left: 0px; top: 0px; position: absolute"></div>
        <div style="width: 16px; height: 19px; left: 4px; top: 2px; position: absolute; background: black"></div>
        <div style="width: 3px; height: 3px; left: 7px; top: 13px; position: absolute; background: black"></div>
        <div style="width: 3px; height: 3px; left: 14px; top: 13px; position: absolute; background: black"></div>
    </div>
    <div style="padding: 8px; left: 12px; top: 57px; position: absolute; background: white; border-radius: 30px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div style="width: 20px; height: 20px; position: relative">
            <div style="width: 13.44px; height: 12.50px; left: 2.81px; top: 3.44px; position: absolute; background: #24292E"></div>
        </div>
    </div>
    <div style="left: 66px; top: 57px; position: absolute; color: #0C0C20; font-size: 22px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Jimmy’s Seattle Adventure</div>
    <div style="width: 17.27px; height: 23.75px; left: 347px; top: 59px; position: absolute; background: #0C0C20"></div>
    <div style="left: 165px; top: 86px; position: absolute; color: black; font-size: 12px; font-family: Satoshi; font-weight: 400; word-wrap: break-word">Jan 1 - Jan 3</div>
    <div style="width: 134px; height: 5px; left: 128px; top: 830px; position: absolute; background: black; border-radius: 100px"></div>
    <div style="width: 390px; height: 87px; padding-top: 20px; padding-bottom: 56px; padding-left: 20px; padding-right: 20px; left: 0px; top: 779px; position: absolute; background: white; justify-content: center; align-items: center; gap: 60px; display: inline-flex">
        <div style="width: 21px; height: 21px; position: relative">
            <img style="width: 21px; height: 21px; left: 0px; top: 0px; position: absolute" src="https://via.placeholder.com/21x21" />
        </div>
        <img style="width: 24px; height: 24px" src="https://via.placeholder.com/24x24" />
        <div style="width: 21px; height: 21px; position: relative; opacity: 0.20">
            <div style="width: 21px; height: 19.60px; left: 0px; top: 1.31px; position: absolute; background: black"></div>
            <div style="width: 10.50px; height: 7.88px; left: 5.25px; top: 6.56px; position: absolute; background: black"></div>
        </div>
        <div style="width: 24px; height: 24px; position: relative; opacity: 0.20">
            <div style="width: 14px; height: 20px; left: 5px; top: 2px; position: absolute; background: #24292E"></div>
        </div>
    </div>
    <img style="width: 390px; height: 844px; left: 0px; top: 0px; position: absolute" src="https://via.placeholder.com/390x844" />
    <div style="width: 331.16px; height: 11.41px; left: 40.17px; top: 20.33px; position: absolute">
        <img style="width: 24.33px; height: 11.33px; left: 306.83px; top: 0px; position: absolute; opacity: 0.35" src="https://via.placeholder.com/24x11" />
        <img style="width: 326.83px; height: 11.41px; left: 0px; top: 0px; position: absolute" src="https://via.placeholder.com/327x11" />
    </div>
    <div style="width: 334px; height: 50px; left: 24px; top: 732px; position: absolute">
        <div style="width: 149px; height: 50px; padding-top: 12px; padding-bottom: 12px; padding-left: 30px; padding-right: 10px; left: 0px; top: 0px; position: absolute; background: #43AA8B; border-radius: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div style="width: 24px; height: 24px; background: #FAFFFD"></div>
            <div style="color: #FAFFFD; font-size: 18px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Edit</div>
        </div>
        <div style="width: 150px; height: 50px; padding-top: 8px; padding-bottom: 8px; padding-left: 20px; padding-right: 5px; left: 184px; top: 0px; position: absolute; background: #43AA8B; border-radius: 10px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
            <div style="width: 24px; height: 24px; background: #FAFFFD"></div>
            <div style="color: #FAFFFD; font-size: 18px; font-family: Satoshi; font-weight: 700; word-wrap: break-word">Save</div>
        </div>
    </div>
</div>