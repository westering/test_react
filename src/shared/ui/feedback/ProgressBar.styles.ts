import styled from '@emotion/styled'

export const Track = styled.div`
  overflow: hidden;
  height: 4px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.26);
`

export const Bar = styled.div`
  width: 35%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  animation: progressShift 1.1s ease-in-out infinite;

  @keyframes progressShift {
    0% {
      transform: translateX(-120%);
    }

    100% {
      transform: translateX(320%);
    }
  }
`
