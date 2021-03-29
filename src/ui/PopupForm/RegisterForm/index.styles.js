import styled from 'styled-components'

const Bound = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    width: calc(100% - 180px);
    padding: 0 90px;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    form{
        display: flex;
        flex-direction: column;
        input[type=text]{
            margin-bottom: 30px;
        }
        input[type=password]{
            margin-bottom: 23px;
        }
        input[type=password]:nth-child(3){
            margin-bottom: 0;
        }
        p{
            font-size: 30px;
            line-height: 31px;
            color: #191919;
        }
    }
`

export { Bound }