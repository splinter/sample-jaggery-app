
# Contents
* Introduction
* Prerequisites
* Installation

# Introduction

The sample introduces some key concepts of building a Jaggery application using;

1. Jaggery Pipe
2. Router 
3. Caramel

This application can also be used as a template for structuring your code.It is recommened that the user
explore this sample using the companion aricle available at : .
 
** Note ** : Jaggery now comes with Caramel, unlike previous versions.

# Prerequisites
The number of prerequisites to get this application running is quite lite; only requiring the Jaggery runtime and a few modules.

## Runtime
This sample has been tested with JAGGERY ALPHA 4 v4 pack available from the official jaggery site (URL:).

** Note ** : This sample will not work with previous versions of Jaggery as it uses the application.serve which
has only been added in v4.

## Modules

This sample requires the following Jaggery modules:

- pipe (Available at: [https://github.com/splinter/jaggery-pipe](https://github.com/splinter/jaggery-pipe) )
- pipe-common (Available at: [https://github.com/splinter/jaggery-pipe/tree/master/plugins/pipe-common](https://github.com/splinter/jaggery-pipe/tree/master/plugins/pipe-common) )
- router (Available at: [https://github.com/splinter/jaggery-pipe/tree/master/plugins/router](https://github.com/splinter/jaggery-pipe/tree/master/plugins/router))
- caramel-view-engine (Available at: [https://github.com/splinter/caramel-view-engine](https://github.com/splinter/caramel-view-engine))

Although the above modules are bundled with this sample under the prerequisites, you can also
get latest version from the respective repos.

# Installation
1. Copy all of the folders in the prerequisites directory to the JAGGERY_HOME/modules directory
2. Copy the sample directory to the JAGGERY_HOME/apps directory
3. Start the server with the command sh bin/server.sh -DmodRefresh=true (This will ensure changes to routing code are loaded)


That is it! You can now navigate to either

- [http://localhost:9763/sample/contacts](http://localhost:9763/sample/contacts) or
- [https://localhost:9443/sample/contacts](http://localhost:9763/sample/contacts) to get started.




