import * as Symbols from "./symbols";
import { xmlEscape } from "@/util/security";

/**
 * @param {Object} params
 * @param {string} params.icon
 * @param {string} params.label
 * @param {string} params.url
 * @param {boolean | undefined} params.isExternal
 */
export function LinkResult(params) {
  return {
    label: params.label,
    url: params.url,
    render: () => {
      return `<a class="jenkins-command-palette__results__item" href="${xmlEscape(
        params.url,
      )}">
        <div class="jenkins-command-palette__results__item__icon">${
          params.icon
        }</div>
        ${xmlEscape(params.label)}
        ${params.isExternal ? Symbols.EXTERNAL_LINK : ""}
    </a>`;
    },
  };
}
