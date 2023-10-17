import Clip from '@Icons/Clip.svg';
import SendButton from '@Icons/SendButton.svg';

export const template = `
    <div class="{{wrapper_send_message_class}}">
        <form class="{{send_message_form_class}}">
            <img src="${Clip}" alt="">
            <input class="{{input_send_message_class}}" type="text" placeholder="Сообщение">
            <button class="{{send_button_class}}" type="reset">
                <img class="{{button_img_class}}" src="${SendButton}" alt="">
            </button>
        </form>
    </div>
`;
