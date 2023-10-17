export const template = `
    <div class="{{wrapper_avatar_class}}" style="width: {{avatar_size}}; height: {{avatar_size}}">
        {{#if avatar}}
            <img src="{{avatar}}" alt="">
        {{/if}}
    </div>
`;
