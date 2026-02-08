const rawInput = `
DUMMY1,santosh,gita,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,santosh,gita,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,santosh,gita,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,gita,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,gita,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,gita,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gita,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,gita,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,santosh,savitha,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gita,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,santosh,savitha,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,santosh,savitha,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,savitha,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,santosh,savitha,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,savitha,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,savitha,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,santosh,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,savitha,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,santosh,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,santosh,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,santosh,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,gita,savitha,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,gita,savitha,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,gita,savitha,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,gita,savitha,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,gita,savitha,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,gita,savitha,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,gita,savitha,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,gita,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,gita,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,gita,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,gita,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,savitha,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,savitha,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,savitha,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,savitha,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,savitha,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,christina,DUMMY1,DUMMY2
DUMMY1,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,santosh,DUMMY1,janhvi,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,srikant,sudarshan,christina,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,srikant,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,sudarshan,chirag,christina,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,christina,DUMMY1
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,christina,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,chirag,christina,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,chirag,christina,DUMMY1
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,DUMMY1,srikant,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,DUMMY1,janhvi,sudarshan,chirag,christina,DUMMY1
DUMMY1,santosh,DUMMY1,srikant,sudarshan,chirag,christina,DUMMY2
DUMMY1,santosh,DUMMY1,srikant,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,christina
DUMMY1,santosh,DUMMY1,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,DUMMY1
DUMMY1,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,santosh,gita,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,santosh,gita,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,santosh,gita,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,gita,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,gita,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gita,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,gita,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gita,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,sudarshan,chirag,christina
sarvesh,santosh,gita,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,santosh,savitha,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,santosh,gita,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,santosh,savitha,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,santosh,savitha,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,santosh,savitha,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,savitha,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,savitha,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,savitha,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,savitha,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,savitha,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,chirag,christina
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,santosh,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,savitha,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,santosh,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,santosh,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,gita,savitha,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,gita,savitha,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,savitha,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,gita,savitha,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,gita,savitha,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,gita,savitha,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,gita,savitha,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,gita,savitha,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,gita,savitha,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,gita,savitha,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,gita,savitha,janhvi,srikant,sudarshan,chirag,christina
sarvesh,gita,savitha,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,gita,savitha,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,gita,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,gita,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,gita,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,gita,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,gita,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,gita,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,gita,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,savitha,gauravShinde,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,gita,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,savitha,gauravShinde,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,savitha,gauravShinde,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,savitha,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,savitha,gauravShinde,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,christina
sarvesh,savitha,gauravShinde,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,srikant,christina,DUMMY1,DUMMY2
sarvesh,savitha,gauravShinde,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,santosh,DUMMY1,srikant,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,sudarshan,christina,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,srikant,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,sudarshan,chirag,christina,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,christina,DUMMY1
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,christina,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,srikant,chirag,christina,DUMMY1
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,srikant,chirag,christina,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,DUMMY1,janhvi,srikant,chirag,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,srikant,sudarshan,chirag,christina,DUMMY1
sarvesh,santosh,DUMMY1,srikant,sudarshan,chirag,christina,DUMMY2
sarvesh,santosh,DUMMY1,srikant,sudarshan,chirag,DUMMY1,DUMMY2
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,christina
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,DUMMY1
sarvesh,santosh,DUMMY1,janhvi,srikant,sudarshan,chirag,DUMMY2
`.trim();

// const data = rawInput.split("\n").map((line) => line.split(","));

