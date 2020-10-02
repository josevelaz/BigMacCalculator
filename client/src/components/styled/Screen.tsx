import styled from "@emotion/styled"

export const Screen = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  z-index: 2;
`

export const Section = styled.div`
  display: flex
  flex: 1;
  flex-grow: 1;
  border-width: 2;
  z-index: 2;
  text-align: center;
  justify-content: center;
}}
`
export const Background = styled.div`
  width: 100vw;
  background-color: #fff9a5;
  background-image: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20560%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M338.997%2098.812c23.24%200%2042.091%2098.046%2042.091%20219.132h33.912c0-130.362-34.211-235.888-76.103-235.888-23.938%200-45.083%2031.618-59.047%2081.289-13.964-49.671-35.109-81.289-58.847-81.289-41.891%200-76.003%20105.427-76.003%20235.789h33.912c0-121.086%2018.652-219.032%2041.891-219.032%2023.24%200%2042.091%2090.565%2042.091%20202.276h33.713c0-111.71%2018.951-202.276%2042.191-202.276%22%20fill%3D%22%23fff87d%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: -25% -50%;
  height: 68vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`
