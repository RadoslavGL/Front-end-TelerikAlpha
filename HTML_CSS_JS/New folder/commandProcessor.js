const commandProcessorFunc = function(commands){
    const processCommand = function(commandText){
        const commandParams = commandText.split(' ')
        const commandName = commandParams[0]
        commandParams.shift()
        const command = commands.find((command) => command.name === commandName)
        if (command === undefined){
            throw `Command ${commandName} is not defined!`
        }

        return command.execute(commandParams)
    }

    return processCommand
}