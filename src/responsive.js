import { css } from "styled-components";

export const mobile = (props) => {
  console.log("responsive", props)
  return css`
    @media only screen and (max-width: 540px) {
      ${props}
    }
  `;
};