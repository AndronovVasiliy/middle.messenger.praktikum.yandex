export default `
    <div class="{{wrapper_avatar_class}}" style="width: {{avatar_width}}; height: {{avatar_height}}">
        {{#if avatar}}
            <img src="{{avatar}}" alt="">
        {{/if}}
    </div>
`
