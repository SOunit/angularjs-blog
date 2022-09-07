# run server

- Run `rackup` in Terminal/Command Prompt.
- Navigate to `http://127.0.0.1:9292/` or `http://localhost:9292/`

# initail setup steps

- ref
  https://github.com/codingforentrepreneurs/Guides/blob/master/all/angular_webserver.md

- install ruby
- create `Gemfile` in root dir
- copy and pate code from github to `Gemfile`
- run command
  ```
  bundle install
  ```
  ```
  gem install rack
  ```
- create `config.ru` file and paste from github
- Run rackup in Terminal/Command Prompt.
- Navigate to http://127.0.0.1:9292/ or http://localhost:9292/

# Windows: error: rackup not found

- install rackup separately
  ```
  gem install rack-session rackup
  ```
- add this to PATH
  ```
  C:\Ruby31-x64\bin\rackup.bat
  ```