const data = [
	[
		{
			id: "E1",
			name: "gita",
			gender: "female",
			Location: "bkc",
			role: "SSA2",
			// role: "LEAD3",
			wantCompoff: "no",
			availableForNight: "no",
			interestedForContinousCompoff: "no",
			group: "G1",
		},
		{
			id: "E3",
			name: "janhvi",
			gender: "female",
			Location: "bkc",
			role: "SA1",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G1",
		},
		{
			id: "E4",
			name: "christina",
			gender: "female",
			Location: "bkc",
			role: "SA2",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G1",
		},
		{
			id: "E2",
			name: "savitha",
			gender: "female",
			Location: "bcp",
			role: "SSA2",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G1",
		},
	],
	[
		{
			id: "E12",
			name: "santosh",
			gender: "male",
			Location: "bkc",
			role: "SSA1",
			// role: "LEAD3",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G3",
		},
		{
			id: "E26",
			name: "gauravShinde",
			gender: "male",
			Location: "bkc",
			role: "SSA2",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G3",
		},

		{
			id: "E15",
			name: "srikant",
			gender: "male",
			Location: "bcp",
			role: "SA1",
			wantCompoff: "yes",
			availableForNight: "yes",
			interestedForContinousCompoff: "yes",
			group: "G3",
		},
	],
];

const minLength = 4;
const filtered = data.filter((list) => list.length >= minLength);
console.log("the filtered is ", filtered);

const isDummy = (name) => name.name.startsWith("DUMMY");

const countDummies = (list) =>
	list.reduce((count, name) => count + (isDummy(name) ? 1 : 0), 0);

const groupedByDummyCount = filtered.reduce((groups, list) => {
	const dummyCount = countDummies(list);

	if (!groups[dummyCount]) {
		groups[dummyCount] = [];
	}

	groups[dummyCount].push(list);
	return groups;
}, {});

const namedGroups = Object.fromEntries(
	Object.entries(groupedByDummyCount).map(([count, lists]) => [
		`group${count}`,
		lists,
	]),
);

// console.log(typeof namedGroups);
// console.log(namedGroups);

// const firstKey = Object.keys(namedGroups)[0];
// console.log(firstKey);
// Output: key1
// console.log(namedGroups["group0"]);
const satSupportTable = {
	gita: [1, 1, 0, 0],
	savitha: [0, 0, 0, 0],
	janhvi: [1, 1, 0, 0],
	christina: [1, 1, 0, 0],
	vikas: [1, 0, 1, 0],
	prajakta: [1, 0, 1, 0],
	vaishali: [1, 0, 1, 0],
	arushina: [1, 0, 1, 0],
	sarvesh: [1, 1, 0, 0],
	prabhakr: [1, 0, 1, 0],
	balachander: [1, 0, 1, 0],
	santosh: [1, 1, 0, 0],
	shubhamKadam: [1, 0, 1, 0],
	gauravShinde: [0, 0, 0, 0],
	ajayjangid: [1, 0, 1, 0],
	srikant: [1, 1, 0, 0],
	sudarshan: [1, 1, 0, 0],
	chirag: [1, 1, 0, 0],
	abhishekMehta: [1, 0, 1, 0],
	kavin: [1, 0, 1, 0],
};

let ans;

for (const group in namedGroups) {
	// if (Object.hasOwnProperty.call(namedGroups, group)) {
	// 	console.log(group); // Prints the key name
	// }
	console.log("the group is", group);
	for (const a of namedGroups[group]) {
		// console.log("the a is : ", a);
		// console.log(a.join(","));
	}
	console.log("------------------------");
	console.log("------------------------");
	// console.log(group.key);
	// console.log(group.length);
	// const v1 = [];
	// for (const emp of combo) {
	// 	v1.push(emp.name);
	// 	// console.log(emp.name);
	// }
	// // console.log(v1.join(","));
	// // const fileContent = v1.join(",");
	// // Example usage:
	// appendToFile(filePath, v1.join(","));
}

for (const group of namedGroups["group0"]) {
	// console.log("the group is", group);
	let cnt = 0;
	let maxi = 50000;

	for (b of group) {
		// console.log(satSupportTable[b]);
		// console.log("the b is", b);
		cnt += satSupportTable[b.name][1];
	}
	if (cnt < maxi) {
		maxi = cnt;
		ans = group;
	}
	// console.log(cnt);
}
// console.log("the final ans is : ", ans);
let ansInPlainArray = [];
for (const a of ans) {
	// console.log("the a is : ", a);
	ansInPlainArray.push(a.name);
}
console.log("the final plian arry is : ", ansInPlainArray.join(","));
// if above ans is empty then move to next group and do while get some value in answer.
