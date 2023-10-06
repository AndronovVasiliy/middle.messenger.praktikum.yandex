import Clip from '@Icons/Clip.svg';
import SendButton from '@Icons/SendButton.svg';

export default `
    <div class="{{wrapper_sendMessage_class}}">
        <form class="{{sendMessage_form_class}}">
            <img src="${Clip}" alt=""> 
            <input class="{{input_sendMessage_class}}" type="text" placeholder="Сообщение">
            <button class="{{send_button_class}}" type="reset">
                <img class="{{button_img_class}}" src="${SendButton}" alt="">
            </button>        
        </form>
    </div>
`;
