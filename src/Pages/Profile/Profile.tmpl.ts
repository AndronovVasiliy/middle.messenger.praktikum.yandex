export const template = `
    <main class="{{wrapper_profile_class}}">
        {{{backArrow}}}
        <div class="{{profile_main_class}}">
            <div class="{{profile_main_avatar_name_block_class}}">
                {{{avatar}}}
                {{{header}}}
            </div>
            <div class="{{profile_main_info_class}}">
                <form class="{{profile_main_form_class}}" name="profile">
                  {{{emailInput}}}
                  {{{loginInput}}}
                  {{{firstNameInput}}}
                  {{{secondNameInput}}}
                  {{{displayNameInput}}}
                  {{{phoneInput}}}
                </form>
                <ul class="{{profile_main_additional_button_class}}">
                    <li class="{{additional_button_element_class}}">
                        {{{linkChangeProfileData}}}
                    </li>
                    <li class="{{additional_button_element_class}}">
                        {{{linkChangePassword}}}
                    </li>
                    <li class="{{additional_button_element_class}}">
                        {{{linkLogOut}}}
                    </li>     
                </ul>
            </div>
        </div>
    </main>
`;
