export const template = `
  {{#if labelText}}
    <label class="{{labels_wrapper_class}}" for="{{name}}">
        {{labelText}}
    </label>
  {{else}}
    <div></div>
  {{/if}}
`;
