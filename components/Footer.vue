<template>
  <div class="footer z-10 h-screen relative w-full bg-black-100 border-t border-black-100">
    <div class="bg-white flex items-center justify-center block-1 contact">
        <h5 class="heading5">Kontakt</h5>
        <ul>
            <li>quintbike s.r.o.</li>
            <li>marek@quintbike.cz</li>
            <li>+420 765 346 943</li>
        </ul>
    </div>

    <div class="bg-white flex items-center justify-center block-2 newsletter">
        <div class="newsletter__wrapper">
            <h5 class="heading5">Newsletter</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <input type="email" placeholder="email..">
            <Button
                type="secondary"
                label="Odeslat"
            />
            <p class="conditions">Odběrem souhlasíte se zpracováním osobních údajů a všeobecnými obchodními podmínkami společnosti</p>
        </div>
    </div>

    <div class="bg-white flex items-center justify-center block-3 socials">
        <p class="socials__link">facebook</p>
    </div>

    <div class="bg-white flex items-center justify-center block-4 socials">
        <p class="socials__link">strava</p>
    </div>

    <div class="bg-white flex items-center justify-center block-5 socials">
        <p class="socials__link">instagram</p>
    </div>

    <div class="bg-white flex items-center justify-center block-6 bottom">
        <p>quintbike&#169;</p>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
    name: 'Footer'
}
</script>

<style lang="scss">

.footer {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 2fr 1fr 0.5fr; 
    gap: 1px; 
    grid-template-areas: 
        "block-1 block-1 block-1 block-2 block-2 block-2"
        "block-3 block-3 block-4 block-4 block-5 block-5"
        "block-6 block-6 block-6 block-6 block-6 block-6";

    @media (max-width: 768px) {
        grid-template-rows: 1fr 2fr 0.5fr 0.5fr; 
        grid-template-areas: 
            "block-1 block-1 block-1 block-1 block-1 block-1"
            "block-2 block-2 block-2 block-2 block-2 block-2"
            "block-3 block-3 block-4 block-4 block-5 block-5"
            "block-6 block-6 block-6 block-6 block-6 block-6";
    }

    .socials {
        position: relative;

        .socials__link {
            z-index: 1;
            transition: 0.3s ease;
        }

        &::before {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            background: #000;
            width: 100%;
            height: 0%;
            cursor: pointer;
            transition: 0.3s ease-out;          
        }

        &:hover {
            .socials__link {
                color: #fff;
            }
            &::before {
                height: 100%;
            }
        }
    }

    .block-1 {
        grid-area: block-1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 50px;
        padding-left: 60px;

        @media (max-width: 1024px) {
            padding: 20px 60px;
            justify-content: center;
        }

        li {
            font-size: 20px;
            margin-top: 30px;

            @media (max-width: 768px) {
                font-size: 0.8rem;
                margin-top: 15px;
            }
        }
    }

    .block-2 {
        grid-area: block-2;
        padding: 50px 60px;

        @media (max-width: 768px) {
            padding: 20px 60px;
        }

        .newsletter__wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            @media (max-width: 1024px) {
                justify-content: center;
            }

            p {
                margin: 30px 0;
            }

            input {
                padding: 1rem;
                width: 90%;
                font-family: 'Chillax';
                color: #000;
                font-size: 20px;
                border: none;
                border-bottom: 2px solid lighten($color: #959494, $amount: 30);
                margin-bottom: 30px;
                transition: 0.2s ease;

                &:focus {
                    outline: none;
                    border-bottom: 2px solid #959494;
                }

                @media (max-width: 768px) {
                    font-size: 1rem;
                    padding: 0.8rem;
                }
            }

            .conditions {
                font-size: 13px;
                color: #959494;
                
                @media (max-width: 768px) {
                    font-size: 0.7rem;
                }
            }
        }
    }

    .block-3 {
        grid-area: block-3;
    }

    .block-4 {
        grid-area: block-4;
    }

    .block-5 {
        grid-area: block-5;
    }

    .block-6 {
        grid-area: block-6;
    }
        
}

</style>