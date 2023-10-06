export default `
    <div class="{{wrapper_input_class}}">
        <input
            class="{{input_class}}"
            rtl
            placeholder="{{placeholder}}"
            name={{name}}
            type={{type}}
            value="{{value}}"
            id="{{name}}"
            {{#if disabled}}
            {{disabled}}
            {{/if}}
        >
        {{#if labelText}}
            <label class="{{input_labels_class}}" for="{{name}}">
                {{labelText}}
            </label>
        {{/if}}
    </div>
`;
