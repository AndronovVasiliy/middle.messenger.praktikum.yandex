export const template = `
  <input
            class="{{input_wrapper_class}}"
            rtl
            placeholder="{{placeholder}}"
            name={{name}}
            type={{type}}
            id="{{name}}"
            {{#if disabled}}
              {{disabled}}
            {{/if}}
            value={{value}}
  >`;
