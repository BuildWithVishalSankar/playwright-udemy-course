Section 1: Preparation
        1 - Introduction - done
    
        2 - Playwright vs Cypress - done

                Playwright pros                 |   Cypress pros
                Faster                          |   Less no of lines of code
                JS/TS/Python/Java/C#            |   Better auto-wait mechanism
                Free Parallel execution         |   Clear documentation
                Handle multiple tabs            |   Better test runner (time machine)
                Better with iFrames             |   Dashboard service
                More comfortable transition     |
                from Selenium                   |

        3 - Configuration of Development Environment
                Node.js                                 - installed
                VS Code                                 - installed
                Git                                     - installed
                PlayWright Test for VScode Extension    - installed

        4 - Clone Test application 
                Cloned pw-practice-app from https://github.com/bondar-artem/pw-practice-app
                Installed the packages - sudo npm i -f
                npm start - compiled successfully

Section 2: JavaScript Fundamentals
        5. Module Overview - done
        6. Hello World - done
                npm init in a folder
                create .js file to console.log() a text
        7. Variables  - done
        8. Concatenation and Interpolation - done
        9. Objects and Arrays - done
        10. Relational and Equality Operators - done
        11. Logical Operators - done
        12. Conditional Operators - done
        13. Loops - done
        14. Functions - done
        15. Class vs methods - done
        16. TypeScript vs JavaScript - done

Section 3: Playwright Hands-on Overview
        17. Playwright Installation - done
                sudo npm init playwright@latest
                Here, choose TS, e2e tests should be in tests, for GitHub actions workflow choose false for now, set true for Playwright browsers
        18. Test Execution with CLI - done
                npx playwright test
                npx playwright show-report
                npx playwright test --project=chromium
                npx playwright test -g "has title" --project=chromium
        19. Test Execution with UI - inProgress