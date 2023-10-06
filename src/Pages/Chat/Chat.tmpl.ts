import { SearchField } from '@components';
import { ListUserChat } from './ListUserChat';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { SendMessage } from './SendMessage';

export default `
    <main class="{{wrapper_chat_class}}">
        <div class="{{chat_left_column_class}}">  
            ${SearchField()}    
            ${ListUserChat()}
        </div>
        <div class="{{chat_right_column_class}}">
             ${ChatHeader('Петр', 'https://sun9-61.userapi.com/impg/qmcoh3TbIgkqK9ku2XO2LRZ7p3tprephE9hvIw/'
    + 'TcIt6mLooRA.jpg?size=1060x1080&quality=95&sign=000bd8f151689fdbc81485ee6b7eb636&c_uniq_'
    + 'tag=37qWgTSHgMsO9lRMm_PD2goS3IrMvvKQHKma90_raBQ&type=album')}
             ${ChatMessages()}
             ${SendMessage()}
        </div>
    </main>
`;
