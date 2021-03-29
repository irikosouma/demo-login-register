import styled from 'styled-components'

const Bound = styled.div`
    width: 780px;
    height: 747px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 77px;
    .title{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 50px;
        margin-bottom: 57px;
        .p-title{
            width: 100%;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 50px;
            text-align: center;
            color: #191919;
            position: absolute;
            :nth-child(1){
                top: 0;
                left: 0;
            }
            :nth-child(2){
                top: 0;
                left: 100%;
            }
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .login-show{
            left: 0 !important;
        }
        .login-hide{
            left: -100% !important;
        }
        .register-show{
            left: 0 !important;
        }
        .register-hide{
            left: 100% !important;
        }
    }
    .toggle{
        position: relative;
        overflow: hidden;
        width: 524px;
        height: 72px;
        margin-bottom: 68px;
        border-radius: 10px;
        .toggle-bar{
            border: 1px solid #9FACBD;
            box-sizing: border-box;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .div-toggle{
                width: 50%;
                height: 100%;
                z-index:1;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                display: flex;
                p{
                    transition: 0.6s color;
                    font-size: 36px;
                    line-height: 38px;
                }
            }
            .active{
                p{
                    color: #FFFFFF;
                }
            }
        }
        .slider{
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(106.98deg, #184DA1 -2.26%, #1279DA 74.44%);
            border-radius: 10px;
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .move-left{
            left: 0
        }
        .move-right{
            left: 50%
        }
    }
    .form-container{
        width: 100%;
        flex: 1;
        height: fit-content;
        position: relative;
        overflow: hidden;
        input[type=text], input[type=password] {
            width: 600px;
            height: 90px;
            background: #FFFFFF;
            border: 1px solid #9FACBD;
            box-sizing: border-box;
            border-radius: 10px;
            outline: none;
            padding: 0 20px;
            font-size: 30px;
            line-height: 31px;
            color: #1C1C1C;
            :focus{
                border: 2px solid #184DA2;    
            }
        }
        input[type=submit]{
            width: 600px;
            height: 80px;
            background: linear-gradient(106.98deg, #184DA1 -2.26%, #1279DA 74.44%);
            border-radius: 6px;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 38px;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            margin: 60px 0 30px;
        }
        .login-show{
            left: 0;
        }
        .login-hide{
            left: -100%;
        }
        .register-show{
            left: 0;
        }
        .register-hide{
            left: 100%;
        }
    }
`

export { Bound }