console.log('################# Worker Initializing #################');

process.on('uncaughtException', (e) => {
  // logger.fatal(`Uncaught exception encountered: ${e.toString()}`, { stackTracer: e });
});
process.on('unhandledRejection', (e) => {
  // logger.fatal(`Uncaught rejection encountered: ${e.toString()}`, { stackTracer: e });
});

class Boot {
}

module.exports = Boot;
