  const [contents, setContents] = useState([

        <RadioLikertSSQ
            key={1}
            SaveId={"SSQ1"}
            question={"컨텐츠를 수행하면서 전반적으로 불편함을 느꼈다."}
            radioName={"RadioForSSQ1"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ1", answer)}
        />,

        <RadioLikertSSQ
            key={2}
            SaveId={"SSQ2"}
            question={"컨텐츠를 수행하면서 피로감을 느꼈다."}
            radioName={"RadioForSSQ2"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ2", answer)}
        />,

        <RadioLikertSSQ
            key={3}
            SaveId={"SSQ3"}
            question={"컨텐츠를 수행하면서 두통을 느꼈다."}
            radioName={"RadioForSSQ3"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ3", answer)}
        />,

        <RadioLikertSSQ
            key={4}
            SaveId={"SSQ4"}
            question={"컨텐츠를 수행하면서 눈의 피로를 느꼈다."}
            radioName={"RadioForSSQ4"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ4", answer)}
        />,

        <RadioLikertSSQ
            key={5}
            SaveId={"SSQ5"}
            question={"컨텐츠를 수행하면서 눈의 초점을 맞추기 힘들었다."}
            radioName={"RadioForSSQ5"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ5", answer)}
        />,

        <RadioLikertSSQ
            key={6}
            SaveId={"SSQ6"}
            question={"컨텐츠를 수행하면서 침의 분비량이 증가하였다."}
            radioName={"RadioForSSQ6"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ6", answer)}
        />,

        <RadioLikertSSQ
            key={7}
            SaveId={"SSQ7"}
            question={"컨텐츠를 수행하면서 땀이 났다."}
            radioName={"RadioForSSQ7"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ7", answer)}
        />,

        <RadioLikertSSQ
            key={8}
            SaveId={"SSQ8"}
            question={"컨텐츠를 수행하면서 메스꺼웠다."}
            radioName={"RadioForSSQ8"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ8", answer)}
        />,

        <RadioLikertSSQ
            key={9}
            SaveId={"SSQ9"}
            question={"컨텐츠에 집중하기 어려웠다."}
            radioName={"RadioForSSQ9"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ9", answer)}
        />,

        <RadioLikertSSQ
            key={10}
            SaveId={"SSQ10"}
            question={"컨텐츠를 수행하면서 머리가 꽉 찬 느낌을 경험하였다."}
            radioName={"RadioForSSQ10"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ10", answer)}
        />,

        <RadioLikertSSQ
            key={11}
            SaveId={"SSQ11"}
            question={"컨텐츠를 수행하면서 시야가 흐려지는 것을 경험하였다."}
            radioName={"RadioForSSQ11"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ11", answer)}
        />,

        <RadioLikertSSQ
            key={12}
            SaveId={"SSQ12"}
            question={"컨텐츠를 수행하면서 `눈을 떴을 때` 현기증이 났다"}
            radioName={"RadioForSSQ12"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ12", answer)}
        />,

        <RadioLikertSSQ
            key={13}
            SaveId={"SSQ13"}
            question={"컨텐츠를 수행하면서 `눈을 감았을 때` 현기증이 났다."}
            radioName={"RadioForSSQ13"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ13", answer)}
        />,

        <RadioLikertSSQ
            key={14}
            SaveId={"SSQ14"}
            question={"컨텐츠를 수행하면서 빙빙 도는 느낌의 어지러움을 경험하였다."}
            radioName={"RadioForSSQ14"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ14", answer)}
        />,

        <RadioLikertSSQ
            key={15}
            SaveId={"SSQ15"}
            question={"컨텐츠를 수행하면서 위장에 부담감이 느껴지는 것을 경험하였다."}
            radioName={"RadioForSSQ15"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ15", answer)}
        />,

        <RadioLikertSSQ
            key={16}
            SaveId={"SSQ16"}
            question={"컨텐츠를 수행하면서 트림을 경험하였다."}
            radioName={"RadioForSSQ16"}
            optionNames={[
                { label: "없음", value: 0 },
                { label: "약간", value: 1 },
                { label: "중간", value: 2 },
                { label: "매우", value: 3 }
            ]}
            onChange={(answer) => handleQuestionChange("RadioForSSQ16", answer)}
        />
    ]);