import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        {/*<a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-envelope"/> balanchaevbalancha@gmail.com</span></a>*/}
                        {/*<a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-brands fa-instagram"/> balancha_mektebi</span></a>*/}
                        {/*<a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-brands fa-facebook-f"/> balancha_mektebi</span></a>*/}
                        <a href="tel:0779-98-81-72"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-phone"/> 0779-98-81-72</span></a>
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-location-dot"/> Жар-Башы айылы.Кырчын кочосу 41</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.949101176951!2d72.10187633882325!3d39.51349192916412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bec88cec7a2e41%3A0x5484e9f600773267!2z0JbQsNGALdCR0LDRiNGL!5e1!3m2!1sru!2skg!4v1654079480483!5m2!1sru!2skg"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen="" loading="lazy"

                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;