const container = (function(){
    const modelFactory = modelFactoryFunc()
    const dataBase = dataBaseFunc()
    const commands = commandsFunc(modelFactory, dataBase)
    const commandProcessor = commandProcessorFunc(commands)

    return {
        commandProcessor
    }
}())