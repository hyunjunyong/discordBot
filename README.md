# discordBot

**commands** - 명령어 파일들이 들어있는 폴더입니다.<br/>
**event** - discord.js 이벤트가 발생했을 때, 실행시키는 파일이 들어있는 폴더입니다. ("ready", "interactionCreate" 등...)<br/>
**handler** - commands 폴더에 있는 명령어 파일들을 불러오는 파일이 있는 폴더입니다.<br/>
**index.js** - 봇을 실행시킬 때 쓰이는 메인 파일입니다. <br/>
**package-lock.json** - npm 패키지 관련 파일입니다.<br/>
**package.json** - npm 패키지 관련 파일입니다.

market 업비트에서 제공중인 시장 정보 String
korean_name 거래 대상 암호화폐 한글명 String
english_name 거래 대상 암호화폐 영문명 String
market_warning 유의 종목 여부
NONE (해당 사항 없음), CAUTION(투자유의) String

market 종목 구분 코드 String
trade_date 최근 거래 일자(UTC)
포맷: yyyyMMdd String
trade_time 최근 거래 시각(UTC)
포맷: HHmmss String
trade_date_kst 최근 거래 일자(KST)
포맷: yyyyMMdd String
trade_time_kst 최근 거래 시각(KST)
포맷: HHmmss String
trade_timestamp 최근 거래 일시(UTC)
포맷: Unix Timestamp Long
opening_price 시가 Double
high_price 고가 Double
low_price 저가 Double
trade_price 종가(현재가) Double
prev_closing_price 전일 종가(UTC 0시 기준) Double
change EVEN : 보합
RISE : 상승
FALL : 하락 String
change_price 변화액의 절대값 Double
change_rate 변화율의 절대값 Double
signed_change_price 부호가 있는 변화액 Double
signed_change_rate 부호가 있는 변화율 Double
trade_volume 가장 최근 거래량 Double
acc_trade_price 누적 거래대금(UTC 0시 기준) Double
acc_trade_price_24h 24시간 누적 거래대금 Double
acc_trade_volume 누적 거래량(UTC 0시 기준) Double
acc_trade_volume_24h 24시간 누적 거래량 Double
highest_52_week_price 52주 신고가 Double
highest_52_week_date 52주 신고가 달성일
포맷: yyyy-MM-dd String
lowest_52_week_price 52주 신저가 Double
lowest_52_week_date 52주 신저가 달성일
포맷: yyyy-MM-dd String
timestamp 타임스탬프 Long
