import Handlebars from "handlebars";
import SearchFieldTmpl from "./SearchField.tmpl.ts";
import styles from "./SearchField.module.less"

export const SearchField = () => {
    const template = Handlebars.compile(SearchFieldTmpl);

    return template({
        searchFieldClass: styles.wrapper
    })
}
