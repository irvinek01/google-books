function CardHeader({children}) {
    return (
        <div>
            <h2 className="text-dark">
                {children}
            </h2>
        </div>
    )
};

export default CardHeader;