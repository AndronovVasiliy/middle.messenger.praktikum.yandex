export const template = `
    <main class="{{wrapper_edit_profile_class}}">
        {{{backArrow}}}
        <div class="{{edit_profile_main_class}}">
            <div class="{{edit_profile_main_avatar_name_block_class}}">
                {{{avatar}}}
                {{{header}}}
            </div>
            <div class="{{edit_profile_main_info_class}}">
                <form class="{{edit_profile_main_form_class}}" name="profile">
                    {{{emailInput}}}
                    {{{loginInput}}}
                    {{{firstNameInput}}}
                    {{{secondNameInput}}}
                    {{{displayNameInput}}}
                    {{{phoneInput}}}
                </form>
                {{{saveButton}}}
            </div>
        </div>
    </main>
`;
