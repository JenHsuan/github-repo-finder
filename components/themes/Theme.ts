import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
      template: {
          main: {
              color: string,
              bg: string,
              textAlign: string
          }
      },
      reposContainer:{
        basic: {
            display: string,
            font: string,
            flexWrap: string,
            marginLeft: string,
            marginTop: string
        }
      },
      repo: {
          basic: {
              border: string,
              width: string,
              transition: string,
              margin: string,
              padding: string,
              borderRadius: string,
              bg: string,
              cursor: string
          }
      },
      repoImg: {
          basic: {
            width: string,
            transform: string
          }
      },
      repoText: {
        title: {
            padding: string,
            paddingLeft: string,
            marginTop: string,
            fontSize: string,
            width:string
        },
        subtitle: {
            padding: string,
            color: string,
            fontSize: string
        }
      },
      searchBar: {
        basic: {
            marginTop: string,
            width: string,
            border: string,
            borderRadius: string
        }
      },
      searchBarContainer: {
        basic: {
            transform: string
        }
      }
    }
}

export const Theme: DefaultTheme = {
    template: {
        main: {
            color: '#ffffff',
            bg: '#000000',
            textAlign:'center'
        }
    },
    reposContainer:{
        basic: {
            display: 'flex',
            font: '14px Arial',
            flexWrap: 'wrap',
            marginLeft: '10%',
            marginTop: '5%'
        }
    },
    repo: {
        basic: {
            border: '1px solid black',
            width: '20%',
            transition: 'width 0.7s ease-out',
            margin: '3px',
            padding: '1%',
            borderRadius: '5px',
            bg:'#FAFAFA',
            cursor: 'pointer'
        },
    },
    repoImg: {
        basic: {
            width: '40%',
            transform:'translate(60%)'
        }
    },
    repoText: {
        title: {
            padding: '3px',
            fontSize: '20px',
            paddingLeft: '10%',
            marginTop: '5%',
            width:'90%'
        },
        subtitle: {
            padding: '10%',
            fontSize: '18px',
            color: 'gray'
        }
    },
    searchBar: {
        basic: {
            marginTop: '5%',
            width: '20%',
            border: '1px solid black',
            borderRadius: '5px'
        }
    },
    searchBarContainer: {
        basic: {
            transform:'translate(10%)'
        }
    }
};
