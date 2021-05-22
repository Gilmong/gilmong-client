import React, {useState} from "react";
import styled from "styled-components";
import DreamCanvas from "../../components/upload/DreamCanvas";
import ButtonBack from '../../assets/uploadpage/ButtonBack.svg';
import ButtonUpload from '../../assets/uploadpage/ButtonUpload.svg';
import Logo from '../../assets/uploadpage/Logo.svg';

const DetailForm = ({getUserData}) => {
    
    const [inputs, setInputs] = useState({
        dreamName: "",
        dreamKeyword: "",
        dreamPrice: "",
        dreamDescription: ""
    })

    const handleChange = (e) => {
        console.log(0);
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserData(inputs);
        setInputs({
            dreamName: "",
            dreamKeyword: "",
            dreamPrice: "",
            dreamDescription: ""
        });
    };

    return (
        <DetailFormWrap>
            <div className="header">
                <div className="header__front">
                    <img className="header__front--back" src={ButtonBack} alt="" />
                    <img className="header__front--logo" src={Logo} alt="" />
                </div>
                <img className="header__back--upload" src={ButtonUpload} alt="" onClick={handleSubmit}/>
            </div>
            <div className="detail">
                <DreamCanvas className="detail__canvas" />
                <div className="detail__info">
                    <form>
                        <input
                        className="detail__info--form" 
                        name="dreamName"
                        type="text"
                        value={inputs.dreamName}
                        onChange={handleChange}
                        placeholder="길몽 이름"
                        />
                    </form>
                    <form>
                        <input
                        className="detail__info--form" 
                        name="dreamKeyword"
                        type="text"
                        value={inputs.dreamKeyword}
                        onChange={handleChange}
                        placeholder="길몽 키워드"
                        />
                    </form>
                    <form>
                        <input
                        className="detail__info--form" 
                        name="dreamPrice"
                        type="number"
                        value={inputs.dreamPrice}
                        onChange={handleChange}
                        placeholder="경매 시작가"
                        />
                    </form>
                    <form>
                        <textarea
                        className="detail__info--form"
                        id="last"
                        name="dreamDescription"
                        type="text"
                        value={inputs.dreamDescription}
                        onChange={handleChange}
                        placeholder="길몽 내용"
                        />
                    </form>
                </div>
            </div>
        </DetailFormWrap>
    );
};

export default DetailForm;

const DetailFormWrap = styled.div`
    /* border-top: 0.1rem solid;
    margin-top: 3.5rem; */
    .header {
        width: 141.7rem;
        height: 15rem;
        /* margin-top: 3.5rem; */
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__front {
            &--back {
                width: 5rem;
                height: 5rem;
            }

            &--logo {
                width: 16.116rem;
                height: 4.745rem;
            }
        }

        &__back {
            width: 18rem;
            height: 6.5rem;
        }
    }

    .detail {
        width: 140.1rem;
        height: 57rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__info {
            &--form {
                width: 33rem;
                height: 5rem;
                margin-top: 1.6rem;
                font-size: 2.4rem;
            }

            #last {
                height: 37rem;
            }
        }
    }
`;