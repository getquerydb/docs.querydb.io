### Introduction

QueryDB is a tool to allow anyone to take advantage of the power of large and small data, QueryDB allows connecting to multiple data sources, exploring and executing complex queries according to the language of the database engine, this data can be exported to many format as JSON, XML formats among others.

Connect Any Sources
Explore and Execute Complex query
Export Any Format

#### QueryDB Features!

  - **Browser-based** : Everything in your browser.
  - **Ease-of-use** : Become immediately productive with data without the need to master complex software.
  - **Query editor** : Quickly compose SQL and NoSQL queries with a schema browser and auto-complete.
   - **Expression Language** : It´s use  [Spring Expression Language](https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html) to make complex rules to querys SQL and NoSQL.
  - **REST API** : Everything that can be done in the UI is also available through REST API
  - **Broad support for data sources** : Extensible data source API with native support for a long list of common databases and platforms

#### Supported Data Sources

QueryDB supports more than 7 SQL and NoSQL datasources, it can also be extended to support more. Below is a lis of build-in sources.
[See Here](/providers/overview)

#### Docker
QueryDB is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
docker build -t querydb/querydb:${package.json.version} .
```

#### Spring cloud
Add the following dependency to your pom.xml after you have build this project locally.
```xml
<dependency>
	<groupId>com.querydb</groupId>
	<artifactId>querydb-app</artifactId>
	<version>1.0.0.RELEASE</version>
</dependency>
```
Create the QueryDB with only one single Annotation.
```java
@SpringBootApplication
@EnableEurekaServer
@EnableDiscoveryClient
@EnableQueryDB
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
```

#### Reporting Bugs and Contributing Code
- Want to report a bug or request a feature? Please open [an issue.](https://github.com/getquerydb/querydb/issues/new)
- Want to help us build QueryDB? Fork the project, edit in a dev environment and make a pull request. We need all the help we can get!

#### Security

Please email reyiclaros@gmail.com to report any security vulnerabilities. We will acknowledge receipt of your vulnerability and strive to send you regular updates about our progress

License
----

BSD-2-Clause.
