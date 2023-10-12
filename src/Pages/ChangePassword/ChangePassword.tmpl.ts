export const template = `
    <main class="{{wrapper_change_password_class}}">
        {{{backArrow}}}
        <div class="{{change_password_main_class}}">
            <div class="{{password_main_avatar_name_block_class}}">
                {{{avatar}}}
                {{{header}}}
            </div>
            <div class="{{change_password_info_class}}">
                <form class="{{info_form_class}}">
                    {{{oldPasswordInput}}}
                    {{{passwordInput}}}
                    {{{repeatPasswordInput}}}
                    {{{saveButton}}}
                </form>
            </div>
        </div>
    </main>
`;
