import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        <p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>450</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>342</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>32</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    {/*<p style={{fontSize: media(16, 18)}}> Вот уже 38 лет наша школа распахивает свои двери учителям, ученикам и их родителям. И первый*/}
                    {/*    человек который встречает их на пороге школы — это директор. Как важно иметь в школе*/}
                    {/*    руководителя, который смог организовать и направить всю деятельность коллектива педагогов и*/}
                    {/*    учеников в нужное русло. На протяжении этих лет нашу школу возглавляли мудрые и талантливые,*/}
                    {/*    инициативные люди.</p>*/}
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>Жар-Башы айылында мектептин ачылышы биринчи колхоз уюштурулган 1935-1936-жылдарга
                                    туура келет. Анда мектеп 1-2-класстын гана базасында болуп, алгачкы мугалимдер
                                    Сагынбаев, Орозбаевдер болушкан. Кийинчерээк 1939-1941-жылдары чачкын жайланышкан
                                    кыштакчалар Жар-Башы айылына къч\р\л\п , ирилештирилген колхоз “Теёдик” деп аталат.
                                    1941-1953-жылдары 3 жылдык баштооч мектеп болгон. 1953-1957-жылдары 4 жылдык,
                                    1957-1958- жылдардан баштап 8 жылдык мектеп болгон.
                                    Ал эми 1990-жылы атайын долбоор менен курулган 280 орундуу типт\\ имаратка
                                    къч\р\л\п, орто мектепке айланган. Жаёы мектепке “Тендик” орто мектебинин
                                    б\т\р\\ч\с\, ооган согушуна катышып, анын кесепетинен каза болгон жоокер
                                    интернационалист Нажимидин Кармышевдин ысымы ыйгарылган. Мектепте алгачкы директор
                                    болуп 1935-1941-жылдары Сагынбаев аттуу мугалим иштесе, андан кийин Орунбаев, Акимов
                                    Мамыт, Сатаркулов, Туратов Мамарасул, Мааткеримов Асамидин, Досова Марипат,
                                    Исмаилова Г\лбара, Кожоева Курманб\б\, Шакирова Галдар, Жумабекова Мария,
                                    1987-2001-жылдары Къкъев Абдилда, 2001-2005-жылдары Миталипова Мейликан,
                                    2005-2008-жылдары Мусаев Эсен мектепти жетектеп келишти. 2008-2015-жылдары
                                    Мамажакыпова Эркинг\л , 2015-2021-жылдары Исмаилова Ирсалат, 2021-жылдан тартып
                                    Туратбеков Эгемберди Абдылакович директор болуп иштеп келе жатат.
                                    Учурда 519 окуучу билим алып, 60 мугалим эмгектен\\дъ.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;